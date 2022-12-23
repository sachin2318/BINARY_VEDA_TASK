import { Image, chakra, Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import HeaderImg from "../../assests/Images/logo-white.svg";
import BlackHeaderImg from "../../assests/Images/logo-black.svg";
import Menu from "../../assests/Images/white_menu.svg";
import DarkMenu from "../../assests/Images/menu.svg";
import Down from "../../assests/Images/chevron-down.svg";
const SiteHeaderLayout = ({ onScrolled }) => {
  const [isNotMobile] = useMediaQuery("(min-width: 767px)");

  return (
    <React.Fragment>
      <Box w={"100%"}>
        <chakra.div h="full" className="topbar" p={"15"} mt={["0px", null]}>
          <Box
            cursor="pointer"
            className="d-flex"
            ml={["0px", "55px"]}
            alignItems={"center"}
          >
            <Image
              src={onScrolled ? BlackHeaderImg : HeaderImg}
              alt="Header"
              w={["70px !important", "120px"]}
              h={["60px !important", "100px"]}
              loading="lazy"
            />
            <Box
              d="flex"
              alignItems={"center"}
              mb={["0px", "12px"]}
              justifyContent={"center"}
            >
              <chakra.p
                ml={["10px", "15px"]}
                mr={"10px"}
                fontSize={["18px", "22px"]}
                color={onScrolled && "black"}
              >
                |
              </chakra.p>
              <chakra.p
                fontSize={["18px", "22px"]}
                color={onScrolled && "black"}
              >
                Developers
              </chakra.p>
            </Box>
          </Box>
          <chakra.div w={["auto", "70%"]} alignItems="center">
            {isNotMobile ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                {["WhyMarvel", "Enterprise", "Pricing", "Sign In"].map(
                  (item, index) => {
                    return (
                      <>
                        <Box
                          key={`${item}${index}`}
                          d="flex"
                          alignItems={"center"}
                          justifyContent={"center"}
                          _hover={{
                            bg: onScrolled && "rgb(22, 57, 92,0.8)",
                          }}
                          p={"12px"}
                          w={"160px"}
                          className={onScrolled && "top_user"}
                          boxShadow={
                            onScrolled && "0px 5px 0px 0px rgb(22, 57, 92,0.25)"
                          }
                          background={onScrolled && "rgb(22, 57, 92)"}
                          border={onScrolled && "none"}
                          fontWeight={"600"}
                          transition={"70ms"}
                        >
                          <chakra.p mb={0}>{item}</chakra.p>
                          {index === 0 && <Image src={Down}></Image>}
                        </Box>
                      </>
                    );
                  }
                )}
                <Box
                  _hover={{
                    bg: onScrolled && "rgba(255, 0, 0, 0.6)",
                  }}
                  p={"12px"}
                  w={"200px"}
                  className="top_user"
                  boxShadow={
                    onScrolled && "0px 5px 0px 0px rgba(255, 0, 0, 0.25)"
                  }
                  background={onScrolled && "rgba(255, 0, 0, 0.5)"}
                  border={onScrolled && "none"}
                  fontWeight={"600"}
                  transition={"70ms"}
                >
                  <chakra.span
                    color={!onScrolled && "Black !important"}
                    fontSize={"22px"}
                  >
                    {"Sign up free"}
                  </chakra.span>
                </Box>
              </Box>
            ) : (
              <>
                <Image
                  src={onScrolled ? DarkMenu : Menu}
                  alt="Header"
                  w={10}
                  h={10}
                  loading="lazy"
                />
              </>
            )}
          </chakra.div>
        </chakra.div>
      </Box>
    </React.Fragment>
  );
};

export default SiteHeaderLayout;
