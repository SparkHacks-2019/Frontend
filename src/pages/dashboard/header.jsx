import React from 'react';
import { Box, Heading, Image, Button } from 'grommet'

const DashboardHeading = props => {
    return (
        <Box justify="end" direction="row-responsive">
          {/* <Button onClick={props.signOut} label="Sign out" /> */}
          <Box animation="slideLeft" alignSelf="end" justify="end" alignContent="end" height="xxsmall" width="xxsmall" margin="small">
          <Image onClick={props.changeTheme} fit="cover" src={props.user.photoURL}/>
          </Box>
        </Box>
    )
}

export default DashboardHeading