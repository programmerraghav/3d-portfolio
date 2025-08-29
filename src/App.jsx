import './App.css'
import bg from "./Background.jpg"
import Navbar from './Components/Navbar'
import About from './Components/About.jsx'
import Home from './Components/Home'
import Work from './Components/Work.jsx'
import Footer from './Components/Footer.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  return (
    <>
      <img src={bg} alt="Background" loading='eager' className='background' />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
