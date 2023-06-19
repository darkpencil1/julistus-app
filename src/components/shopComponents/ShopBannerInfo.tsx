import Col from "../baseComponents/Col.style";
import Image from "../baseComponents/Image.style";
import flag from "../../resources/images/Finland.webp";
import smileface from "../../resources/images/smileface.webp";
import checkmark from "../../resources/images/checkmark.webp";
import StyledShopBannerInfo from "./ShopBannerInfo.style";

const info = [
  {
    text: "Kotimainen",
    img: flag,
  },
  {
    text: "Toimitus 3 arkipäivää",
    img: checkmark,
  },
  {
    text: "14pv palautusoikeus",
    img: smileface,
  },
];

export const ShopBannerInfo = () => {
  return (
    <StyledShopBannerInfo>
      {info.map((item, i) => {
        return (
          <Col className="banner__info" key={i}>
            <Image src={item.img} className="banner__info-icon" />
            <span className="banner__info-text">{item.text}</span>
          </Col>
        );
      })}
    </StyledShopBannerInfo>
  );
};
