import styled from "styled-components";
import Row from "../baseComponents/Row.style";
import banner from "../../resources/images/banner.png";

//const content_gap = "10px";

const StyledProductBanner = styled(Row)`
  height: 400px;
  position: relative;
  overflow: hidden;
  width: 100%;

  .banner__text-container {
    width: ${(p) => p.theme.column.column_6};
    background-color: ${(p) => p.theme.colors.bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .banner__title {
    font-size: 4rem;
    text-transform: uppercase;
    margin: ${(p) => p.theme.spacing.spacing_6} auto;
  }

  .banner__desc {
    font-size: 1.5rem;
    max-width: 600px;
  }
  .banner__img {
    width: ${(p) => p.theme.column.column_6};
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default StyledProductBanner;
