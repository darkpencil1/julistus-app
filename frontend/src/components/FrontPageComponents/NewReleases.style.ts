import styled from "styled-components";

const StyledNewReleases = styled.div`
  margin-top: 5rem;
  margin: 5rem 1rem;

  .releases__banner {
    width: 100%;
    height: 200px;
    border: 2px solid ${(p) => p.theme.colors.primary};
    border-radius: ${(p) => p.theme.br.br_medium};
  }
  .releases__banner-text {
    text-align: center;
  }
  .releases__banner-text > h1 {
    text-transform: uppercase;
  }

  .releases__banner-text > p {
    width: 550px;
    margin: auto;
    font-size: ${(p) => p.theme.fs.font_lg};
  }
  .releases__banner-img-container {
    max-height: 200px;
    max-width: 100%;
    position: relative; /* Positioning context for the image */
    overflow: hidden; /* Hide any overflow */
  }
  .releases__banner-img {
    width: 100%; /* Make the image fill the container horizontally */
    height: 100%; /* Make the image fill the container vertically */
    object-fit: cover; /* Scale the image to cover the container while preserving aspect ratio */
    object-position: center; /* Center the image within the container */
  }
  .releases__item-container {
    margin: 3rem 2rem;
  }
`;
export default StyledNewReleases;
