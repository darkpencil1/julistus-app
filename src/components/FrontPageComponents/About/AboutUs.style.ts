import styled from "styled-components";
import Row from "../../baseComponents/Row.style";

const StyledAboutUs = styled(Row)`
  height: 60vh;
  flex-wrap: no-wrap;
  justify-content: center;
  margin: 200px 50px 0 50px;

  .about-us__value-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .about-us__text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 700px;
  }

  .about-us__text-container > h1 {
    /*Adjust top margin to account for space in top that line-height causes*/
    margin-top: -15px;
    margin-bottom: 0;
  }

  .about-us__value {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    height: 100px;
    border-radius: ${(p) => p.theme.br.br_large};
    border-bottom: 5px solid ${(props) => props.theme.colors.gray};
    border-right: 5px solid ${(props) => props.theme.colors.gray};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
    background-color: ${(p) => p.theme.colors.bg};
  }
  .about-us__value > h2 {
    margin-top: 10px;
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }

  .link {
    align-self: start;
  }

  @media (max-width: 1400px) {
    margin: 50px;
    .about-us__value-container {
      justify-content: space-between;
    }
  }
`;

export default StyledAboutUs;
