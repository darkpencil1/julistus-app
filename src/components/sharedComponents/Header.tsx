import { useEffect, useState } from "react";
import Image from "../baseComponents/Image.style";
import StyledHeader from "./Header.style";
import logo from "../../resources/images/sydänlogo-viiva.png";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";

const navVariant: Variants = {
  animate: {
    translateX: [-100, 0],
    opacity: 1,
  },
  exit: {
    translateX: [0, -50],
    opacity: 0,
  },
};
const Header: React.FC = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
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
      controls.start({ opacity: "auto" });
    }
  }, [scrollingUp, controls]);

  return (
    <StyledHeader animate={controls} transition={{ duration: 0.3 }}>
      <div className="nav__logo">
        <Image src={logo} alt="Julistus" width="100%" />
      </div>
      <span className="nav__name">KUTSUMUS KAUPPA</span>
      <AnimatePresence>
        {scrollingUp && (
          <motion.nav variants={navVariant}>
            <a href="kauppa">Kauppa</a>
            <a href="missio">Missio</a>
            <a href="meistä">Meistä</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
