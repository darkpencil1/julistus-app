import styled from "styled-components";
import Container from "../baseComponents/Container.style";

const StyledFooter = styled(Container)`
  margin: 0;
  padding: 0;

  footer {
    padding: ${(p) => p.theme.spacing.spacing_3} 0;
    margin: ${(p) => p.theme.spacing.spacing_4}
      ${(p) => p.theme.spacing.spacing_5};
  }

  ul {
    display: flex;
    justify-content: center;
    border-bottom: solid ${(p) => p.theme.colors.primary};
    padding-bottom: ${(p) => p.theme.spacing.spacing_3};
    margin-bottom: ${(p) => p.theme.spacing.spacing_3};
  }

  .social-media-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: between;
    align-items: center;
    padding: ${(p) => p.theme.spacing.spacing_3} 0;
    margin-top: ${(p) => p.theme.spacing.spacing_4};
    width: ${(p) => p.theme.column.col_4};
  }

  .social-media-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    list-style: none;
    width: ${(p) => p.theme.column.col_4};
  }

  .social-media-list li {
    margin-left: ${(p) => p.theme.spacing.spacing_3};
  }
  .copyright {
    display: flex;
    align-items: center;
    width: ${(p) => p.theme.column.col_4};
  }

  .copyright > span {
    margin-bottom: ${(p) => p.theme.spacing.spacing_3};
  }
`;

export default StyledFooter;
