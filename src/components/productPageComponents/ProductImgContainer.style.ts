import Row from "../baseComponents/Row.style";
import styled from "styled-components";

const StyledProductImgContainer = styled(Row)`
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-between;

  height: 100%;

  background-color: ${(p) => p.theme.colors.bg};

  margin: 0 ${(p) => p.theme.spacing.spacing_2};
  padding: 0 ${(p) => p.theme.column.spacing_4};
  padding-top: 20px;
`;

export default StyledProductImgContainer;
