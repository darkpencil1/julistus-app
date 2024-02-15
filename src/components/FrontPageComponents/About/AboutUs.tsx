import Link from "../../baseComponents/Link";
import StyledAboutUs from "./AboutUs.style";
import Value from "./Value";

const values = [
  "Mestari",
  "Kotimaisuus",
  "Kutsumuksen seuraaminen",
  "Fantasia",
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
        {values.map((value: string, i: number) => {
          return <Value name={value} delay={i * 0.3} key={i} />;
        })}
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
