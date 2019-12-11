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

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const DashboardPage = props => {
  const [APIData, setAPIData] = useState({});
  const [calendarDate, setCalendarDate] = useState(formatDate(new Date()))
  async function fetchData() {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://wttr.in/Detroit?format=j1"
    );
    res.json().then(res => setAPIData(res));
  }

  useEffect(() => {
    fetchData();
    console.log(APIData)
  });
  return (
    <>
      <Box pad="small">
        <DashboardHeading
          changeTheme={props.changeTheme}
          signOut={props.signOut}
          user={props.user}
        />
        <Box direction="row-responsive" margin={{ top: "large" }}>
          <Box justify="center" direction="row-responsive">
            <Calendar
              size="medium"
              date={new Date()}
              onSelect={date => {
                setCalendarDate(formatDate(date))
                console.log(date)
              }}
            />
            <Box margin={{left:"small"}}>
            <Heading margin="none">Goal for {calendarDate}:</Heading>
            </Box>
          </Box>
            {/* <Heading>{JSON.stringify(APIData["weather"])}</Heading> */}
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
