import React from 'react'
import { NavLink } from 'react-router-dom'
import ServiceSection from '../components/ServiceSection'


function ServiceCard({style,Icon,title,desc,id}) {


  return (
    <>
    
      <div className="col-md-6 col-lg-4 col-sm-12 col-12  p-2 d-flex align-items-center justify-content-center " data-aos='flip-right'> 
      <div className={`card ${style.bgColor ? style.bgColor : 'bg-white'} `} style={{backgroundColor:'#1D3659',height:'200px',width:'300px'}}>
      <div className="card-body">
        
        <Icon className={`${style.iconbg ? style.iconbg : 'bg' } ${style.icontext ? style.icontext : 'text-white'} rounded p-2 mb-2 icon`} size={35} ></Icon>
        <h2 className="card-title text-white">{title}</h2>
        
        <NavLink to={`/service/${id}`} className="btn bgText " style={{backgroundColor:'white'}}>Learn More</NavLink>
      </div>
    </div>
      </div>
    </>
  )
}

export default ServiceCard
