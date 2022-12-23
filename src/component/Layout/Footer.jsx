import { chakra, Image } from "@chakra-ui/react";
import FooterImg from "../../assests/Images/logo-white.svg";
import React from "react";
import { Box } from "@chakra-ui/react";
import { SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { useMemo } from "react";

const Footer = () => {
  const [isNotMobile] = useMediaQuery("(min-width: 767px)");
  const footer = useMemo(() => {
    if (isNotMobile) {
      return [
        {
          title: "Overview",
          child: [
            "Why Marvel",
            "Enterprise",
            "Pricing",
            "Request a demo",
            "Explore",
            "Apps",
            "Developer API",
          ],
        },
        {
          title: "Features",
          child: [
            "Wireframing",
            "Design",
            "Prototyping",
            "Collaboration",
            "Handoff",
            "Integrations",
            "Sketch Plugin",
          ],
        },
        {
          title: "Support",
          child: ["Help Center", "Terms of Service", "Privacy", "Security"],
        },
        {
          title: "Marvel",
          child: [
            "Blog",
            "Our Team",
            "Contact Us",
            "Success Stories",
            "Brand Guidelines",
          ],
        },
        {
          title: "Follow",
          child: ["Twitter", "Dribble", "Facebook", "Github", "Workable"],
        },
      ];
    }
    return [
      {
        title: "Platform",
        child: [
          "Why Marvel",
          "Enterprise",
          "Mobile Apps",
          "Pricing",
          "Developer API",
          "Marvel vs InVision",
          "Marvel vs Zepline",
          "Marvel for Finance",
          "Marvel for Consultancies",
          "Marvel for Agencies",
        ],
      },
      {
        title: "Features",
        child: [
          "Design",
          "Wireframing",
          "Prototyping",
          "Handoff",
          "User Testing",
          "Collaboration",
          "Integrations",
        ],
      },
      {
        title: "Support",
        child: [
          "Help Center",
          "Terms of Service",
          "Privacy",
          "Status",
          "Security",
          "Resources",
          "Design Glossary",
        ],
      },
      {
        title: "Company",
        child: [
          "Blog",
          "About Us",
          "Jobs",
          "Contact Us",
          "Customer Stories",
          "Labs",
          "Careers",
        ],
      },
    ];
  }, [isNotMobile]);

  return (
    <chakra.footer m={"15px"} mb={"100px"}>
      {!isNotMobile ? (
        <Box>
          <Image
            src={FooterImg}
            alt="footer_img"
            w={20}
            h={20}
            mb={"30px"}
            ml={"0px"}
            loading="lazy"
          />
        </Box>
      ) : null}
      <SimpleGrid columns={[2, null, 6]} spacing="40px">
        {isNotMobile ? (
          <Box>
            <Image
              src={FooterImg}
              alt="footer_img"
              w={20}
              h={20}
              loading="lazy"
              ml={"35px"}
            />
          </Box>
        ) : null}
        <>
          {footer.map((item, id) => (
            <Box key={id}>
              <chakra.span>
                <h2>{item.title}</h2>
              </chakra.span>
              {item.child.map((child, idx) => (
                <Box
                  key={idx}
                  m={"5px"}
                  fontSize={"18px"}
                  color={"grey"}
                  _hover={{ color: "white" }}
                  cursor={"pointer"}
                >
                  <chakra.span fontSize={["14px", "24px"]}>{child}</chakra.span>
                </Box>
              ))}
            </Box>
          ))}
        </>
      </SimpleGrid>
    </chakra.footer>
  );
};

export default Footer;
