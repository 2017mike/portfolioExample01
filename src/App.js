
import Navbar from './components/Navbar'
import About from './components/About'
import CssBaseline from '@mui/material/CssBaseline';
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
    <CssBaseline />
   <Navbar />
   <About />
   <Work />
   <Contact></Contact>
   <Footer />
   </>
  )
}

export default App;
