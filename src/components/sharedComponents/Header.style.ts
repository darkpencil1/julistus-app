import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(p) => p.theme.colors.bg_secondary};

  .nav__logo {
    max-width: 200px;
    padding: ${(p) => p.theme.spacing.spacing_2};
    margin-left: ${(p) => p.theme.spacing.spacing_3};
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
    font-weight: ${(p) => p.theme.fw.fw_regular};
    font-size: ${(p) => p.theme.fs.font_xxl};
    text-decoration: none;
  }
`;
export default StyledHeader;
