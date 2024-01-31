import React from 'react'
import '../styles/Contact.Module.css'
import { FaLocationDot, FaM, FaMailchimp, FaMessage, FaMobileRetro, FaPhone, FaRegMessage } from "react-icons/fa6";

function Contact() {
  return (
    <>
    <div className="container-fluid my-5 contact">
      <div className="text-center " data-aos='fade-in'>
        <h1 className='bgText fw-bold fs-2'>Contact Us</h1>
      </div>
      <div className="row p-5 mx-auto" style={{height:'100%'}}>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-md-1 order-2 p-3" style={{height:'100%'}} data-aos='fade-right'>
        <ul className="nav flex-column bgText">
        
        <li className="nav-item mb-2 ">
        <div className="row d-flex align-items-space-between" >
            <div className="col-md-1 col-1">
            <FaLocationDot className='p-2 bg text-white rounded' size={30}/> 
            </div>
            <div className="col-md-11 col-11  d-flex flex-column align-items-start ">
              <p >Location</p>
              <span className='fw-bold'>Mussafah-13,Abudhabi</span>
            </div>          
            </div>          
          </li>
         
          <li className="nav-item mb-2">
          <div className="row d-flex align-items-space-between"  >
          <div className="col-md-1 col-1">
            <FaPhone className='p-2 bg text-white rounded' size={30} />
            </div>
            <div className="col-md-11 col-11  d-flex flex-column align-items-start ">
            <p >Phone</p>
             <span className='fw-bold'>+97150-6879192</span>
             </div>
             </div>
            </li>

            <li className="nav-item mb-2">
          <div className="row d-flex align-items-space-between"  >
          <div className="col-md-1 col-1">
            <FaMobileRetro className='p-2 bg text-white rounded' size={30} />
            </div>
            <div className="col-md-11 col-11  d-flex flex-column align-items-start ">
            <p >Telephone</p>
             <span className='fw-bold'>+97155-5799192 </span>
             </div>
             </div>
            </li>
            <li className="nav-item ">
          <div className="row d-flex align-items-space-between"  >
          <div className="col-md-1 col-1">
            <FaRegMessage className='p-2 bg text-white rounded' size={30} />
            </div>
            <div className="col-md-11 col-11  d-flex flex-column align-items-start ">
            <p >Email</p>
             <span className='fw-bold' >alkayaluae@gmail.com</span>
             </div>
             </div>
            </li>
          
        </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-md-2 order-1 p-3" style={{height:'100%'}}>
        <iframe title='google map' height='370vh'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2865183086014!2d54.49092097471429!3d24.37133426465653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e416550602773%3A0x152b174de96fac36!2sAl%20Kayal%20General%20Contracting%20L.L.C!5e0!3m2!1sen!2sae!4v1705146303636!5m2!1sen!2sae"  width='100%' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      
    </div>
    </>     
    
  )
}

export default Contact
