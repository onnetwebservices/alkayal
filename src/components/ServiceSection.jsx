import React, { useEffect } from 'react'
import {sdata} from '../data/sdata'
import ServiceCard from './ServiceCard'
import Activities from './Activities'
import '../styles/ServiceSection.Module.css'

function ServiceSection() {
 return (
        <div className='container-fluid my-5 bg-light'>
      <div className="text-center p-4" data-aos='fade-in'>
        <h1 className='bgText fw-bold'>Our Services</h1>
      </div>
      < div className="row gy-5 p-3 d-flex align-items-center justify-content-center">
       
        
      {
        sdata.map((data,index)=>
    
        <ServiceCard key={data.id} id={data.id} style={data.style} Icon={data.Iconstyle.Icontitle} title={data.title} desc={data.desc}/>
          )
      }

      </div>
      <div className="col my-5 ">
          <Activities />
      </div>
    </div>
  )
}

export default ServiceSection

