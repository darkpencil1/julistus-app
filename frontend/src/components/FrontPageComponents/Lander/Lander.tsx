import StyledLander from "./Lander.style";
import Link from "../../baseComponents/Link";
import LanderHeart from "./LanderHeart";
import LanderProductBrief, {
  LanderProductBriefProps,
} from "./LanderProductBrief";
import poster from "../../../resources/images/Taidonjahti_thumbnail.jpg";
import tag from "../../../resources/images/taidonjahti-merkki-teksti.png";
import tagIcon from "../../../resources/images/achievement-tag-icon.svg";
import questIcon from "../../../resources/images/quest-icon.svg";

const productTypes: Array<LanderProductBriefProps> = [
  {
    img: poster,
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
          <h1 className="lander__title">Illustrated quests</h1>
          <h3 className="lander__subtitle">from various aspects of life</h3>
          <p>
            Hi, I'm an artist who illustrates quests from various aspects of
            life. Feel free to browse the quest catalog!
          </p>
          <Link content="To catalog" href="/kauppa" />
        </div>
        <LanderHeart />
      </div>
      <div className="lander__row lander__row--gapped">
        {productTypes.map((item: LanderProductBriefProps) => {
          return <LanderProductBrief {...item} key={item.title} />;
        })}
      </div>
    </StyledLander>
  );
};
export default Lander;
