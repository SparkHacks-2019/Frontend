import React from 'react';
import { Box, Heading, WorldMap, Text } from 'grommet';

const LandingSection1 = props => {
    return (
        <Box justify="center" alignContent="center" align="center">
            <Heading size="xlarge">Ideas</Heading>
            <Text>Why we made WayPoint.</Text>
            <Heading></Heading>
          <Heading alignSelf="center">Community</Heading>
          <WorldMap
            alignSelf="center"
            justify="center"
            alignmentBaseline="central"
            color="brand"
            continents={[
              {
                name: "North America",
                color: "light-5",
                onClick: name => {
                  alert(name);
                }
              }
            ]}
            onSelectPlace={(lat, lon) => {
              alert(lat, lon);
            }}
            places={[
              {
                name: "Sydney",
                location: [-33.8830555556, 151.216666667],
                color: "accent-2",
                onClick: name => {
                  alert(name);
                }
              }
            ]}
            margin="none"
            fill="horizontal"
          />
          <Text alignSelf="center">Community is a powerful</Text>
        </Box>
    )
}

export default LandingSection1;