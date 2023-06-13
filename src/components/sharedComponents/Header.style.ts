import styled from "styled-components";
import Container from "../baseComponents/Container.style";

const StyledHeader = styled(Container)`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  .nav__logo {
    max-width: 150px;
    padding: ${(p) => p.theme.spacing.spacing_2};
  }

  nav {
    display: flex;
    flex-direction: row;
    margin-right: ${(p) => p.theme.spacing.spacing_4};
    margin-left: auto;
  }
  a {
    padding: 0 ${(p) => p.theme.spacing.spacing_2};
    fontweight: ${(p) => p.theme.fw.fw_bold};
    font-size: ${(p) => p.theme.fs.font_lg};
    text-decoration: none;
  }
`;
export default StyledHeader;
