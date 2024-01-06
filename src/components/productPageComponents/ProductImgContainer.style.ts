import Row from "../baseComponents/Row.style";
import styled from "styled-components";

const StyledProductImgContainer = styled(Row)`
  width: ${(p) => p.theme.column.col_6};
  max-width: ${(p) => p.theme.column.col_6};
  flex-direction: column;
  flex-wrap: no-wrap;
  background-color: rgb(237, 237, 237);
  border-radius: ${(p) => p.theme.br.br_round};
  margin: 0 ${(p) => p.theme.spacing.spacing_2};
  padding: ${(p) => p.theme.spacing.spacing_2}
    ${(p) => p.theme.column.spacing_4};
`;

export default StyledProductImgContainer;
