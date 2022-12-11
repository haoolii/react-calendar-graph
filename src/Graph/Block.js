import { Tooltip } from "@mui/material";

function Block({ width = 10, height = 10, x, y, value, fill }) {
  return (
    <Tooltip title={value}>
      <rect
        className="day"
        width={width}
        height={height}
        value={value}
        x={x}
        y={y}
        fill={fill ? fill : 'var(--neutral)'}
        style={{ cursor: "pointer" }}
      ></rect>
    </Tooltip>
  );
}

export default Block;
