import { DropdownOption } from "../../components/productPageComponents/AddToCartDropdown";
import { AddToCartOption } from "../../components/productPageComponents/AddToCartPanel";

const makeQuantityOptions = (): AddToCartOption => {
  //The available quantity customer can order spesific product at once
  const numbers = Array.from(Array(10), (_, i) => i + 1);

  const data: DropdownOption[] = numbers.map((num: number) => {
    return {
      id: num,
      name: num.toString(),
      price: num,
    };
  });

  return {
    name: "Määrä",
    id: "QUANTITY",
    data: data,
    default: data[0],
    primary: false,
  };
};

const quantities = makeQuantityOptions();
export default quantities;
