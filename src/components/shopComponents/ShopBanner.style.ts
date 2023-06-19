import styled from "styled-components";
import Row from "../baseComponents/Row.style";
import bg from "../../resources/images/wide1.png";

//const content_gap = "10px";

const StyledProductBanner = styled(Row)`
  height: 250px;
  position: relative;
  overflow: hidden;
  width: 100%;

  .banner__text-container {
    width: ${(p) => p.theme.column.column_6};
    background-color: ${(p) => p.theme.colors.bg};
  }
  .banner__img {
    width: ${(p) => p.theme.column.column_6};
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default StyledProductBanner;
