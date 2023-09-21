import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHeader = styled(motion.header)`
  width: 45%;
  margin: 20px auto 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(p) => p.theme.colors.bg};
  border: 5px solid ${(p) => p.theme.primary};
  border-radius: ${(p) => p.theme.br.br_full};
  position: sticky;
  top: 20px;
  z-index: 1000;

  .nav__logo {
    max-width: 70px;
    margin-left: ${(p) => p.theme.spacing.spacing_3};
  }

  .nav__name {
    font-size: ${(p) => p.theme.fs.font_md};
    font-family: ${(p) => p.theme.ff.title};
    max-width: 30px;
    line-height: 0.8;
    color: ${(p) => p.theme.colors.primary};
    margin: ${(p) => p.theme.spacing.spacing_2}
      ${(p) => p.theme.spacing.spacing_3};
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: ${(p) => p.theme.spacing.spacing_4};
    margin-left: auto;
    min-width: 400px;
  }

  a {
    padding: 0 ${(p) => p.theme.spacing.spacing_2};
    font-weight: ${(p) => p.theme.fw.fw_semibold};
    font-size: ${(p) => p.theme.fs.font_lg};
    color: ${(p) => p.theme.colors.primary};
    position: relative;
    text-decoration: none;
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
`;
export default StyledHeader;
