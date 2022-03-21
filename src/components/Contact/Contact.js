import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = () => {

  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: ''
  })

    const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }


  const handleSubmit = () => {
    console.log('hi')
    if(formState.email===''){
      alert('email is required')
    }
    if(formState.name===''){
      alert('name is required')
    }
    if(formState.message===''){
      alert('message is required')
    }
  }
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" p={2} spacing={3}>
       <Grid item xs={10} md={8} lg={7}>
          <FormControl fullWidth={true}>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" name="name"
  onChange={handleInputChange}
  />
</FormControl>
       </Grid>
       </Grid>
       
       <Grid container justifyContent="center" p={2} spacing={3}>
       <Grid item xs={10} md={8} lg={7}>
          <FormControl fullWidth={true}>
  <InputLabel htmlFor="my-input">Email</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" name="email" 
  onChange={handleInputChange}/>
</FormControl>
       </Grid>
        <Grid item xs={10} md={8} lg={7}>
          <TextField
          name="message"
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          fullWidth={true}
          onChange={handleInputChange}
        />
       </Grid>
         </Grid>
       <Grid container justifyContent="center">
          <Button onClick={handleSubmit}>Submit</Button>
       </Grid>
      
     
      
    </>
  )
}

export default Contact
