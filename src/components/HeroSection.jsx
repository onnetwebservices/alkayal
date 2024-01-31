import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../images/home.jpeg'
import home2 from '../images/home-2.jpeg'
import home3 from '../images/home-3.jpeg'
import '../styles/HeroSection.Module.css'
function HeroSection() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide"
      data-bs-ride="carousel"
      >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="caro">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      
      <img loading='lazy' src={home} className="w-100 d-block" alt="home image" style={{fill:'true'}} />
      
      <div className="carousel-caption" >
        <h5>Your Dream Building</h5>
        <p >We,Alkayal General Contracting L.L.C are dedicated to meet our client’s expectations while developing and 
preserving Al Kayal General Contracting expertise</p>
        <p ><NavLink to='/projects' className='btn mt-3 btn-warning'>View Projects</NavLink></p>
      </div>
    </div>
    <div className="carousel-item">
      <img loading='lazy' src={home2} className="d-block w-100" alt="home image" />
      <div className="carousel-caption ">
        <h5>Always Dedicated </h5>
        <p> To achieve our goals, we are expanding our activities in order to provide 
solutions for the complex projects of our clients that require sincere 
commitment and professionalism.</p>
        <p><NavLink to='/projects' className='btn btn-warning mt-3' >View Projects</NavLink></p>
      </div>
    </div>
    <div className="carousel-item">
      <img loading='lazy' src={home3} className="d-block w-100" alt="home image" />
      <div className="carousel-caption ">
        <h5>True Construction</h5>
        <p> Manage for operational excellence by diligently implementing best
practices, maintaining international standards in the quality of work and
improving productivity</p>
        <p><NavLink to='/projects' className='btn btn-warning mt-3'>View Projects</NavLink></p>
      </div>
    </div>
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default HeroSection


