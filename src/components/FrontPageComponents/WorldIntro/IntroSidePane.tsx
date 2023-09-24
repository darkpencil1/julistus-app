import StyledIntroSidePane from "./IntroSidePane.style";
import heart_sm from "../../../resources/images/sydän-keltainen.png";
import base from "../../../resources/images/sankaripallomerkki.png";
import SidePaneIcon, { SidePaneIconType } from "./SidePaneIcon";
import SidePaneLine from "./SidePaneLine";
import { useRef } from "react";

const sidePaneIcons: Array<SidePaneIconType> = [
  { icon: heart_sm, top: 10, left: 50 },
  { icon: heart_sm, top: 30, left: 20 },
  { icon: heart_sm, top: 80, left: 80 },
  { icon: base, top: 15, left: 55 },
];

const IntroSidePane = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledIntroSidePane ref={containerRef}>
      <div className="sidepane__text-container">
        <div className="sidepane__title-container">
          <h1>Tutustu maailmaamme</h1>
          <h3>kutsumuksen seuraamisesta</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="sidepane__icon-container">
        {sidePaneIcons.map((icon: SidePaneIconType, i: number) => {
          return (
            <SidePaneIcon
              icon={icon.icon}
              top={icon.top}
              left={icon.left}
              key={i}
            />
          );
        })}
      </div>
      <SidePaneLine container={containerRef} />
    </StyledIntroSidePane>
  );
};

export default IntroSidePane;
