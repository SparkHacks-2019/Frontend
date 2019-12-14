import React from "react";
import { Box, Heading, Image, Button, Menu, Text } from "grommet";
import Typist from "react-typist";

const DashboardHeading = props => {
  return (
    <Box animation="fadeIn" margin={{top:"38rem"}}>
      <Text>Rishi, you're doing pretty well! Based off of your previous performances, you've been doing great! Welcome to your 22 storey building.</Text>
      <Box direction="row">
      <Heading textAlign="start" alignSelf="start">
        <Typist
            cursor={{
                blink: true,
                hideWhenDone: true,
                element: "",

            }}
          onTypingDone={() => {
            props.setTypingState(false);
          }}
        >
          Welcome back, {props.user.displayName.split("")}!
        </Typist>
      </Heading>
      <Menu
        pad="none"
        style={{ marginLeft: "auto" }}
        label={
          <Box
            // animation="fadeIn"
            height="xxsmall"
            width="xxsmall"
            margin="small"
            round
          >
            <Image fit="cover" src={props.user.photoURL} />
          </Box>
        }
        items={[
          { label: "Change theme", onClick: props.changeTheme },
          { label: "Sign out", onClick: props.signOut }
        ]}
        icon={false}
        dropBackground={{ color: "white", opacity: false }}
        size="medium"
      />
      </Box>
    </Box>
  );
};

export default DashboardHeading;
