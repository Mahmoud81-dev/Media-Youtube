import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
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
          className="copyright"
          sx={{ mt: 1.5, ml: 1, color: "#fff", fontSize: "13px" }}
        >
          Made With ❤️ by <br /> Mahmoud Hamdy
        </Typography>

        <Stack className="copyright" direction="row" mt={2} mb={1} gap="20px">
          <a
            href="https://www.facebook.com/profile.php?id=100010258625338"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-hamdy-7a3895195"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Mahmoud81-dev"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <GitHub />
          </a>
        </Stack>
      </Box>
      {/* end sidebar */}

      {/* Videos */}

      <Box
        p={2}
        sx={{
          overflow: "auto",
          height:"89vh",
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
