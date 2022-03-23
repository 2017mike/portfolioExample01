
import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import CssBaseline from '@mui/material/CssBaseline';
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [pageState, setPageState] = useState({
    aboutState: true,
    workState: false,
    contactState: false,
  })
  return (
    <>
    <CssBaseline />
   <Navbar setPageState={setPageState}
   pageState={pageState}/>
   {pageState.aboutState? 
   <About   />
   : ''}
   {pageState.workState?<Work   /> : '' }
  
   {pageState.contactState?<Contact   /> : '' }
   <Footer />
   </>
  )
}

export default App;
