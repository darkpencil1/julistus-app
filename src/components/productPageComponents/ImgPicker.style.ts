import styled from "styled-components";
import Col from "../baseComponents/Col.style";

const StyledImgPicker = styled(Col)`

    width: ${(p) => p.theme.column.col_1};
    max-height: 100%;
    overflow-y: scroll;
    flex-direction: column;
    gap: 1rem 0;
    height: 100%;
    display: flex;

  .picker__img-container {
    background-color: white;
    min-width: 150px;
    min-height: 150px;
    position: relative;
    border-radius: ${(p) => p.theme.br.br_small};
  }
  }
  .picker__thumbnail-img {
    object-fit: contain;
    max-width: 90%;
    max-height: 90%;
    padding: 0 ${(p) => p.theme.spacing.spacing_2};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${(p) => p.theme.br.br_small};
  }
`;

export default StyledImgPicker;
