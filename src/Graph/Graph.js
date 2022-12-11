import moment from "momnet";
import { useMemo } from "react";
import Block from "./Block";
import Column from "./Column";
import { getDuringDatesArray, getDuringMonthsArray } from "./utils";

const startDate = moment(new Date()).subtract(210, "days").format("YYYY-MM-DD");
const today = moment(new Date()).format("YYYY-MM-DD");
function Graph() {
  const start = startDate;
  const end = today;
  const datesArray = useMemo(
    () => getDuringDatesArray(start, end),
    [start, end]
  );
  const monthsArray = useMemo(
    () => getDuringMonthsArray(start, end),
    [start, end]
  );
  const weekBase = 13;
  const dayBase = 12;
  const padding = 13;

  return (
    <svg width={weekBase * datesArray.length + padding} height={104}>
      <g transform={`translate(${padding}, 20)`}>
        {datesArray.map((week) => (
          <Column key={week.weekIndex} x={weekBase * week.weekIndex}>
            {week.days.map((day) => (
              <Block x={0} y={dayBase * day.dayIndex} value={day.date} />
            ))}
          </Column>
        ))}
      </g>
      <g transform={`translate(${padding}, 20)`}>
        {monthsArray.map((month) => (
          <text
            x={weekBase * month.weekIndex + 20}
            y="-10"
            style={{
              fill: "var(--grey)",
              fontSize: "10px",
            }}
          >
            {month.month}
          </text>
        ))}
      </g>
    </svg>
  );
}

export default Graph;
