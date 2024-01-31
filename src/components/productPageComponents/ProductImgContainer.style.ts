import Row from "../baseComponents/Row.style";
import styled from "styled-components";

const StyledProductImgContainer = styled(Row)`
  flex-direction: column;
  flex-wrap: no-wrap;

  height: 100%;

  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.br.br_large};
  border-bottom: 5px solid ${(props) => props.theme.colors.gray};
  border-right: 5px solid ${(props) => props.theme.colors.gray};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};

  margin: 0 ${(p) => p.theme.spacing.spacing_2};
  padding: 0 ${(p) => p.theme.column.spacing_4};
`;

export default StyledProductImgContainer;
