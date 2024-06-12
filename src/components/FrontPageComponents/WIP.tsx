import StyledWIP from "./WIP.style";

const WIP = () => {
  return (
    <StyledWIP>
      <div className="wip__message">
        <p>
          Tämä on keskeneräinen prototyyppi eikä siten välttämättä edusta
          lopullista tulosta. Sivu ei tue vielä mobiilinäytönleveyksiä, joten
          käytäthän vähintään kannettavaa sen katsomiseen.
        </p>
      </div>
    </StyledWIP>
  );
};

export default WIP;
