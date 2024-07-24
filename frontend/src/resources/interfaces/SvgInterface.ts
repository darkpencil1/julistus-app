import { LinePosition } from "../../components/baseComponents/Line.style";

interface ISvg {
  width: number;
  height: number;
  viewBox: string;
  id: string;
  d: string;
  strokeWidth?: number;
  position?: LinePosition;
}

export default ISvg;
