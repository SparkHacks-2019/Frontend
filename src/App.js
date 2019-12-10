import React from "react";
import { Grommet, Box } from "grommet";

function App() {
  return (
    <Grommet plain>
      <Box
        direction="row"
        border={{ color: "brand", size: "large" }}
        pad="medium"
      >
        <Box pad="small" background="dark-3" />
        <Box pad="medium" background="light-3" />
      </Box>
    </Grommet>
  );
}

export default App;
