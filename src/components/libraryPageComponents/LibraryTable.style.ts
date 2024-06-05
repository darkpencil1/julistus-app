import styled from "styled-components";

const StyledLibraryTable = styled.div`
  width: 80%;
  margin-bottom: 100px;

  .library__banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 15px 15px 0 0;
    h3 {
      color: ${(props) => props.theme.colors.secondary};
      text-shadow: ${(p) => p.theme.ts.base};
    }
  }

  table {
    border-collapse: collapse;
    border: 1px solid ${(p) => p.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.white};
    border-radius: 0 0 15px 15px;
    width: 100%;

    tr {
      border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    }

    thead {
      width: 100%;
      background-color: ${(p) => p.theme.colors.bg};

      th:first-of-type {
        width: 50%;
      }

      th {
        text-align: left;
        padding: 10px;
        text-transform: capitalize;
      }
    }

    tbody {
      tr {
        height: 100px;

        td:first-of-type {
          width: 50%;
          font-size: ${(p) => p.theme.fs.font_xl};
          font-weight: ${(p) => p.theme.fw.fw_bold};
        }

        td {
          padding: 10px;
          text-align: left;
        }
      }
      tr.library__row--expanded {
        border-bottom: none;
      }

      tr.library__row-description {
        width: 100%;
        td {
          font-size: ${(p) => p.theme.fs.font_md};
          font-weight: ${(p) => p.theme.fw.fw_regular};
        }
      }
    }
  }
`;

export default StyledLibraryTable;
