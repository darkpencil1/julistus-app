import StyledCatalogTextContainer from "./CatalogTextContainer.style";

type CatalogTextProps = {
  title: string;
  description: string;
};
const CatalogTextContainer = ({ title, description }: CatalogTextProps) => {
  return (
    <StyledCatalogTextContainer>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </StyledCatalogTextContainer>
  );
};

export default CatalogTextContainer;
