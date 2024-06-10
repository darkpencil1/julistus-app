import { useSearchParams } from "react-router-dom";
import ProductImgContainer from "../productPageComponents/ProductImgContainer";
import ProductText from "../productPageComponents/ProductText";
import StyledProductPage from "./Product.style";
import Row from "../baseComponents/Row.style";
import { useEffect } from "react";
import { AddToCartPanel } from "../productPageComponents/AddToCartPanel";
import { useAppContext } from "../../state/contexts/AppContextProvider";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { state, setProduct } = useAppContext();

  //Set product if none is set
  //eg. when user navigates via url instead of shop
  useEffect(() => {
    if (!state.product) {
      //Conversion to number can throw an error.
      setProduct(Number(id));
    }
  }, []);

  return (
    <StyledProductPage>
      <Row className="product__container">
        <div className="product__img-container">
          <ProductImgContainer />
        </div>
        <ProductText />
      </Row>
      <AddToCartPanel />
    </StyledProductPage>
  );
};

export default ProductPage;
