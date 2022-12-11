import moment from "momnet";

function getDuringDates(start, end) {
  const duringDates = [];
  let left = moment(start);
  let right = moment(end);

  while (left.valueOf() <= +right.valueOf()) {
    duringDates.push(left.format("YYYY-MM-DD"));
    left = left.add(1, "day");
  }

  return duringDates;
}

function getDuringDatesWeekIndex(start, end) {
  const dates = getDuringDates(start, end);
  const datesWeekIndex = [];
  const left = moment(start);

  for (let i = 0; i < dates.length; i++) {
    const dateMoment = moment(dates[i]);
    const weekIndex = Math.abs(
      moment(left.startOf("week")).diff(dateMoment, "week", false)
    );
    const dayIndex = dateMoment.day();
    const date = dateMoment.format("YYYY-MM-DD");
    const month = dateMoment.month();
    const year = dateMoment.year();

    datesWeekIndex.push({
      date,
      weekIndex,
      dayIndex,
      month,
      year,
    });
  }
  return datesWeekIndex;
}

function getDuringDatesArray(start, end) {
  const dateInfos = getDuringDatesWeekIndex(start, end);
  const array = [];
  for (let i = 0; i < dateInfos.length; i++) {
    const dateInfo = dateInfos[i];
    const weekIndex = dateInfo.weekIndex;
    const dayIndex = dateInfo.dayIndex;
    if (!array[weekIndex]) {
      array[weekIndex] = {
        weekIndex,
        days: [],
      };
    }
    array[weekIndex].days[dayIndex] = dateInfo;
  }
  return array;
}

function getDuringMonthsArray(start, end) {
  const dateInfos = getDuringDatesWeekIndex(start, end);
  const monthMap = new Map();

  for (let i = 0; i < dateInfos.length; i++) {
    const dateInfo = dateInfos[i];
    const month = moment(dateInfo.date).format("MMM");
    const key = `${month}${dateInfo.year}`;
    if (!monthMap.has(key)) {
      monthMap.set(key, {
        month,
        weekIndex: dateInfo.weekIndex,
      });
    }
  }
  const array = Array.from(monthMap.values());
  console.log("getDuringMonthsArray", array);

  return array;
}

export {
  getDuringDates,
  getDuringDatesWeekIndex,
  getDuringDatesArray,
  getDuringMonthsArray,
};
