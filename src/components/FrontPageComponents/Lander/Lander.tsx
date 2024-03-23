import StyledLander from "./Lander.style";
import Link from "../../baseComponents/Link";
import LanderHeart from "./LanderHeart";
import LanderProductBrief, {
  LanderProductBriefProps,
} from "./LanderProductBrief";
import wide from "../../../resources/images/wide1.png";
import tag from "../../../resources/images/saavutusmerkki5.png";
import tagIcon from "../../../resources/images/achievement-tag-icon.svg";
import questIcon from "../../../resources/images/quest-icon.svg";

const productTypes: Array<LanderProductBriefProps> = [
  {
    img: wide,
    title: "Tehtäväjulisteet",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum.",
    icon: questIcon,
  },
  {
    img: tag,
    title: "Saavutusmerkit",
    desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum.",
    icon: tagIcon,
  },
];

const Lander = () => {
  return (
    <StyledLander>
      <div className="lander__row">
        <div className="lander__text-container">
          <h1 className="lander__title">Taidetta</h1>
          <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
          <p>
            Tarjoamme kuvitettuina julisteina tehtäviä mitä kohtaat seuratessasi
            kutsumustasi. Meillä on myös saavutusmerkkejä niiden
            suorittamisesta. Kaikki tarjotaan asiaan kuuluvalla eeppisyydellä.
          </p>
          <Link content="Kauppaan" href="/kauppa" />
        </div>
        <LanderHeart />
      </div>
      <div className="lander__row lander__row--gapped">
        {productTypes.map((item: LanderProductBriefProps, i: number) => {
          return <LanderProductBrief {...item} />;
        })}
      </div>
    </StyledLander>
  );
};
export default Lander;
