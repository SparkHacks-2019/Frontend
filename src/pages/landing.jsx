import {
  Box,
  Image,
  Heading,
  Text,
  Grommet,
  Button,
  Chart,
  WorldMap
} from "grommet";
import Typist from "react-typist";
import React from "react";

const LandingPage = props => {
  return (
    <>
      <Box animation={"fadeIn"} pad="small">
        <Box
          justify={"center"}
          align={"center"}
          responsive
          direction={"row-responsive"}
          pad="large"
        >
          <Box
            justify={"center"}
            width={"medium"}
            pad={"none"}
            height={"medium"}
          >
            <Image fit="cover" src={"https://i.ibb.co/3sL75R7/lilypad.png"} />
          </Box>
          <Box pad={"medium"} />

          <Box>
            <Heading size={"small"}>
              <Typist>Welcome to</Typist>
            </Heading>
            <Heading margin={"none"} size={"xlarge"}>
              Lilypad.
            </Heading>
            <Text size={"medium"} style={{ "margin-top": "1em" }}>
              Your centre for carbon savings.
            </Text>
            <Box pad={"small"} />
            <Button
              label={<Heading size={"small"}>Sign in</Heading>}
              primary
              color="light-1"
              onClick={props.signIn}
            />
          </Box>
        </Box>
        <Box></Box>
        <Box justify="center">
          <Heading alignSelf="center">Community</Heading>
          <WorldMap
            alignSelf="center"
            justify="center"
            alignmentBaseline="central"
            color="brand"
            continents={[
              {
                name: "Africa",
                color: "light-5",
                onClick: name => {
                  alert(name);
                }
              }
            ]}
            onSelectPlace={(lat, lon) => {
              alert(lat);
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
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
