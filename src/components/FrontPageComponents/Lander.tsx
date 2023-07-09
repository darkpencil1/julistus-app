import { useState, useEffect } from "react";
import StyledLander from "./Lander.style";
import Col from "../baseComponents/Col.style";
import MapLocation from "./MapLocation";
import wide from "../../resources/images/wide1.png";
import tall1 from "../../resources/images/tall1.png";
import tall2 from "../../resources/images/tall2.png";

type Location = {
  top: number;
  left: number;
  img: string;
  isWide: boolean;
};

const locations: Array<Location> = [
  {
    top: 80,
    left: 50,
    img: wide,
    isWide: true,
  },
  {
    top: 20,
    left: 80,
    img: tall1,
    isWide: false,
  },
  {
    top: 50,
    left: 10,
    img: tall2,
    isWide: false,
  },
];

export const Lander = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Julisteita</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
      </Col>
      <Col className="lander__map-container">
        <div className="lander__map-mock">
          {locations.map((location, index) => (
            <MapLocation
              top={location.top}
              left={location.left}
              img={location.img}
              key={index}
              active={index === activeIndex}
              hasWideImg={location.isWide}
            />
          ))}
        </div>
      </Col>
    </StyledLander>
  );
};
