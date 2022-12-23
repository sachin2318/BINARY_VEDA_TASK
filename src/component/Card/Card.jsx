import React from "react";
import { Box, chakra, Image } from "@chakra-ui/react";

const Card = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Box w={"100%"} m={["0px", "35px"]} key={index}>
          <Box d="flex" alignItems={"center"} justifyContent="center">
            <Image src={item.img} w={200} h={200} alt={"card_img"} />
          </Box>
          <chakra.p
            fontSize={["22px", "26px"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {item.caption}
          </chakra.p>
          <chakra.p
            textAlign={"center"}
            fontSize={["16px", "20px"]}
            p={["0px 8px", "0px"]}
            color={["grey"]}
          >
            {item.content}
          </chakra.p>
        </Box>
      ))}
    </>
  );
};

export default Card;
