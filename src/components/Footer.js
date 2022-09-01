import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Stack  alignItems="center" minHeight="10vh" sx={{

        display:{xs:"flex",md:"none"}
        
    }}>
         <Typography
         variant='subtitle2'
         color="#fff"
        
        >
          Made With ❤️ by Mahmoud Hamdy
        </Typography>

        <Stack  direction="row" mt={1.2} mb={1} gap={2}>
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
    </Stack>
  )
}

export default Footer