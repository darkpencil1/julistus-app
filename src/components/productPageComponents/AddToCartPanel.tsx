import { useEffect, useState } from "react";
import AddToCartDropdown, { DropdownOption } from "./AddToCartDropdown";
import { useProduct } from "../../state/contexts/productContext";
import Button from "../baseComponents/Button";
import StyledAddToCartPanel from "./AddToCartPanel.style";
import posterOptions from "../../resources/productOptions/posterOptions";
import quantities from "../../resources/productOptions/quantity";

export type AddToCartOption = {
  name: string;
  data: DropdownOption[];
  default?: DropdownOption;
};

type SelectedOption = {
  id: DropdownOption["id"];
  name: DropdownOption["name"];
  key: number;
};

export const AddToCartPanel = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [options, setOptions] = useState<AddToCartOption[]>([]);
  //Product type, say poster, should have available options stored in an interface
  const { product } = useProduct();

  const addCartEntry = (option: DropdownOption, i: number): void => {
    //Create a correct format to insert data into cart
    const formattedSelection: SelectedOption = {
      name: option.name,
      id: option.id,
      key: i,
    };

    //Check if dropdown had already had something else selected
    const index = selectedOptions?.findIndex(
      (opt: SelectedOption) => opt.id === i
    );

    if (index !== -1) {
      setSelectedOptions((prevState) => [
        ...prevState.slice(0, index),
        formattedSelection,
        ...prevState.slice(index + 1),
      ]);
    } else {
      setSelectedOptions((prevState) => [...prevState, formattedSelection]);
    }
  };

  useEffect(() => {
    if (product?.class === "poster") {
      setOptions(posterOptions);
    }
  }, [product]);

  return (
    <StyledAddToCartPanel>
      <div className="addToCart__panel">
        {options?.map((option: AddToCartOption, i: number) => {
          return (
            <div className="addToCart__dropdown-container" key={i}>
              <label>{option.name}</label>
              <AddToCartDropdown
                options={option}
                setSelected={addCartEntry}
                dropdownId={i}
                size={option.name === quantities.name ? "sm" : "normal"}
              />
            </div>
          );
        })}

        <div className="addToCart__price">
          <label>Hinta</label>
          <p>{product?.price}€</p>
        </div>
        <Button text="Lisää koriin" size="md" type="primary" />
      </div>
    </StyledAddToCartPanel>
  );
};
