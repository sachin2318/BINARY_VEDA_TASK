/* eslint-disable default-case */
import React, { useState } from "react";
import SiteHeader from "../Layout/Header";
import FirstImg from "../../assests/Images/illustration.png";
import SecondImg from "../../assests/Images/showcase.png";
import ThirdImg from "../../assests/Images/botbot.png";
import CardFirstImg from "../../assests/Images/apiTeam.png";
import CardSecondImg from "../../assests/Images/graphQL.png";
import CardThirdImg from "../../assests/Images/superchargeWorkflow.png";
import Banner from "../Banner/Banner";
import Content from "../Content/Content";
import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import Card from "../Card/Card";
import Footer from "../Layout/Footer";
import Todo from "../Todo/Todo";
import { useEffect } from "react";

function HomePage() {
  const [isNotMobile] = useMediaQuery("(min-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    // to hanlde chakra ui breakdown issue. becuase chakra ui use css in js. that's need time to load
    let timeout;
    setIsLoading(true);

    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isNotMobile]);

  // default static data
  const homepageData = [
    {
      type: "Banner",
      placement: 1,
      sort: 1,
      child: {
        heading: "Let's build the future of design, Now.",
        content:
          "Create amazing tools and integrations for 1 million users or customise Marvel for your team",
        primaryBtn: isNotMobile ? "Submit your app" : "View the docs",
        secondaryBtn: isNotMobile ? "View API Docs" : "Manage your apps",
        img: FirstImg,
      },
    },
    {
      type: "Content",
      sort: 2,
      child: {
        heading: "Experience the freedom to build features, right away.",
        content:
          "You can now harness components of our platform and build powerful integrations for our 2 million users - or simply just for your team.",
      },
    },
    {
      type: "Card",
      sort: 3,
      child: [
        {
          img: CardFirstImg,
          caption: "Dedicated API Team",
          content:
            "Our team are available for user's questions via our Slack Developer Community and Email",
        },
        {
          img: CardSecondImg,
          caption: "Our API uses Graph QL",
          content: isNotMobile
            ? "No handling server side. Get many API's responses in a single request."
            : "Giving you the flexibility to select all the data you need with a single request.",
        },
        {
          img: CardThirdImg,
          caption: "Supercharge your workflow",
          content:
            "Automate workflows, integrate and analyse data and take Marvel to the next level.",
        },
      ],
    },
    {
      type: "Banner",
      placement: isNotMobile ? 2 : 3,
      sort: 5,
      child: {
        heading: "Showcase your app in our integrations directory.",
        placement: 2,
        content:
          "Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.",
        primaryBtn: "Become a partner",
        secondaryBtn: "View Integrations",
        img: SecondImg,
      },
    },
    {
      type: "Banner",
      placement: isNotMobile ? 3 : 2,
      sort: 4,
      child: {
        heading: `${
          isNotMobile ? `A Slack-bot` : `BotBot - Slack bot`
        } for creating and managing prototypes`,
        placement: 3,
        content: isNotMobile
          ? "Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."
          : "Check out our API example BotBot, a bot for creating, viewing and managing prototypes by simply using Slash Commands in Slack. Grab the code and make your own bot!",
        primaryBtn: isNotMobile ? "Become a partner" : "View on Github",
        secondaryBtn: isNotMobile ? "View Integrations" : "Try the demo",
        img: ThirdImg,
      },
    },
  ];

  if (!isNotMobile) {
    homepageData.sort((a, b) => {
      return a.sort - b.sort;
    });
  }

  const _section = (data, idx) => {
    switch (data.type) {
      case "Banner": {
        if (data.placement === 1) {
          return (
            <Box mt={["125px", "250px"]} mb={"50px"}>
              <Banner
                item={data.child}
                primaryBtnCSS={{
                  bg: ["white", "#008fb3"],
                  color: ["black", "white"],
                }}
                secondaryBtnCSS={{
                  bg: ["transparent", "white"],
                  color: ["White", "black"],
                  borderColor: ["white", "black"],
                }}
              />
            </Box>
          );
        } else if (data.placement === 2) {
          return (
            <Box mt={["40px", "100px"]}>
              <Banner
                item={data.child}
                primaryBtnCSS={{ bg: ["white"], color: ["black"] }}
                secondaryBtnCSS={{
                  bg: ["transparent"],
                  color: ["White"],
                  borderColor: ["white"],
                }}
                topImage={!isNotMobile ? true : false}
                isMobile={!isNotMobile ? true : false}
              />
            </Box>
          );
        } else {
          return (
            <Box mt={["80px", "200px"]} mb={["40px", "100px"]}>
              <Banner
                item={data.child}
                type={"leftImg"}
                primaryBtnCSS={{ bg: ["white"], color: ["black"] }}
                secondaryBtnCSS={{
                  bg: ["transparent"],
                  color: ["white"],
                  borderColor: ["white"],
                }}
                isMobile={!isNotMobile ? true : false}
              />
            </Box>
          );
        }
      }
      case "Content": {
        return (
          <Box mt={["80px", "120px"]}>
            <Content item={data.child} />
          </Box>
        );
      }
      case "Card": {
        return (
          <Box
            mt={["80px", "80px"]}
            display={["inline-block", "flex"]}
            justifyContent={"center"}
            key={idx}
          >
            <Card items={data.child} />
          </Box>
        );
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <SiteHeader />

          {homepageData.map((data, index) => {
            return <div key={index}>{_section(data, index)}</div>;
          })}

          <Todo isOpen={isOpen} close={close}>
            <Button
              className="top_user"
              bg={"rgb(0,143,179)"}
              color={"white"}
              mr={["5px", "20px"]}
              fontWeight={"600"}
              p={["12px", "30px"]}
              mb={["15px", "0px"]}
              ml={["15px", "30px"]}
              border="none"
              _hover={{ backgroundColor: "rgb(0,143,179,0.8)" }}
              boxShadow={"0px 4px 0px 0px rgb(0,143,179,0.2)"}
              fontSize={"20px"}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {"Todo"}
            </Button>
          </Todo>
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePage;
