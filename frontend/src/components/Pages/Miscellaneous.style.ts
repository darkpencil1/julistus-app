import styled from "styled-components";
import banner from "../../resources/images/library-banner.jpg";

const StyledMiscellaneousPage = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 2000px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 100px;

  .misc__intro-text-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    > h1 {
      margin: 0;
      line-height: 1;
    }
    > h3 {
      margin: 1rem 0;
    }
    > p {
      margin: 0;
    }
  }

  .misc__banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 15px 15px 0 0;

    h3 {
      color: ${(props) => props.theme.colors.secondary};
      text-shadow: ${(p) => p.theme.ts.base};
    }
  }

  .misc__contact-container {
    border-radius: ${(p) => p.theme.br.br_large};
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.white};
    width: 50%;

    .misc__contact-text-container {
      padding: 20px;
      > h4 {
        margin: 0;
      }
      a {
        margin: 0 auto;
      }
    }
  }

  .misc__qa-container {
    border-radius: ${(p) => p.theme.br.br_large};
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.white};
    width: 50%;
  }
`;

export default StyledMiscellaneousPage;
