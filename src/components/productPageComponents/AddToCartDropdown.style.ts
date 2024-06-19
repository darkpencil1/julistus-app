import styled from "styled-components";

export type DropdownSize = "normal" | "sm";
type StyledDropdownProps = {
  size: DropdownSize;
};

const StyledAddToCartDropdown = styled.div<StyledDropdownProps>`
  height: 50px;
  width: ${(p) => (p.size === "normal" ? "250" : "70")}px;
  font-weight: ${(p) => p.theme.fw.fw_semibold};
  cursor: pointer;
  position: relative;

  .addToCart__selected {
    height: 50px;
    padding: 10px;
    border: 1px solid blue;
    border-radius: ${(p) => p.theme.br.br_medium};
    font-weight: ${(p) => p.theme.fw.fw_semibold};
    position: relative;

    .addToCart__selected--secondary {
      margin-left: 10px;
      font-size: ${(p) => p.theme.fs.font_sm};
    }

    .addToCart__placeholder {
      font-size: ${(p) => p.theme.fs.font_sm};
      color: ${(p) => p.theme.colors.gray};
    }

    .addToCart__dropdown-arrow {
      position: absolute;
      right: 10px;
      /*Perhaps due to the svg, to get correct centering dont go all the way to 50%*/
      top: 45%;
    }
  }

  .addToCart__dropdown {
    display: flex;
    flex-direction: column;
    border-radius: ${(p) => p.theme.br.br_medium};
    background-color: ${(p) => p.theme.colors.white};
    padding-bottom: 10px;

    > span {
      height: 40px;
      max-width: ${(p) => (p.size === "normal" ? "250" : "70")}px;
      padding: 10px 5px;
      font-weight: ${(p) => p.theme.fw.fw_semibold};
      cursor: pointer;
      position: relative;
      line-height: 1;
      ${(p) =>
        p.size === "sm" &&
        `
          text-align: center;
        `}

      &:hover {
        background-color: ${(p) => p.theme.colors.bg};
      }
    }
    .addToCart__dropdown-option--secondary {
      font-size: ${(p) => p.theme.fs.font_xs};
      font-weight: ${(p) => p.theme.fw.fw_regular};
      margin-left: 10px;
    }
    .addToCart__dropdown-option--price {
      position: absolute;
      right: 10px;
      font-size: ${(p) => p.theme.fs.font_sm};
      font-weight: ${(p) => p.theme.fw.fw_regular};
    }
  }
`;

export default StyledAddToCartDropdown;
