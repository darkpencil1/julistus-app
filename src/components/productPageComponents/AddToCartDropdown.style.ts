import styled from "styled-components";

const StyledAddToCartDropdown = styled.div`
  height: 50px;
  width: 200px;
  font-weight: ${(p) => p.theme.fw.fw_semibold};
  position: relative;

  .addToCart__selected {
    height: 50px;
    padding: 10px;
    border: 1px solid blue;
    border-radius: ${(p) => p.theme.br.br_medium};
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }

  .addToCart__dropdown {
    display: flex;
    flex-direction: column;
    border-radius: ${(p) => p.theme.br.br_medium};
    background-color: ${(p) => p.theme.colors.white};
    padding-bottom: 10px;

    > span {
      height: 20px;
      max-width: 200px;
      padding: 10px 5px;
      margin-bottom: 20px;
      font-weight: ${(p) => p.theme.fw.fw_semibold};
      cursor: pointer;

      :hover {
        background-color: ${(p) => p.theme.colors.bg};
      }
    }
    .addToCart__dropdown-option--secondary {
      font-size: ${(p) => p.theme.fs.font_sm};
      font-weight: ${(p) => p.theme.fw.fw_regular};
      margin-left: 10px;
    }
  }
`;

export default StyledAddToCartDropdown;
