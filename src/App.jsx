import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import About from './pages/About'
import Service from './pages/Service'
import Footer from './components/Footer'
import CommonService from './components/CommonService'
import Projects from './components/Projects'
import GoToTop from './components/GoToTop'
import Watsapp from './components/Watsapp'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{

    aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
        })
  },[])

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>        
        <Route path='/about'  element={<About />}></Route>
        <Route path='/service'  element={<Service />}></Route>
        <Route path='/service/:id'  element={<CommonService />}></Route>
        <Route path='/projects'  element={<Projects />}></Route>
        <Route path='/contact'  element={<Contact />}></Route>
        <Route path="*" element={<Navigate replace to="/"/>} /> 
      </Routes>
      <Watsapp />
      <GoToTop />
      <Footer />
    </Router>
      
    </>
  )
}

export default App
