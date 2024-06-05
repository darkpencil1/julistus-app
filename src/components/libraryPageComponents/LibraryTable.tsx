import React from "react";
import { useState } from "react";
import StyledLibraryTable from "./LibraryTable.style";

type MandatoryFields = {
  name: string;
  description: string;
};

type RowEntry = MandatoryFields & { [key: string]: string };

export type LibraryTableData = {
  title: string;
  categories: string[];
  data: RowEntry[];
};

const LibraryTable: React.FC<{ rowData: LibraryTableData }> = ({ rowData }) => {
  const { title, categories, data } = rowData;
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleRowClick = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <StyledLibraryTable>
      <div className="library__banner">
        <h3>{title}</h3>
      </div>
      <table>
        <thead>
          <tr>
            {categories.map((category, i) => {
              return <th key={`${category}${i}`}>{category}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={`row-${row.name}`}>
              <tr
                className={`library__row ${
                  expandedRow === row.name && "library__row--expanded"
                }`}
                onClick={() => handleRowClick(row.name)}
              >
                {Object.keys(row)
                  .filter((key) => key !== "description")
                  .map((key) => {
                    return <td>{row[key]}</td>;
                  })}
              </tr>
              {expandedRow === row.name && (
                <tr className="library__row-description">
                  <td colSpan={Object.keys(row).length}>
                    <p key={`${row.name}-description`}>{row.description}</p>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </StyledLibraryTable>
  );
};

export default LibraryTable;
