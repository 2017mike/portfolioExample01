import {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Contact.css'
const Contact = () => {

  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: '',
    nameNeededState: false,
    messageNeededState: false,
    emailInvalidState: false
  })

    const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  

  const handleNameRequired = () => {
    if(formState.name== '') {
    setFormState({...formState, nameNeededState: true, messageNeededState: false, emailInvalidState: false})
    }
  }

  const handleMessageRequired = () => {
    if (formState.message == '') {
    setFormState({...formState, nameNeededState: false, messageNeededState: true, emailInvalidState: false})
    }
  }

  const validateEmail = (inputText) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(inputText.match(mailformat))
                  {
              return true
              }
              else {
                return false
              }
        }

  const handleEmailBlur = () => {
    if(validateEmail(formState.email)===false)  {
      console.log('invalid email')
      setFormState({...formState, emailInvalidState: true, nameNeededState: false, messageNeededState: false})
    }
  }


 
  return (
   
    <>
     
      
      <Grid container justifyContent="center">
        <Grid item>
          <h1>Contact</h1>
          <div></div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" p={2} spacing={3}>
       <Grid item xs={10} md={8} lg={7}>
          <FormControl fullWidth={true}>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" name="name"
  onChange={handleInputChange}
  onBlur={handleNameRequired}
  />
</FormControl>
       </Grid>
       </Grid>
       
       <Grid container justifyContent="center" p={2} spacing={3}>
       <Grid item xs={10} md={8} lg={7}>
          <FormControl fullWidth={true}>
  <InputLabel htmlFor="my-input">Email</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" name="email" 
  onChange={handleInputChange}
  onBlur={handleEmailBlur}
  />

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
          onBlur={handleMessageRequired}
        />
       </Grid>
         </Grid>
       <Grid container justifyContent="center">
          <Button>Submit</Button>
       </Grid>
        <Grid container justifyContent="center">
          {formState.messageNeededState? <p> Message needed!</p> : ''}
          {formState.nameNeededState?  <p> Name needed!</p> : ''}
          {formState.emailInvalidState? <p> Invalid email!</p> : ''}

       </Grid>
      
      <Grid container className="spacer"></Grid>
     
      
    </> 


  )
}

export default Contact
