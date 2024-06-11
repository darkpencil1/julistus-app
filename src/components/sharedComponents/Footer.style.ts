import styled from "styled-components";

const StyledFooter = styled.footer`
  /*Position to bottom of page*/
  flex-shrink: 0;

  margin: 0;
  padding: 0;
  background-color: ${(p) => p.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 4px solid ${(p) => p.theme.colors.primary};

  .footer__links {
    margin-top: 40px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 200px;
  }

  .footer__link-container {
    display: flex;
    flex-direction: column;
    > h3 {
      color: ${(p) => p.theme.colors.primary};
      margin: 0;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    list-style-type: none;
    padding-left: 0;
    padding-bottom: ${(p) => p.theme.spacing.spacing_3};
    margin-bottom: ${(p) => p.theme.spacing.spacing_3};
  }

  .footer__link > a {
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
    position: relative;
  }

  /* Define the ::after pseudo-element */
  a::after {
    content: ""; /* Add content to the pseudo-element */
    position: absolute; /* Position it relative to the <a> element */
    left: 0; /* Align it with the left edge of the <a> element */
    bottom: 0; /* Place it at the bottom */
    width: 0; /* Initially, the width is 0 */
    height: 3px; /* Set the height to create the border effect */
    background-color: ${(p) =>
      p.theme.colors.primary}; /* Set the border color */
    transition: width 0.3s ease; /* Add a smooth transition for width */
  }

  /* Define the styles for the <a> element on hover */
  a:hover::after {
    width: 100%; /* Expand the width to 100% on hover */
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
    margin: auto;
    margin-bottom: ${(p) => p.theme.spacing.spacing_1};
    color: ${(p) => p.theme.colors.primary};
  }
`;

export default StyledFooter;
