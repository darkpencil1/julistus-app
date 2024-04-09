import { useEffect, useRef, useState } from "react";
import Image from "../baseComponents/Image.style";
import StyledHeader from "./Header.style";
import logo from "../../resources/images/logo.png";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    href: "maailma",
    name: "Maailma",
  },
  {
    href: "meistä",
    name: "Meistä",
  },
];
const Header: React.FC = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const controls = useAnimation();
  const yScroll = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > yScroll.current && window.scrollY > 200) {
        setScrollingUp(false);
        yScroll.current = window.scrollY;
      } else {
        setScrollingUp(true);
        yScroll.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollingUp) {
      controls.start({ width: "45%" });
    } else {
      controls.start({ width: "140px" });
    }
  }, [scrollingUp, controls]);

  return (
    <StyledHeader
      animate={controls}
      transition={{ duration: 0.4 }}
      shrink={scrollingUp}
    >
      <motion.div className="nav__logo" onClick={() => navigate("/")}>
        <Image src={logo} alt="Kuva & Kutsumus" width="60px" />
      </motion.div>
      <AnimatePresence>
        {scrollingUp && (
          <motion.span
            animate="animate"
            exit="exit"
            variants={navVariant}
            className="nav__name"
            key="header-title"
          >
            KUVA& KUTSUMUS
          </motion.span>
        )}
        {scrollingUp && (
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
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
