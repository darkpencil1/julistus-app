import StyledWIP from "./WIP.style";

const WIP = () => {
  return (
    <StyledWIP>
      <div className="wip__message">
        <p>
          Tämä on keskeneräinen prototyyppi eikä siten välttämättä edusta
          lopullista tulosta. Sivu käyttää demotarkoituksessa omien kuviensa
          lisäksi kuvia, jotka ovat &nbsp;
          <a href="https://www.imadreamwalker.com/">imadreamwalker</a>&nbsp;
          omaisuutta.
        </p>
      </div>
    </StyledWIP>
  );
};

export default WIP;
