import React, { useState, useEffect } from "react";
import { Box, Calendar, Heading } from "grommet";

const DashboardCalendarSection = props => {
  return (
    <Box border={{color:"brand", size:"medium"}} pad="medium" justify="center" direction="row-responsive">
      <Calendar
        size="medium"
        date={new Date()}
        onSelect={date => {
          props.setCalendarDate(props.formatDate(date));
          console.log(date);
        }}
      />
      <Box margin={{ left: "small" }}>
        <Heading size="small" margin="none">Entries for {props.calendarDate}:</Heading>
      </Box>
    </Box>
  );
};

export default DashboardCalendarSection;
