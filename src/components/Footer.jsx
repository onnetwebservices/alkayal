import React from 'react'
import { FaLocationDot, FaM, FaMobileRetro, FaPhone } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import '../styles/Footer.Module.css'

function Footer() {
  return (
    <>
       <div  className='container-fluid  text-white ' >
        <div className="row">
            <div className="col-12 p-4 " style={{backgroundColor:'#1D3659'}} >
  <footer className="py-5 "  >
    <div className="row">
      <div className="col-8 col-md-3 col-lg-3  mb-3 p-2  ">
        <h2>Contact</h2>
        <ul className="nav flex-column">
        <li className="nav-item mb-2"><FaLocationDot /> : Mussafah-13,Abudhabi</li>
          <li className="nav-item mb-2"><FaPhone /> : +97150-6879192</li>
          <li className="nav-item mb-2"><FaMobileRetro /> : /+97155-5799192</li>
          <li className="nav-item mb-2"><FaM />: alkayaluae@gmail.com</li>
          
        </ul>
      </div>

   

      <div className="col-4 col-md-3 mb-3 quicklink p-2">
        <h2>Quick Links</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0  ">Home</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/about' className="nav-link p-0 " >About</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/service' className="nav-link p-0  ">Services</NavLink></li>
          <li className="nav-item mb-2"><NavLink to='/contact' className="nav-link p-0  ">Contact</NavLink></li>
          
        </ul>
      </div>

      <div className="col-md-4 col-lg-4 mb-3 mx-auto">
      <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2865183086014!2d54.49092097471429!3d24.37133426465653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e416550602773%3A0x152b174de96fac36!2sAl%20Kayal%20General%20Contracting%20L.L.C!5e0!3m2!1sen!2sae!4v1705146303636!5m2!1sen!2sae"  width='100%' height='100%' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
         
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>copyright ©2024 Al Kayal General Contracting L.L.C,All rights reserved.</p>
      
    </div>
  </footer>
</div>
</div>
</div>
</>

  )
}

export default Footer
