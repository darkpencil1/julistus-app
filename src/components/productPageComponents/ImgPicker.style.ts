import styled from "styled-components";

const StyledImgPicker = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin: auto;
    margin-bottom: 0;
    height: 170px;
    max-height: 170px;
    width: 100%;
    overflow-y: hidden;
    gap: 1rem 0;
    background-color:${(p) => p.theme.colors.bg}; 
    border-radius:0 0 ${(p) => p.theme.br.br_large} ${(p) =>
  p.theme.br.br_large}; 

    .img-picker__container {
      display: flex;
      flex-direction: row;
      justify-content:start;
      overflow-x: scroll;
    }

  .img-picker__img-container {
    min-width: 150px;
    min-height: 150px;
    position: relative;
    border-radius: ${(p) => p.theme.br.br_small};
  }

  }
  .picker__thumbnail-img {
    object-fit: contain;
    max-width: 90%;
    max-height: 90%;
    height: auto;
    width: auto;
    padding: 0 ${(p) => p.theme.spacing.spacing_2};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${(p) => p.theme.br.br_small};
  }
`;

export default StyledImgPicker;
