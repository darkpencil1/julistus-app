import styled from "styled-components";

const StyledCatalogItemModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: ${(p) => p.theme.colors.white};
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: ${(p) => p.theme.br.br_large};
    overflow: hidden;
  }

  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }

  .modal-body {
    display: flex;
    height: 100%;
  }

  .modal-image {
    flex: 1;
    background-color: ${(p) => p.theme.colors.bg};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-image img {
    height: 80%;
    max-width: 100%;
    max-height: 100%;
  }

  .modal-text {
    flex: 1;
    padding: 60px;
    overflow-y: auto;
  }

  .modal-text h1 {
    margin-top: 0;
  }

  .modal-text p {
    margin-bottom: 0;
  }
`;

export default StyledCatalogItemModal;
