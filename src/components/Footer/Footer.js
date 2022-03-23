import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LayersIcon from '@mui/icons-material/Layers';
import './footer.css'
const Footer = () => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="large" className="footer">
      <Grid container justifyContent="center" padding={2} spacing={2}>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={3}>
          <a href="https://github.com">
            <GitHubIcon className="icon"/>   
            </a>  
             <a href="https://github.com">      Github</a>
        </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={3} >
         <a href="https://linkedin.com">
            <LinkedInIcon className="icon"/>   
            </a>  
             <a href="https://linkedin.com">      LinkedIn</a>
        </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={3} >
            <a href="https://linkedin.com">
            <LayersIcon className="icon"/>   
            </a>  
             <a href="https://stackoverflow.com">      StackOverflow</a>
        </Grid>
      </Grid>
     </Container>
    </>
  )
}

export default Footer
