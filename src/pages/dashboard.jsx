import {
  Button,
  Heading,
  Box,
  Grid,
  Stack,
  Diagram,
  WorldMap,
  Calendar,
  Image
} from "grommet";
import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import DashboardHeading from "./dashboard/header";
import DashboardCalendarSection from "./dashboard/calendarSection";
import DashboardGraphSection from "./dashboard/graphSection";
import DashboardCityVisualization from "./dashboard/cityVisualization/vis";
import DashboardCompetitionComponent from "./dashboard/competition/competition";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("/");
}

const DashboardPage = props => {
  const [calendarDate, setCalendarDate] = useState(formatDate(new Date()));
  const [typingState, setTypingState] = useState(true);
  return (
    <>
      <Box animation="slideUp" pad="small">
        {!typingState && <DashboardCityVisualization />}

        <DashboardHeading
          changeTheme={props.changeTheme}
          signOut={props.signOut}
          user={props.user}
          typingState={typingState}
          setTypingState={setTypingState}
        />
        {!typingState && (
          <Box>
            <Box margin={{ top: "small" }}>
              <DashboardCompetitionComponent />
              
            </Box>
            {/* <DashboardIncentiveComponent/> */}
            <Box
              animation={["fadeIn", "zoomIn"]}
              direction="row-responsive"
              gap="small"
              margin={{ top: "small" }}
            >
              <DashboardCalendarSection
                formatDate={formatDate}
                setCalendarDate={setCalendarDate}
                calendarDate={calendarDate}
              />
              <DashboardGraphSection />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default DashboardPage;
