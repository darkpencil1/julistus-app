import StyledLink from "./Link.style";
import arrow from "../../resources/images/button_arrow1.png";

type LinkProps = {
  content: string;
  href: string;
};
const linkVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    translateY: [20, -10],
  },
};

const Link = ({ content, href }: LinkProps) => {
  return (
    <StyledLink variants={linkVariants} whileHover="hover" className="link">
      <a href={href}>{content}</a>
      <img src={arrow} alt="" />
    </StyledLink>
  );
};

export default Link;
