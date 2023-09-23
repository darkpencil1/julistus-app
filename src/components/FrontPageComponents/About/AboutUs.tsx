import Button from "../../baseComponents/Button";
import StyledAboutUs from "./AboutUs.style";
import Value from "./Value";
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
          Moni asia muuttuu luovassa prosessissa. Arvomme on yksi asioista,
          jotka pysyivät samoina ja ohjasivat alusta loppuun taidettamme. Lue
          lisää arvoista, visiosta ja tiimistä, jotka rakensivat tuotteemme.
        </p>
        <Button type="primary" size="lg" text="Lue lisää" />
      </div>
      <div className="about-us__value-container">
        {values.map((value: Value, i: number) => {
          return (
            <Value
              icon={value.icon}
              name={value.name}
              delay={i * 0.3}
              key={i}
            />
          );
        })}
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
