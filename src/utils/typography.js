import Typography from "typography"
// Import fonts
import 'typeface-roboto';
import 'typeface-roboto-slab';

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight:"1.2",
  headerColor:'white',
  bodyColor:'#ededed',
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto Slab", "serif"],
});

export default typography