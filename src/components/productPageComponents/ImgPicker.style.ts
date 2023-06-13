import styled from "styled-components";
import Col from "../baseComponents/Col.style";

const StyledImgPicker = styled(Col)`
  width: ${(p) => p.theme.column.col_1};
  .thumbnail__container {
    flex-direction: column;
    gap: 2rem 0;
    justify-content: center;
    height: 100%;
  }
  .img__container {
    background-color: white;
    position: relative;
    width: ${(p) => p.theme.column.col_12};
    padding: 0 ${(p) => p.theme.spacing.spacing_4};
    border-radius: ${(p) => p.theme.br.br_small};
  }
  }
  .thumbnail__img {
    width: 100%;
    padding: 0 ${(p) => p.theme.spacing.spacing_2};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${(p) => p.theme.br.br_small};
  }
`;

export default StyledImgPicker;
