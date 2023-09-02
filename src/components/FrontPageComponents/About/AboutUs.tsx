import Button from "../../baseComponents/Button.style";
import StyledAboutUs from "./AboutUs.style";
import Icon from "../../baseComponents/Icon";
import mock from "../../../resources/images/suurennuslasi-kuvake.png";

type Value = {
  name: string;
  icon: string;
};

const values: Array<Value> = [
  { name: "Mestari", icon: mock },
  { name: "Kotimaisuus", icon: mock },
  { name: "Kutsumuksen seuraaminen", icon: mock },
  { name: "Fantasia", icon: mock },
];

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <div className="about-us__text-container">
        <h1>Taidettamme ohjaa selkeät arvot</h1>
        <p>
          Moni asia muuttuu luovassa prosessissa. Arvomme on yksi ainoista
          asioista, jotka pysyivät samoina ja ohjasivat alusta alkaen taidetta.
          Lue lisää arvoista, visiosta ja tiimistä, jotka rakensivat tuotteemme.
        </p>
        <Button primary size="lg">
          Lue lisää
        </Button>
      </div>
      <div className="about-us__value-container">
        {values.map((value: Value, i: number) => {
          return (
            <div className="about-us__value" key={i}>
              <Icon icon={value.icon} size="xl" />
              <h3>{value.name}</h3>
            </div>
          );
        })}
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
