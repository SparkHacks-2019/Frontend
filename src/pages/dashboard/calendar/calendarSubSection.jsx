import React from "react";
import { Box, Calendar } from "grommet";

const CalendarSubSection = props => {
  return (
    <Calendar
      size="medium"
      date={new Date()}
      onSelect={date => {
        props.setCalendarDate(props.formatDate(date));
        console.log(date);
      }}
    />
  );
};

export default CalendarSubSection;
