import React from 'react'
import { Box,Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
 <>
 <Box sx={{textAlign:"center",bgcolor:"#1A1A19",color:"white",p:3}}>
    <Box sx={{my:3,"& svg":{
        fontSize:"60px",
        cursor:"pointer",
        mr:2
    },
    "& svg:hover":{
        color:"goldenrod",
        transform:"translateX(5px)",
        transition:"all 400ms"
    }}}>
       <InstagramIcon/>
       <XIcon/>
       <YouTubeIcon/>
       <GitHubIcon/>
    </Box>
    <Typography variant="h5" sx={{"@media(max-width:600px)":{fontSize:"1rem"}}}>
        All Rights Reserved &copy;
    </Typography>
 </Box>
 </>
  );
}

export default Footer