import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box,Paper,Table,TableContainer,TableHead,Typography,TableRow,TableCell, TableBody} from '@mui/material';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10, "& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">
          Contact us
        </Typography>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Box>
      <Box sx={{m:3,width:"600px", ml:10, "@media (max-width:600px)":{width:"300px"}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:"black",color:"white"}} align="center">
                 Contact Details
                </TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                   <SupportAgentOutlinedIcon sx={{color:"red",pt:1}}/>1234567890 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailOutlinedIcon sx={{color:"blue",pt:1}}/>help@myrestaurant.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallOutlinedIcon sx={{color:"blue",pt:1}}/>+916789543210
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
    
  )
}

export default Contact