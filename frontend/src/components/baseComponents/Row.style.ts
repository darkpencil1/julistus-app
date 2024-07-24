import styled from "styled-components";

type RowProps = {
  gap?: string;
};

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${(p) => p.gap || "10px"};
`;

export default Row;
