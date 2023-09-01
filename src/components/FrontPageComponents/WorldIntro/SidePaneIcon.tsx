import StyledSidePaneIcon from "./SidePaneIcon.style";

export type SidePaneIconType = {
  icon: string;
  top: number;
  left: number;
};
const SidePaneIcon = ({ icon, top, left }: SidePaneIconType) => {
  return (
    <StyledSidePaneIcon top={top} left={left}>
      <img className="sidepane__icon" src={icon} />
    </StyledSidePaneIcon>
  );
};

export default SidePaneIcon;
