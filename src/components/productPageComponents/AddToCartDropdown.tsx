import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AddToCartOption, SelectedOption } from "./AddToCartPanel";
import StyledAddToCartDropdown, {
  DropdownSize,
} from "./AddToCartDropdown.style";
import quantities from "../../resources/productOptions/quantity";
import dropdownArrow from "../../resources/images/dropdown_arrow.svg";

export type DropdownOption = {
  id: number;
  name: string | number;
  price: number;
  specs?: string;
};

type AddToCartDropdownProps = {
  options: AddToCartOption;
  addCartEntry: (param1: SelectedOption) => void;
  size?: DropdownSize;
};

const AddToCartDropdown = ({
  options,
  addCartEntry,
  size,
}: AddToCartDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOption | undefined
  >(undefined);
  const [placeholder, setPlaceholder] = useState<string | null>(null);
  //Too rapid clicks can leave dropdown empty due to animation delays
  //State is true when no animation is in play
  const [clickable, setClickable] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemDelayMultiplier = options.data.length > 4 ? 0.05 : 0.2;
  const containerDelayMultiplier = options.data.length > 4 ? 0.05 : 0.1;

  //Initialize the dropdown
  useEffect(() => {
    if (options.default) {
      setSelectedOption(options.default);
    } else setPlaceholder(`Valitse ${options.name.toLowerCase()}...`);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        // Clicked outside the component
        setShow(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Pressed the escape key
        setShow(false);
      }
    };

    // Add event listeners when the component mounts
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleDropdownChange = (
    option: DropdownOption,
    dropdownId: AddToCartOption["id"]
  ) => {
    setPlaceholder(null);
    addCartEntry({ ...option, dropdownId: dropdownId });
    // Update the local state with the selected option
    setSelectedOption(option);
  };

  const formatPrice = (option: DropdownOption) => {
    //Don't add currency information to quantity dropdown
    if (options.id === quantities.id) {
      return "";
    } else if (options.primary) {
      return option.price + "€";
      //Add plus to secondary items that affect the base price set by primary product
    } else return "+" + option.price + "€";
  };

  return (
    <StyledAddToCartDropdown
      onClick={() => clickable && setShow(!show)}
      ref={dropdownRef}
      size={size ? size : "normal"}
    >
      <div className="addToCart__selected">
        {placeholder && (
          <span className="addToCart__placeholder">{placeholder}</span>
        )}

        {selectedOption && `${selectedOption.name}`}
        {selectedOption && selectedOption.specs && (
          <span className="addToCart__selected--secondary">
            &nbsp;({selectedOption.specs})
          </span>
        )}
        <motion.img
          animate={{ rotate: show ? 180 : 0 }}
          className="addToCart__dropdown-arrow"
          src={dropdownArrow}
        />
      </div>
      <AnimatePresence onExitComplete={() => setShow(false)}>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0 } }}
            exit={{
              opacity: [1, 0],
              translateX: -10,
              transition: {
                delay: (options.data.length + 1) * containerDelayMultiplier,
              },
            }}
            className="addToCart__dropdown"
            onAnimationStart={() => setClickable(false)}
            onAnimationComplete={() => setClickable(true)}
          >
            {options.data.map((option: DropdownOption, i: number) => {
              return (
                <motion.span
                  animate={{
                    translateX: [-20, 0],
                    opacity: [0, 1],
                    transition: {
                      delay: i * itemDelayMultiplier,
                    },
                  }}
                  exit={{
                    translateX: [0, -20],
                    opacity: [1, 0],
                    transition: {
                      delay: (options.data.length - i) * 0.05,
                    },
                  }}
                  key={option.id}
                  onClick={() => handleDropdownChange(option, options.id)}
                >
                  {option.name}
                  {option.specs && (
                    <span className="addToCart__dropdown-option--secondary">
                      &nbsp;({option.specs})
                    </span>
                  )}
                  <span className="addToCart__dropdown-option--price">
                    {formatPrice(option)}
                  </span>
                </motion.span>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledAddToCartDropdown>
  );
};
export default AddToCartDropdown;
