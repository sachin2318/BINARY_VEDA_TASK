import { chakra } from "@chakra-ui/system";
import React,{useEffect,useState} from "react";
import SiteHeaderLayout from "./SiteheaderLayout"
import { throttle } from "lodash";

const SiteHeader= ({ logo, type }) => {
    //showNavbar scroll when active state
    const [showNavbar, setShowNavbar] = useState(false)

    //showNavbar scroll changeBackground function
    const changeBackground = () => {
      if (window.scrollY >= 150) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }
  
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background of showNavbar
      window.addEventListener("scroll", throttle(changeBackground,300))
    },[])
  
  return (
    <React.Fragment>
      <chakra.header
        display="flex"
        className={showNavbar? "xu-site-header":""}
        position="fixed"
        left="0"
        right="0"
        top="0"
        width="100%"
        zIndex="9"
        height="80px"
        shadow="md">
        <SiteHeaderLayout onScrolled={showNavbar}/>
      </chakra.header>
    </React.Fragment>
  );
};

export default SiteHeader;
