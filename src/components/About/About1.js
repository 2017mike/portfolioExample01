import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import selfie from '../../assets/pics/small.PNG'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './About.css'

const About = () => {
  return (
    <>
   <Grid container justifyContent="center">
    
       <h1>About Me</h1>
     </Grid>

     
    <Grid container justifyContent="center" p={2} spacing={2}>
    {/* <Grid item xs={2} md={1} ></Grid> */}
    <Grid item md={2}></Grid>
    <Grid  item xs={8} md={4}  >
     <Avatar alt="Remy Sharp" src={selfie} sx={{ width: 1, height: 1}}></Avatar>
    </Grid>
    {/* <Grid item xs={2} md={1} ></Grid> */}
   
    <Grid item xs={12} md={3} >
     <Paper >
       <h1> Michael Scharf</h1>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus voluptas sint consequatur voluptatum tenetur aspernatur exercitationem animi, esse, consequuntur, atque non placeat pariatur illo excepturi officia molestiae autem quos?
        </Typography> 
       </Paper>

    </Grid>
    <Grid item md={3}>

    </Grid>

  </Grid>
  </>
  )
}

export default About
