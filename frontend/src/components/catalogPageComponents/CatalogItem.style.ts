import styled from "styled-components";

const StyledCatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  flex: 1;
  height: 600px;
  width: 500px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  padding: 0;
  background-color: ${(p) => p.theme.colors.bg};

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px ${(props) => props.theme.colors.primary};
  }

  img {
    height: 400px;
    max-height: 500px;
  }
`;

export default StyledCatalogItem;
