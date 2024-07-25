import { ICatalogItem } from "@shared/types/CatalogInterface";
import { useEffect } from "react";
import Image from "../baseComponents/Image.style";
import StyledCatalogItem from "./CatalogItem.style";

const CatalogItem = ({ img, description, name }: ICatalogItem) => {
  return (
    <StyledCatalogItem>
      <Image src={img} />
      <h2>{name}</h2>
    </StyledCatalogItem>
  );
};
export default CatalogItem;
