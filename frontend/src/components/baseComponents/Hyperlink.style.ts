import styled from "styled-components";

const StyledHyperLink = styled.a`
  display: inline-block;

  &:hover {
    border-bottom: 2px solid ${(p) => p.theme.colors.primary};
    cursor: pointer;
  }
  .hyperlink__icon {
    vertical-align: bottom;
  }

  .hyperlink__icon {
    width: 20px;
    height: 20px;
    fill: ${(p) => p.theme.colors.primary};
    margin-left: ${(p) => p.theme.spacing.spacing_2};
  }
`;

export default StyledHyperLink;
