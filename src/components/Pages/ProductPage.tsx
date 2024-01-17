import { useSearchParams } from "react-router-dom";
import ProductImgContainer from "../productPageComponents/ProductImgContainer";
import ProductText from "../productPageComponents/ProductText";
import StyledProductPage from "./Product.style";
import Row from "../baseComponents/Row.style";
import { useEffect } from "react";
import { useProduct } from "../../state/contexts/productContext";
import { AddToCartPanel } from "../productPageComponents/AddToCartPanel";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { product, selectProduct } = useProduct();

  //Set product if none is set
  //eg. when user navigates via url instead of shop
  useEffect(() => {
    if (!product) {
      //Conversion to number can throw an error.
      selectProduct(Number(id));
    }
  }, []);

  return (
    <StyledProductPage>
      <Row className="product__container">
        <ProductImgContainer />
        <ProductText />
      </Row>
      <AddToCartPanel />
    </StyledProductPage>
  );
};

export default ProductPage;
