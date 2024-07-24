import styled from "styled-components";

const StyledAddToCartPanel = styled.div`
  max-width: 1400px;
  display: inline-block;
  margin: 20px auto;

  .addToCart__panel {
    padding: 0px 20px;
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .addToCart__dropdown-wrapper {
    display: flex;
    flex-direction: row;
  }

  .addToCart__dropdown-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .addToCart__price {
    display: flex;
    flex-direction: column;
    text-align: center;
    > p {
      margin: 0;
      font-size: ${(p) => p.theme.fs.font_lg};
      font-weight: ${(p) => p.theme.fw.fw_bold};
      /*Prevent horizontal movement when price changes*/
      width: 80px;
      overflow-x: visible;
    }
  }

  @media (max-width: 1300px) {
    .addToCart__panel {
      flex-direction: column;
      padding: 0 0 10px 0;
      gap: 5px;
    }
    .addToCart__dropdown-wrapper {
      flex-direction: column;

      .addToCart__dropdown-container {
        padding-bottom: 0;
      }

      > img {
        display: none;
      }
    }
  }
`;

export default StyledAddToCartPanel;
