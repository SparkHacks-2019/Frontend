import React from "react";
import { Box, Heading, Image, Button, Menu } from "grommet";

const DashboardHeading = props => {
  return (
    <Box justify="end" direction="row-responsive">
      {/* <Button onClick={props.signOut} label="Sign out" /> */}
      
      <Menu
        label={<Box
            // animation="fadeIn"
            height="xxsmall"
            width="xxsmall"
            margin="small"
          >
            <Image
              fit="cover"
              src={props.user.photoURL}
            />
          </Box>}
        items={[
          { label: "Change theme", onClick: props.changeTheme },
          { label: "Sign out", onClick: props.signOut }
        ]}
        icon={false}
        dropBackground={{"color": "white", "opacity": false}}
        size="medium"
      />
    </Box>
  );
};

export default DashboardHeading;
