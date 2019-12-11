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
import LandingHero from "./landing/hero";
import LandingSection1 from "./landing/section1";

const LandingPage = props => {
  return (
    <>
      <Box pad="small">
        <Box fill="vertical">
        <LandingHero signIn={props.signIn}/>
        </Box>
        <LandingSection1/>
      </Box>
    </>
  );
};

export default LandingPage;
