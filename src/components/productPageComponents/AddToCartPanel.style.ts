import styled from "styled-components";
import Row from "../baseComponents/Row.style";

const StyledAddToCartPanel = styled(Row)`
  margin: 20px;
  padding: 20px;
  border: 2px solid ${(p) => p.theme.primary};

  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.br.br_medium};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .addToCart__dropdown-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .addToCart__price {
    display: flex;
    flex-direction: column;
    > p {
      margin: 0;
      font-size: ${(p) => p.theme.fs.font_lg};
      font-weight: ${(p) => p.theme.fw.fw_bold};
    }
  }
`;

export default StyledAddToCartPanel;
