import Tooltip from "@mui/material/Tooltip";
import "./Palette.css";

const palettes = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
  "neutral",
  "white",
  "black",
  "grey"
];
function Palette() {
  return (
    <div className="palettes">
      {palettes.map((palette) => (
        <Tooltip title={palette}>
          <div className={`palette palette-${palette}`}></div>
        </Tooltip>
      ))}
    </div>
  );
}

export default Palette;
