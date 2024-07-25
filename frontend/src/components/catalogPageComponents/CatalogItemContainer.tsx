import { ICatalogItem } from "@shared/types/CatalogInterface";
import { useQuests } from "../../hooks/useQuests";
import CatalogItem from "./CatalogItem";
import StyledCatalogItemContainer from "./CatalogItemContainer.style";

const CatalogItemContainer = () => {
  const { data, isLoading, isError } = useQuests();

  return (
    <StyledCatalogItemContainer>
      {!isLoading &&
        !isError &&
        data.length > 0 &&
        data.map((item: ICatalogItem) => {
          return (
            <CatalogItem
              img={item.img}
              name={item.name}
              description={item.description}
            />
          );
        })}
    </StyledCatalogItemContainer>
  );
};
export default CatalogItemContainer;
