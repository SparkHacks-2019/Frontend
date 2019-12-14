import React, { useEffect } from "react";
import { Box, Heading, Text, Button } from "grommet";
import DashboardCalendarEntryComponent from "./entryComponent.jsx";
import { Add } from "grommet-icons";
const GoogleSpreadsheet = require("google-spreadsheet");
const creds = require("../../../client_secret.json");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet("1UIeFgMeJyTT6wJ-X0D3f1Yik_ABWHov5kJhJDMSwp6c");
var spreadRows = {}

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function(err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function(err, rows) {
    console.log(rows);
    spreadRows = rows;
  });
});

const EntriesSubSection = props => {
  //TODO: create the useEffect hook
  return (
    <Box margin={{ left: "small" }}>
      <Heading size="small" margin="none">
        Entries for {props.date}:
      </Heading>
      {spreadRows && (
          spreadRows.filter(thing=>thing.purchasedate === props.date).slice(0,4).map(thing=>{
              console.log(thing)
              console.log(spreadRows.filter(thing=>thing.purchasedate === props.date).length)
              return <DashboardCalendarEntryComponent length={spreadRows.filter(thing=>thing.purchasedate === props.date).length} item={thing}/>
          })
      )}
      {(spreadRows && spreadRows.filter(thing=>thing.purchasedate==props.date).length != 0) ? (
          <Text margin={{top:"small"}}>Total: {spreadRows.filter(thing=>thing.purchasedate==props.date).map(thing=> parseFloat(thing.footprint)).reduce((t,num) => t+num)}</Text>
      ) : (
          ""
      )
    }
    <Button primary margin="small" icon={<Add/>} label="Add entry" disabled/>
    </Box>
  );
};

export default EntriesSubSection;
