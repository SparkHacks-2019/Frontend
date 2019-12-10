import {Box, Image, Heading, Text, Grommet, Button} from 'grommet';
import Typist from "react-typist";
import React from "react";

const LandingPage = props => {
  return (
    <>

      <Box justify={"center"} align={"center"}>
      <Box justify={"center"} align={"center"} responsive animation={"fadeIn"} direction={"row-responsive"} pad="large">

        <Box justify={"center"} width={"medium"} pad={"none"} height={"medium"}>
          <Image
              fit="cover"
              src={"https://i.ibb.co/3sL75R7/lilypad.png"}
          />
        </Box>
        <Box pad={"medium"}/>

          <Box>
            <Heading size={"small"}>
            <Typist>
              We are
              <Typist.Backspace count={6} delay={1000} />
              You are
              <Typist.Backspace count={7} delay={1000} />
              Welcome to

            </Typist>
            </Heading>
            <Heading margin={"none"} size={"xlarge"}>Lilypad.</Heading>
            <Text size={"medium"} style={{"margin-top":"1em"}} >Your centre for carbon savings.</Text>
            <Box pad={"small"}/>
            <Button
                label={<Heading size={"small"}>Sign in</Heading>}
                primary
                onClick={props.signIn}
            />
          </Box>
      </Box>
      </Box>
    </>
  );
};

export default LandingPage;
