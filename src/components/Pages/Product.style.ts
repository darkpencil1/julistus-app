import styled from "styled-components";
import Container from "../baseComponents/Container.style";

const StyledProductPage = styled(Container)`
  margin: 0 1rem;
  .text__container {
    text-align: center;
  }
  .product__col {
    flex: 2 1;
  }

  .product__container {
    margin: 2rem 0 0 2rem;
    justify-content: space-between;
  }
`;

export default StyledProductPage;
