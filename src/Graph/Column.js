function Column({ x, y, children }) {
  return <g transform={`translate(${x || 0}, ${y || 0})`}>{children}</g>;
}

export default Column;
