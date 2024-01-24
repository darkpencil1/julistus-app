import Row from "../baseComponents/Row.style";
import styled from "styled-components";

const StyledProductImgContainer = styled(Row)`
  width: ${(p) => p.theme.column.col_6};
  max-width: ${(p) => p.theme.column.col_6};
  flex-direction: column;
  flex-wrap: no-wrap;

  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.br.br_round};
  border-bottom: 5px solid ${(props) => props.theme.colors.bg};
  border-right: 5px solid ${(props) => props.theme.colors.bg};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};

  margin: 0 ${(p) => p.theme.spacing.spacing_2};
  padding: ${(p) => p.theme.spacing.spacing_2}
    ${(p) => p.theme.column.spacing_4};
`;

export default StyledProductImgContainer;
