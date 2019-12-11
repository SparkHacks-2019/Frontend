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
import React, {useEffect} from "react";
import Typist from "react-typist";
import DashboardHeading from "./dashboard/header";

const DashboardPage = props => {
  return (
    <>
      <Box pad="small">
        <DashboardHeading changeTheme={props.changeTheme} user={props.user}/>
        <Box direction="row-responsive" margin={{top: "large"}}>
        <Box justify="center">
          <Calendar
            size="medium"
            date={new Date().toISOString()}
            onSelect={date => {alert(date)}}
          />
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
