import colors from "./baseColors";
import spacing from "./spacing";
import column from "./column";
import br from "./br";
import fontWeight from "./fontWeight";
import fontSize from "./fontSize";
import fontFamily from "./fontFamily";
import textShadow from "./textShadow";

const theme = {
  colors: colors,
  column: column,
  br: br,
  spacing: spacing,
  fw: fontWeight,
  fs: fontSize,
  ff: fontFamily,
  ts: textShadow,
  fontSize: "25px",
  fontFamily: fontFamily.primary,
  fontColor: colors.primary,
};

export type Theme = typeof theme;
export default theme;
