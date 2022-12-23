import { Box, Button, chakra, Image } from "@chakra-ui/react";
import React from "react";

const Banner = ({
  item,
  primaryBtnCSS,
  secondaryBtnCSS,
  type,
  topImage,
  isMobile,
}) => {

  return (
    <chakra.section
      display={["inline-block", "flex"]}
      justifyContent={"space-evenly"}
    >
      {type === "leftImg" || topImage ? (
        <Image
          w={["100%", "50%"]}
          h={["240px", "400px"]}
          src={item.img}
          mt={["18px", null]}
        />
      ) : null}
      <Box
        className="containers"
        w={["100%", "550px"]}
        m={["0px", "35px"]}
        textAlign={["center", null]}
      >
        <chakra.p
          fontSize={["18px", "42px"]}
          fontWeight={"bold"}
          textAlign={"center"}
          mt={[type === "leftImg" ? "15px" : null, null]}
        >
          {item.heading}
        </chakra.p>
        <chakra.p
          mt={"20px"}
          w={["100%", "520px"]}
          ml={["0px", "18px"]}
          textAlign={"center"}
          fontSize={["16px", "20px"]}
          padding={["0px 8px", "0px"]}
        >
          {item.content}
        </chakra.p>
        <Box
          display={isMobile ? "grid" : "flex"}
          mt={["22px", "32px"]}
          justifyContent={"center"}
          ml={["0px", "-10px"]}
        >
          <Button
            className="banner_btns"
            mr={["5px", "20px"]}
            fontWeight={"600"}
            p={["10px", "30px"]}
            fontSize={["17px", "24px"]}
            mb={[isMobile ? "15px" : null, "0px"]}
            _hover={{ backgroundColor: "none" }}
            {...primaryBtnCSS}
          >
            {item.primaryBtn}
          </Button>
          <Button
            className="banner_btns"
            p={["10px", "30px"]}
            fontWeight={"600"}
            fontSize={["17px", "24px"]}
            _hover={{ backgroundColor: "none" }}
            {...secondaryBtnCSS}
          >
            {item.secondaryBtn}
          </Button>
        </Box>
      </Box>
      {type !== "leftImg" && !topImage ? (
        <Image
          w={["100%", "50%"]}
          h={["240px", "400px"]}
          src={item.img}
          mt={["18px", null]}
        />
      ) : null}
    </chakra.section>
  );
};
export default Banner;
