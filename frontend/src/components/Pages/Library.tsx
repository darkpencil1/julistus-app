import LibraryTable from "../libraryPageComponents/LibraryTable";
import LibraryTextContainer from "../libraryPageComponents/LibraryTextContainer";
import StyledLibrary from "./Library.style";
import quests from "../../resources/misc/quests";

const Library = () => {
  return (
    <StyledLibrary>
      <LibraryTextContainer />
      <LibraryTable rowData={quests} />
    </StyledLibrary>
  );
};

export default Library;
