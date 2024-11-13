import React from 'react'
import { Box, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx = {{textAlign:'center',bgcolor:'#1A1A19',color:'white',p: 3}}>
        <Box sx={{my:3,
            "& svg":{
               fontSize:"60px",
               cursor:'pointer',
               mr:2,
        },
        "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(5px)",
            transition: "all 400ms",
        }
        }}>
            <GoogleIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography>
            All Rights Reserved &copy; Techinfo YT
        </Typography>
    </Box>
    </>
  );
};

export default Footer;