import { SizeDropdown } from "./SizeDropdown";
import { AdditionalCartInfo } from "./AdditionalCartInfo";
import { AddToCartBtn } from "./AddToCartBtn";
import { useProduct } from "../../state/contexts/productContext";
import StyledAddToCartPanel from "./AddToCartPanel.style";

export const AddToCartPanel = () => {
  const { product } = useProduct();
  return (
    <StyledAddToCartPanel>
      <p className="product__type">juliste</p>
      <h2>{product?.name}</h2>
      <div className="mb-4">
        <span className="small">Materiaali: </span>
        <span className="fw-bold">Painotettu paperi</span>
      </div>
      <div className="mb-4">
        <p className="mb-0">Koko</p>
        <SizeDropdown />
      </div>
      <h2 className="border-bottom mb-4">{product?.price}€</h2>
      <AddToCartBtn />
      <AdditionalCartInfo />
    </StyledAddToCartPanel>
  );
};
