import CatalogItemContainer from "../catalogPageComponents/CatalogItemContainer";
import CatalogTextContainer from "../catalogPageComponents/CatalogTextContainer";
import StyledCatalog from "./Catalog.style";
import catalog from "../../resources/images/catalog2.svg";
import { useQuests } from "../../hooks/useQuests";
import { useAchievements } from "../../hooks/useAchievements";
import { ICatalogItem } from "@shared/types/CatalogInterface";

type catalogItem = {
  title: string;
  description: string;
  data: ICatalogItem[];
  isLoading: boolean;
  isError: boolean;
};

const Catalog = () => {
  const catalogItems = [
    {
      title: "Quests",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur.",
      data: useQuests().data,
      isLoading: useQuests().isLoading,
      isError: useQuests().isError,
    },
    {
      title: "Achievements",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur.",
      data: useAchievements().data,
      isLoading: useAchievements().isLoading,
      isError: useAchievements().isError,
    },
  ];

  return (
    <StyledCatalog>
      <div className="catalog__title">
        <img className="catalog__title-img" src={catalog} />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur.
        </h2>
      </div>
      {catalogItems.map((item: catalogItem) => {
        return (
          <>
            <CatalogTextContainer
              title={item.title}
              description={item.description}
            />
            <CatalogItemContainer
              data={item.data}
              isLoading={item.isLoading}
              isError={item.isError}
            />
          </>
        );
      })}
    </StyledCatalog>
  );
};

export default Catalog;
