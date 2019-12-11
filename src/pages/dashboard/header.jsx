import React from "react";
import { Box, Heading, Image, Button, Menu } from "grommet";

const DashboardHeading = props => {
  return (
    <Box direction="row-responsive" >
      <Heading textAlign="start" alignSelf="start">
        Welcome back, {props.user.displayName.split("")}!
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
  );
};

export default DashboardHeading;
