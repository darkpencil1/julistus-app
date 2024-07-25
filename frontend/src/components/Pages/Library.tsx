import LibraryTable from "../libraryPageComponents/LibraryTable";
import LibraryTextContainer from "../libraryPageComponents/LibraryTextContainer";
import StyledLibrary from "./Library.style";

const Library = () => {
  return (
    <StyledLibrary>
      <LibraryTextContainer />
      <LibraryTable />
    </StyledLibrary>
  );
};

export default Library;
