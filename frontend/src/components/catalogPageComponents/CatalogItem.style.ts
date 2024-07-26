import styled from "styled-components";

const StyledCatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 10px;

  flex: 1;
  height: 600px;
  width: 500px;
  min-width: 500px;
  max-width: 500px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.bg};

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px ${(props) => props.theme.colors.primary};
  }
  .catalog__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    height: 400px;
    max-height: 500px;
  }

  .catalog__img--small {
    height: 200px;
    max-height: 200px;
  }

  h2 {
    height: 80px;
  }
`;

export default StyledCatalogItem;
