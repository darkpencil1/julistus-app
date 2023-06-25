import React from "react";
import StyledSizeDropdown from "./SizeDropdown.style";

type SizeOption = {
  id: number;
  name: string;
  dimensions: string;
};
const sizeOptions: Array<SizeOption> = [
  {
    id: 0,
    name: "A4",
    dimensions: "30 X 21",
  },
  {
    id: 1,
    name: "A3",
    dimensions: "42 X 30",
  },
  {
    id: 2,
    name: "A2",
    dimensions: "59 X 42",
  },
];

export const SizeDropdown = () => {
  const [selected, setSelected] = React.useState<SizeOption>(sizeOptions[0]);

  return (
    <StyledSizeDropdown>
      {sizeOptions.map((option: SizeOption, i: number) => {
        return (
          <option onClick={() => setSelected(sizeOptions[i])} key={i}>
            <span className="">{option.name}</span>
            <span className="">&nbsp;({option.dimensions} cm)</span>
          </option>
        );
      })}
    </StyledSizeDropdown>
  );
};
