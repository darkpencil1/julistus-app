import StyledMissionBanner from "../AboutPageComponents/MissionBanner.style";
import CatalogItemContainer from "../catalogPageComponents/CatalogItemContainer";
import CatalogTextContainer from "../catalogPageComponents/CatalogTextContainer";
import StyledCatalog from "./Catalog.style";

const Catalog = () => {
  return (
    <StyledCatalog>
      <StyledMissionBanner>
        <h1>Catalog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit., consectetur.
        </p>
      </StyledMissionBanner>
      <CatalogTextContainer />
      <CatalogItemContainer />
    </StyledCatalog>
  );
};

export default Catalog;
