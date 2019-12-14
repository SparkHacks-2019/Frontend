import React from "react";
import { Box, Text, Heading, Chart, WorldMap, Anchor } from "grommet";

function DashboardCompetitionComponent(props) {
  return (
    <Box animation="fadeIn" gap="small" direction="row-responsive" pad="small">
      <Box border={{size: 'medium', color: 'brand'}} pad="small">
      <Box>
        <Heading>Regionals</Heading>
      </Box>
      
        <Chart
          bounds={[
            [0, 10],
            [0, 100]
          ]}
          values={[
            { value: [7, 100], label: "one hundred", onClick: ()=>{alert("Toronto")} },
            { value: [6, 70], label: "seventy" },
            { value: [5, 60], label: "sixty" },
            { value: [4, 80], label: "eighty" },
          ]}
          aria-label="chart"
        />
        <Text>Your rival city, <em>Toronto</em>, is beating yours in carbon emissions! You need to get your emissions down to beat them...</Text>

        <Heading margin={{bottom:"none"}}>Lead city:</Heading>
        <Text>Toronto</Text>
        <Box border={{size:'small', side:"top"}} margin={{top:"small"}}/>
        <Heading size="small">Averages</Heading>
        <Chart
          bounds={[
            [0, 10],
            [0, 100]
          ]}
          values={[
            { value: [7, 100], label: "one hundred", onClick: ()=>{alert("Toronto")} },
            { value: [6, 70], label: "seventy" },
            { value: [5, 60], label: "sixty" },
            { value: [4, 80], label: "eighty" },
            {value: [3, 77.5], label: "awef", color: 'red'}

          ]}
          aria-label="chart"
        />
        <Text>Left = Average</Text>
      
      </Box>
      <Box border={{size: 'medium', color: 'brand'}} pad="small">
      <Box>
        <Heading>Worlds</Heading>
      </Box>
      
      <WorldMap
            alignSelf="center"
            justify="center"
            color="brand"
            continents={[
              {
                name: "Australia",
                color: "light-5",
                onClick: name => {
                  alert(name);
                }
              },
              {
                name: "Europe",
                color:"light-6",
                onClick: name=>{
                  alert("Leader in Europe: Iceland");
                }
              }
            ]}
            margin="none"
            height="small"
          />
        <Heading margin="none">Leader: 
          New Zealand
        </Heading>
        <Text>36.795T</Text>
      
      </Box>
      <Box border={{size: 'medium', color: 'brand'}} pad="small">
      <Box>
        <Heading>Incentives for this week</Heading>
        <Text size="xsmall">Sponsored by <Anchor href="#" primary label="Company X" /></Text>
        <Box margin={{top:'small'}} pad="small" border={{color:"text", size:"small"}}>
            <Heading size="small">First Place - City</Heading>
            <Text>Collaboration with Brampton 2040</Text>
        </Box>
        <Box margin={{top:'small'}} pad="small" border={{color:"text", size:"small"}}>
            <Heading size="small">Second Place - City</Heading>
            <Text>Exclusive tech recycling</Text>
        </Box>
        <Box margin={{top:'small'}} pad="small" border={{color:"text", size:"small"}}>
            <Heading size="small">Third Place - City</Heading>
            <Text>Exclusive Tesla rebates</Text>
        </Box>
      </Box>
      
      </Box>
      
    </Box>
  );
}

export default DashboardCompetitionComponent;
