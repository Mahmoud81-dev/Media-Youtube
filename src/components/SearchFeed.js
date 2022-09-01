import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflow: "auto",
        height: "86.5vh",
        flex: 2,
      }}
    >
      <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "white",
        }}
        mb={2}
      >
        Search Result for : {" "}
        <span
          style={{
            color: "#F31503",
          }}
        >
          {searchTerm}
        </span>
        {" "}
        videos
      </Typography>

      <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
