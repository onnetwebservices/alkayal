import React from 'react'
import preamble from '../images/preamble.webp'
import '../styles/About.Module.css'
import { aboutdata} from '../data/sdata'
import Accordian from '../components/Accordian'
function About() {
  return (
    <>
    <div className='container py-5 bg-light about'>
      <div className="text-center p-4" data-aos='fade-in'>
        <h1 className='bgText fs-2 fw-bold'>About Us</h1>
      </div>
     
          <div className="row">
      <div className="col-md-10 col-lg-12 col-sm-12 col-12 mx-auto p-3">

      <div className="accordion" id="accordionExample">
{
  aboutdata.map((data,index)=>
  <Accordian key={data.id} id={data.id} title={data.title} desc={data.desc} dataparent={'accordianExample'} show={data.show}></Accordian>
  )
}
</div>


  
        
    </div>    
      </div>
     
       </div>
      
      
    </>
  )
}

export default About
