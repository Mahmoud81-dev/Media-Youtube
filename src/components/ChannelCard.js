import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
const ChannelCard = ({ channelDetail,marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{xs:"356px",sm:"320px"},
        height:"320px",
        margin:"auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
           

          }}
        >
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
          alt={channelDetail?.snippet?.tittle}
          sx={{
            borderRadius:"50%",
            height:"180px",
            width:"180px",
            mb:2,
            border:"1px solid #e3e3e3"
          }}
          />

          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:"gray",ml:"5px"}}/>
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (

            <Typography color="gray" variant="subtitle2">
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} {""}
              Subscribers
              
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
