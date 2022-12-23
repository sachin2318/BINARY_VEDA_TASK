import { Box, chakra } from "@chakra-ui/react";
import React from "react";

const Content = ({ item }) => {
  return (
    <Box w={["100%", "700px"]} m={"auto"}>
      <chakra.h1 fontSize={["22px", "42px"]} textAlign={"center"}>
        {item.heading}
      </chakra.h1>
      <chakra.p
        fontSize={["18px", "22px"]}
        textAlign={"center"}
        p={["0px 8px", "0px"]}
      >
        {item.content}
      </chakra.p>
    </Box>
  );
};
export default Content;
