import styled from "styled-components";
import banner from "../../resources/images/library-banner.jpg";

const StyledLibraryTable = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  border: 1px solid ${(p) => p.theme.colors.primary};
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 15px;
  margin-bottom: 100px;

  .library__banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 15px 15px 0 0;
    h3 {
      color: ${(props) => props.theme.colors.secondary};
      text-shadow: ${(p) => p.theme.ts.base};
    }
  }

  .library__row-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${(p) => p.theme.colors.bg};

    span:first-of-type {
      flex: 3;
    }

    span {
      flex: 1;
      text-align: left;
      padding: 10px;
      text-transform: capitalize;
      font-weight: ${(p) => p.theme.fw.fw_semibold};
    }
  }

  .library__row-container {
    display: flex;
    flex-direction: column;

    .library__row {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      height: 100px;
      border-top: 1px solid ${(p) => p.theme.colors.primary};

      span:first-of-type {
        flex: 3;
        font-size: ${(p) => p.theme.fs.font_xl};
        font-weight: ${(p) => p.theme.fw.fw_bold};
      }

      span {
        flex: 1;
        padding: 10px;
        text-align: left;
      }
    }
    .library__dropdown-arrow {
      height: 20px;
      position: absolute;
      right: 30px;
      top: 40%; /*Visually centers the arrow*/
      transform: translateY(-50%);
    }

    .library__row-description {
      width: 90%;
      padding: 0 10px;
    }
  }
`;

export default StyledLibraryTable;
