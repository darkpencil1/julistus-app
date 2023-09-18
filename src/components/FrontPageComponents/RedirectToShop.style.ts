import styled from "styled-components";
import bg from "../../resources/images/map-banner.png";

const StyledRedirectToShop = styled.div`
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-right: 10px solid ${(p) => p.theme.colors.primary_shadow};
  border-bottom: 10px solid ${(p) => p.theme.colors.primary_shadow};
  border-radius: ${(p) => p.theme.br.br_large};
  margin-bottom: 20px;
`;

export default StyledRedirectToShop;
