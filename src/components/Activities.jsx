import React from 'react'
import home from '../images/home.jpeg'
import home2 from '../images/home-2.jpeg'
import home3 from '../images/home-3.jpeg'
import '../styles/Activities.Module.css'
import { NavLink } from 'react-router-dom'

function Activities() {
  return (
    <>
    

      <div id="carouselExampleCaption" className="carousel slide"
      data-bs-ride="carousel"
      >
  <div className="carousel-indicators visually-hidden">
    <button type="button " data-bs-target="#carouselExampleCaption" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="3" aria-label="Slide 4"></button>
  <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="4" aria-label="Slide 5"></button>
  <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="5" aria-label="Slide 6"></button>
  <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="6" aria-label="Slide 7"></button>
  <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  <div className="carousel-inner carouselinner">
    <div className="carousel-item carouselitem active">
    <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>General Civil works </h2>
        
        <p><NavLink to='/contact' className='btn btn-primary opacity-100 mt-3'>Contact Us</NavLink></p>
      </div>
    </div>
    <div className="carousel-item carouselitem">
      <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>Warehouses and Industrial Buildings </h2>
        
        <p><NavLink to='/contact' className='btn btn-primary mt-3' >Contact Us</NavLink></p>
      </div>
    </div>
    <div className="carousel-item carouselitem">
      <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption ">
        <h2>General Maintenance work </h2>
        <p><NavLink to='/contact' className='btn btn-primary mt-3'>Contact Us</NavLink></p>
      </div>
    </div>

    <div className="carousel-item carouselitem">
      <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>Annual Maintenance Contract</h2>
        <p><NavLink to='/contact' className='btn btn-primary mt-3'>Contact Us</NavLink></p>
      </div>
    </div>

    <div className="carousel-item carouselitem">
      <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>Electrical and Mechanical works</h2>
        <p><NavLink to='/contact' className='btn btn-primary mt-3'>Contact Us</NavLink></p>
      </div>
    </div>

    <div className="carousel-item carouselitem">
      <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>Residential Buildings, Commercial Buildings. </h2>
        <p><NavLink to='/contact' className='btn btn-primary mt-3'>Contact Us</NavLink></p>
      </div>
    </div>
    <div className="carousel-item carouselitem">
    <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>Hospital Compounds. </h2>
        <p><NavLink to='/contact' className='btn btn-primary mt-3'>Contact Us</NavLink></p>
      </div>
    </div>

    <div className="carousel-item carouselitem ">
      <img src={home3} className="d-block w100" alt="home image" />
      <div className="carousel-caption carouselcaption">
        <h2>Civil work contracting </h2>
        <p><NavLink to='/contact' className='btn btn-primary mt-3'>Contact Us</NavLink></p>
      </div>
    </div>

    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaption" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaption" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   




 
    </>
  )
}

export default Activities
