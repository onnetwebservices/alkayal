import React from 'react'
import home from '../images/home.jpeg'
import { sdata } from '../data/sdata'
import { NavLink } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom'

function CommonService() {

    const param=useParams();
    
    const servicedata=sdata.find((data,index)=>data.id===param.id)
  return (
    <>
    <div className="container-fluid my-5">
        <div className="text-center bgText">
            <h2 className='fw-bold fs-2'>{servicedata.title}</h2>
        </div>
        <div className="row p-5 mx-auto">
            <div className="col-lg-6 col-md-6 col-sm-12 p-3 order-lg-1 order-2">
             <p className='bgText'>
              {servicedata.desc}
            </p> 
           <NavLink to='/projects'> 
            <button type='button' className=' btn text-white' style={{backgroundColor:'#1D3659'}}>Our Projects</button>
           </NavLink>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-3 order-lg-2 order-1" >
             <img loading='lazy' className='img-fluid' src={home} alt=" service image"  style={{width:'100%'}}/>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default CommonService
