import StyledLink from "./Link.style";
import arrow from "../../resources/images/button_arrow1.png";
import { useNavigate } from "react-router-dom";

type LinkProps = {
  content: string;
  href: string;
};
const linkVariants = {
  hover: {
    scale: 1.1, // Increase the size on hover
  },
  tap: {
    translateY: [20, -10],
  },
};

const Link = ({ content, href }: LinkProps) => {
  const navigate = useNavigate();

  const navigateToNewPage = () => {
    navigate(href);
  };

  return (
    <StyledLink variants={linkVariants} whileHover="hover">
      <a href={href}>{content}</a>
      <img src={arrow} alt="" />
    </StyledLink>
  );
};

export default Link;
