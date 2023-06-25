import colors from "./baseColors";
import spacing from "./spacing";
import column from "./column";
import br from "./br";
import fontWeight from "./fontWeight";
import fontSize from "./fontSize";

const theme = {
  colors: colors,
  column: column,
  br: br,
  spacing: spacing,
  fw: fontWeight,
  fs: fontSize,
  fontSize: "17px",
  fontFamily: "Red Hat Display, sans-serif",
  fontColor: colors.primary,
};

export type Theme = typeof theme;
export default theme;
