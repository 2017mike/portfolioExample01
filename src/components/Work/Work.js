import React from 'react'
import Card from '../Card'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Work = () => {
  const myProjects = [
    {
      title: 'example1',
      github: 'https://github.com/',
      picture: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      heroku: 'https://id.heroku.com/login'
    },
    {
      title: 'example2',
      github: 'https://github.com/',
      picture: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      heroku: 'https://id.heroku.com/login'
    },
     {
      title: 'example3',
      github: 'https://github.com/',
      picture: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      heroku: 'https://id.heroku.com/login'
    },
     {
      title: 'example4',
      github: 'https://github.com/',
      picture: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      heroku: 'https://id.heroku.com/login'
    },
     {
      title: 'example5',
      github: 'https://github.com/',
      picture: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      heroku: 'https://id.heroku.com/login'
    },
     {
      title: 'example6',
      github: 'https://github.com/',
      picture: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      heroku: 'https://id.heroku.com/login'
    }
  ]
  return (
    <>
      <Grid container justifyContent="center" >
        <h1>My Work</h1>
      </Grid>
      <Grid container padding={2} spacing={4} justifyContent="center">
    
        {myProjects.map(project =>
       <Grid item>
      <Card title={project.title} github={project.github} picture={project.picture} heroku={project.heroku} ></Card>
        </Grid>
        )
        }
      </Grid>
    </>
  )
}

export default Work
