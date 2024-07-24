import StyledAboutUs from "./AboutUs.style";
import Value from "./Value";
import Link from "../../baseComponents/Link";
import mastery from "../../../resources/images/mastery-icon.svg";
import finland from "../../../resources/images/finland-icon.svg";
import multiplicity from "../../../resources/images/multiplicity-icon.svg";
import heart from "../../../resources/images/heart-icon.svg";

type Value = {
  name: string;
  icon: string;
};

const values: Array<Value> = [
  { name: "Kutsumus", icon: heart },
  { name: "Kotimaisuus", icon: finland },
  { name: "Moninaisuus", icon: multiplicity },
  { name: "Yritä olla mestari", icon: mastery },
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
        <Link href="meistä" content="Lue lisää" />
      </div>
      <div className="about-us__value-container">
        {values.map((value: Value, i: number) => {
          return (
            <Value
              name={value.name}
              icon={value.icon}
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
