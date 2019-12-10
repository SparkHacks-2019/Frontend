import {
  Button,
  Heading,
  Box,
  Grid,
  Stack,
  Diagram,
  WorldMap,
  Calendar
} from "grommet";
import React from "react";
import Typist from "react-typist";

const DashboardPage = props => {
  return (
    <>
      <Box pad="small">
        <Box direction="row-responsive">
          <Heading margin="small">
            Hey there, {props.user.displayName.split(" ")[0]}!
          </Heading>
          <Button onClick={props.signOut} label="Sign out" />
        </Box>
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
