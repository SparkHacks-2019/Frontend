import React, { useEffect, useRef } from "react";
import { Box, Image, Heading, Text, Button } from "grommet";
import { Down } from "grommet-icons";
import Typist from "react-typist";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const LandingHero = props => {
  const learnRef = useRef(null);
  const executeScroll = () => scrollToRef(learnRef);
  return (
    <>
      <Box
        justify={"center"}
        align={"center"}
        responsive
        pad="large"
        margin="xlarge"
      >
        <Box direction={"row-responsive"}>
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
              <Typist
                cursor={{
                  show: true,
                  blink: true,
                  element: "_",
                  hideWhenDone: true
                }}
                
              >
                Welcome to
              </Typist>
            </Heading>
            <Heading margin={"none"} size={"xlarge"}>
              Waypoint.
            </Heading>
            <Text size={"medium"} style={{ "margin-top": "1em" }}>
              It takes everyone to create an impact, but one person can create a difference.
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

        <Button
          // label={<Heading size={"xsmall"}>Learn More</Heading>}
          color="brand"
          onClick={executeScroll}
          margin={{ top: "xlarge" }}
          icon={<Down size="large" />}
          plain
        />
      </Box>
      <Box ref={learnRef}></Box>
    </>
  );
};

export default LandingHero;
