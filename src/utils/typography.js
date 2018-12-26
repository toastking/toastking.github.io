import Typography from "typography"
import 'typeface-roboto';
import 'typeface-roboto-mono';

const typography = new Typography({
  baseFontSize: "12px",
  baseLineHeight:"1.2",
  headerColor:'white',
  bodyColor:'white',
  headerFontFamily: ["Roboto Mono", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
});

export default typography