import Image from "../baseComponents/Image.style";
import StyledHeader from "./Header.style";
import logo from "../../resources/images/logo.png";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cartComponents/CartIcon";

const navVariant: Variants = {
  animate: {
    translateX: [-50, 0],
    opacity: [0, 1],
  },
  exit: {
    translateX: [0, -50],
    opacity: [1, 0],
  },
};

type NavItem = {
  href: string;
  name: string;
};
const navItems: Array<NavItem> = [
  {
    href: "kauppa",
    name: "Kauppa",
  },
  {
    href: "arkisto",
    name: "Arkisto",
  },
  {
    href: "meistä",
    name: "Meistä",
  },
];
const Header: React.FC = () => {
  const controls = useAnimation();
  const navigate = useNavigate();

  return (
    <StyledHeader animate={controls} transition={{ duration: 0.4 }}>
      <motion.div className="nav__logo" onClick={() => navigate("/")}>
        <Image
          whileHover={{ scale: 1.1 }} // Scale the image up by 10% on hover
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }} // Add a smooth transition effect
          src={logo}
          alt="Kuva & Kutsumus"
          width="60px"
        />
      </motion.div>
      <AnimatePresence>
        <motion.span
          animate="animate"
          exit="exit"
          variants={navVariant}
          className="nav__name"
          key="header-title"
          onClick={() => navigate("/")}
        >
          KUVA& KUTSUMUS
        </motion.span>
        <motion.nav
          animate="animate"
          exit="exit"
          variants={navVariant}
          key="header-nav"
        >
          {navItems.map((item: NavItem, i: number) => {
            return (
              <motion.a
                animate="animate"
                exit="exit"
                variants={navVariant}
                onClick={() => navigate(item.href)}
                transition={{ delay: i * 0.1, duration: 0.2 }}
                key={i}
              >
                {item.name}
              </motion.a>
            );
          })}
        </motion.nav>
        <CartIcon />
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
