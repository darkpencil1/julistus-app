import styled from "styled-components";
import Row from "../baseComponents/Row.style";

const StyledShopBannerInfo = styled(Row)`
  position: absolute;
  bottom: ${(p) => p.theme.spacing.spacing_2};
  left: ${(p) => p.theme.spacing.spacing_5};
  background-color: ${(p) => p.theme.colors.bg};
  flex-wrap: nowrap;
  border-radius: ${(p) => p.theme.br.br_medium};
  border: 2px solid ${(props) => props.theme.primary};
  padding: ${(p) => p.theme.spacing.spacing_1};
  gap: 0 ${(p) => p.theme.spacing.spacing_5};

  .banner__info {
    flex: 1 1 auto;
    width: auto;
  }

  .banner__info-icon {
    height: 1.5rem;
    width: auto;
    margin-right: ${(p) => p.theme.spacing.spacing_2};
  }
  .banner__info-text {
    font-size: ${(p) => p.theme.fs.font_sm};
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }
`;

export default StyledShopBannerInfo;
