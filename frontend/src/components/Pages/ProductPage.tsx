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
  const { setProduct } = useAppContext();

  useEffect(() => {
    setProduct(Number(id));
  }, []);

  return (
    <StyledProductPage>
      <div className="product__wrapper">
        <Row className="product__container">
          <div className="product__img-container">
            <ProductImgContainer />
          </div>
          <ProductText />
        </Row>
        <AddToCartPanel />
      </div>
    </StyledProductPage>
  );
};

export default ProductPage;
