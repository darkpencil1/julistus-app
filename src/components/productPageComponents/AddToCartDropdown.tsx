import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AddToCartOption } from "./AddToCartPanel";
import StyledAddToCartDropdown, {
  DropdownSize,
} from "./AddToCartDropdown.style";

export type DropdownOption = {
  id: number;
  name: string | number;
  price?: number;
  specs?: string;
};

type AddToCartDropdownProps = {
  options: AddToCartOption;
  setSelected: (param1: DropdownOption, param2: number) => void;
  dropdownId: number;
  size?: DropdownSize;
};

const AddToCartDropdown = ({
  options,
  setSelected,
  dropdownId,
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

  const handleDropdownChange = (option: DropdownOption) => {
    setPlaceholder(null);
    setSelected(option, dropdownId);
    // Update the local state with the selected option
    setSelectedOption(option);
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
                  onClick={() => handleDropdownChange(option)}
                >
                  {option.name}
                  {option.specs && (
                    <span className="addToCart__dropdown-option--secondary">
                      &nbsp;({option.specs})
                    </span>
                  )}
                  {option.price && (
                    <span className="addToCart__dropdown-option--price">
                      {option.price}€
                    </span>
                  )}
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
