import {
  Colors,
  Typography,
  Spacings,
  ThemeManager,
} from "react-native-ui-lib";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
Colors.loadColors({
  contentW: "#FFFFFF",
  content28: "#282C37",
  color28: "#282C37",
  secondaryContent: "#6D819C",
  buttonLink: "#FF5E3A",
  line: "#E9E9E9",
  color58: "#5856D6",
  background: "#F8FAFF",
  color44: "#44DB5E",
  color5A: "#5AC8FB",
  color6D: "#6D819C",
  colorD8: "#D81159",
  colorFF: "#FF9500",
  facebook: "#3B5998",
  color40: "#4083FF",
  colorC6: "#C644FC",
  color97: "#979797",
  colorF2: "#F2F2F2",
});
const FONT_PREFIX = "Avenir";
export const FONTS = {
  roman: `${FONT_PREFIX}-Roman`,
  heavy: `${FONT_PREFIX}-Heavy`,
  medium: `${FONT_PREFIX}-Medium`,
  black: `${FONT_PREFIX}-Black`,
};

//Typography

Typography.loadTypographies({
  fmedium: {
    fontFamily: FONTS.medium,
  },
  fheavy: {
    fontFamily: FONTS.heavy,
  },
  fblack: {
    fontFamily: FONTS.black,
  },
  froman: {
    fontFamily: FONTS.roman,
  },

  H1M: {
    fontSize: 74,
    fontFamily: FONTS.medium,
  },
  H2B: {
    fontSize: 40,
    fontFamily: FONTS.black,
  },
  H3M: {
    fontSize: 36,
    fontFamily: FONTS.medium,
  },
  H3H: {
    fontSize: 36,
    fontFamily: FONTS.heavy,
  },
  H5H: {
    fontSize: 36,
    fontFamily: FONTS.heavy,
  },
  H4H: {
    fontSize: 36,
    fontFamily: FONTS.heavy,
  },
  H4M: {
    fontSize: 24,
    fontFamily: FONTS.medium,
  },
  T24M: {
    fontSize: 24,
    fontFamily: FONTS.medium,
  },
  T24B: {
    fontSize: 24,
    fontFamily: FONTS.black,
  },
  R18: {
    fontSize: 18,
    fontFamily: FONTS.roman,
  },
  R10: {
    fontSize: 10,
    fontFamily: FONTS.roman,
  },
  B24: {
    fontSize: 24,
    fontFamily: FONTS.black,
  },
  B14: { fontSize: 14, fontFamily: FONTS.black },
  B12: { fontSize: 12, fontFamily: FONTS.black },
  B18: { fontSize: 18, fontFamily: FONTS.black },
  R14: { fontSize: 14, fontFamily: FONTS.roman },
  H36: { fontSize: RFValue(36), fontFamily: FONTS.heavy },
  H14: { fontSize: 14, fontFamily: FONTS.heavy },
  H18: { fontSize: 18, fontFamily: FONTS.heavy },
  M24: { fontSize: 24, fontFamily: FONTS.medium },
  M36: { fontSize: 36, fontFamily: FONTS.medium },
  M18: { fontSize: 18, fontFamily: FONTS.medium },
  M16: { fontSize: 18, fontFamily: FONTS.medium },
  M14: { fontSize: 14, fontFamily: FONTS.medium },
  M12: { fontSize: 12, fontFamily: FONTS.medium },
  R12: { fontSize: 12, fontFamily: FONTS.roman },
  H16: { fontSize: 16, fontFamily: FONTS.heavy },
  H10: { fontSize: 10, fontFamily: FONTS.heavy },
  B36: { fontSize: 36, fontFamily: FONTS.black },
  B64: { fontSize: 64, fontFamily: FONTS.black },
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});
