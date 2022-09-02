import { Box, Stack, Typography } from "@mui/material";
import React, {useState, useEffect ,} from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

import {
  Facebook,
  LinkedIn,
  GitHub,
  KeyboardArrowUp,
} from "@mui/icons-material";




const Feed = () => {

  const body =  document.getElementById("body");
  const scrollTitle= document.getElementById("title");
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [display,setDisplay] = useState('none')

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
    setVideos(data.items)
  );

  window.addEventListener("scroll",()=>{

    if(window.scrollY>150){
      setDisplay("block")
    }else{
      setDisplay("none")
    }
  })
}, [selectedCategory]);

const scrollTop = ()=>{

 body.scrollTo({

    top:scrollTitle,
    behavior:"smooth"
  })
 window.scrollTo({

    top:scrollTitle,
    behavior:"smooth"
  })


}

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
      className="scroll"
      onClick={scrollTop}
      display={display}
        sx={{
          backgroundColor:" #FC1503",
          outline:"none",
          height: "3vh",
          p:"9px",
          borderRadius: "5px",
          position:"fixed",
          right:"35px",
          bottom:"20px",
          zIndex:20,
          cursor:"pointer"
        }}
      >
        <KeyboardArrowUp  sx={{ color: "white", fontSize: "25px" }} />
      </Box>

      
      {/* sidebar */}
      <Box
        
        sx={{
          height: { sx: "auto", md: "80vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
      
          id="title"
          className="copyright"
          sx={{mt:1, ml: 1, color: "#fff", fontSize: "13px" }}
        >
          Made With ❤️ by <br /> Mahmoud Hamdy
        </Typography>

        <Stack className="copyright" direction="row" mt={1} mb={1} ml={1} gap="20px" >
          <a
            href="https://www.facebook.com/profile.php?id=100010258625338"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <Facebook sx={{fontSize:"20px"}} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-hamdy-7a3895195"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <LinkedIn sx={{fontSize:"20px"}} />
          </a>
          <a
            href="https://github.com/Mahmoud81-dev"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <GitHub sx={{fontSize:"20px"}} />
          </a>
        </Stack>
      </Box>
      {/* end sidebar */}

      {/* Videos */}

      <Box
      id="body"
        p={2}
        sx={{
          overflow: "auto",
          height: {xs:"50%",sm:"85vh"},
          flex: 2,
        }}
      >
     
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "white",
          }}
          mb={2}
        >
          {selectedCategory} {""}
          <span
            style={{
              color: "#F31503",
            }}
          >
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>

      {/* end Videos */}
    </Stack>
  );
};

export default Feed;
