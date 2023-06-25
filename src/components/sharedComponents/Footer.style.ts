import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 0;
  padding: 0;
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: ${(p) => p.theme.spacing.spacing_3};
    margin-bottom: ${(p) => p.theme.spacing.spacing_3};
  }
  .footer__link > a {
    color: ${(p) => p.theme.colors.white_muted};
    text-decoration: none;
  }

  .social-media-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: between;
    align-items: center;
    padding: ${(p) => p.theme.spacing.spacing_3} 0;
    margin-top: ${(p) => p.theme.spacing.spacing_4};
    margin-left: auto;
    margin-right: 0;
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
