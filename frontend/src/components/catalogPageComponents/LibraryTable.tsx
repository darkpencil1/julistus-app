import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import StyledLibraryTable from "./LibraryTable.style";
import dropdownArrow from "../../resources/images/dropdown_arrow.svg";
import { RowEntry } from "@shared/types/LibraryInterface";
import { useQuests } from "../../hooks/useQuests";

/*A component that uses flexbox to mimic table. Flexbox enables better animations.*/
const LibraryTable = () => {
  const { data, isLoading, isError } = useQuests();
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleRowClick = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <StyledLibraryTable>
      {!isLoading && !isError && data && (
        <>
          <div className="library__banner">
            <h3>{data?.title}</h3>
          </div>
          <div className="library__row-header">
            {data?.categories.map((category: string, i: number) => {
              return <span key={`${category}${i}`}>{category}</span>;
            })}
          </div>
          <div className="library__row-container">
            {data?.data.map((row: RowEntry) => (
              <React.Fragment key={`row-${row.name}`}>
                <div
                  className={`library__row ${
                    expandedRow === row.name ? "library__row--expanded" : ""
                  }`}
                  onClick={() => handleRowClick(row.name)}
                >
                  {Object.keys(row)
                    .filter((key) => key !== "description")
                    .map((key) => {
                      return <span>{row[key]}</span>;
                    })}
                  <motion.img
                    animate={{ rotate: expandedRow === row.name ? 180 : 0 }}
                    className="library__dropdown-arrow"
                    src={dropdownArrow}
                  />
                </div>
                <AnimatePresence>
                  {expandedRow === row.name && (
                    <motion.div
                      className="library__row-description"
                      key={row.name + "-details"}
                      initial={{ height: 0, overflow: "hidden" }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      layout
                    >
                      <p>{row.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </StyledLibraryTable>
  );
};

export default LibraryTable;
