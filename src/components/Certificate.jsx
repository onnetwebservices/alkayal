import React from 'react'
import c1 from '../images/certif1-13.svg'
import c2 from '../images/certifweb.webp'
import c3 from '../images/certificate3.jpg'
import c4 from '../images/certificate4.jpg'
import c5 from '../images/certificate5.jpg'
import c6 from '../images/certificate6.jpg'
import c7 from '../images/certificate7.jpg'
import ce1 from '../images/certifi1.jpg'
import '../styles/Certificate.Module.css'

function Certificate() {
  return (
    <>
    <div className="container-fluid my-5">
        <div className="text-center fw-bold fs-2">
            <h2>Our Certificates</h2>
        </div>
        <div className="row p-5 gy-2  mx-auto ">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12  d-flex align-items-center justify-content-center">
              <img loading='lazy' className='image' src={c1} alt="certificate1" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <img loading='lazy' className='image-fluid' src={c2} alt="certificate2" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12  d-flex align-items-center justify-content-center">
              <img loading='lazy' className='image-fluid' src={c3} alt="certificate3" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <img loading='lazy' className='image-fluid' src={c4} alt="certificate4" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                <img loading='lazy' className='image-fluid' src={c5} alt="certificate5" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                <img loading='lazy' className='image-fluid' src={c6} alt="certificate6" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                <img loading='lazy' className='image-fluid' src={c7} alt="certificate7" />
                </div>
            </div>
        
    </div>
      
    </>
  )
}

export default Certificate
