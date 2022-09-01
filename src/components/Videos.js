import { Box, Stack } from '@mui/system';
import React,{useState,useEffect} from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {ChannelCard,VideoCard} from './';

const Videos = ({videos,direction}) => {

  if(!videos?.length) return "Loading...."
  return (
    <Stack direction={direction||'row'} flexWrap="wrap" justifyContent='start' gap={2}>

      {videos.map((item,idx)=>
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item}/>}
      </Box>
      
      )}
    </Stack>
  )
}

export default Videos