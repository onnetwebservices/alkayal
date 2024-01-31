import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.Module.css'
import logo from '../images/logo.jpg'

function Navbar() {
  return (
    <div  className='container-fluid nav_bg '>
        <div className="row ">
            <div className="col-sm-12 col-md-11 mx-auto">
            
            <div className="container-fluid ">
  <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navbars  ">
  
    
    <NavLink to='/' className="navbar-brand "  >
    
    <img  src={logo} alt="alkayal logo" className="image-fluid logo" style={{fill:'true'}} />
      

        </NavLink>
    <button className="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " ></span>
    </button>
    
    
    <div className="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' activeclassname='menu_active' className="nav-link active" aria-current="page" >
            Home
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' activeclassname='menu_active' className="nav-link" >
            About
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/service'activeclassname='menu_active' className="nav-link" >
            Service
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/projects'activeclassname='menu_active' className="nav-link" >
            Projects
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' activeclassname='menu_active' className="nav-link" >
            Contact Us
            </NavLink>
        </li>
        
      </ul>
     
    </div>
    
    </nav>
    </div>
  

            </div>
        </div>
    </div>
  )
}

export default Navbar
