import React, { useState, useEffect } from "react";
import { Box, Calendar, Heading } from "grommet";
import CalendarSubSection from "./calendar/calendarSubSection";
import EntriesSubSection from "./calendar/entriesSubSection";

const DashboardCalendarSection = props => {
  return (
    <Box border={{color:"brand", size:"medium"}} pad="medium" justify="center" direction="row-responsive">
      <CalendarSubSection
        setCalendarDate={props.setCalendarDate}
        formatDate={props.formatDate}
      />
      <EntriesSubSection date={props.calendarDate} />
    </Box>
  );
};

export default DashboardCalendarSection;
