import React from 'react'
import { projectdata } from '../data/sdata'
import ProjectCard from './ProjectCard'
import '../styles/Projects.Module.css'

function Projects() {
  return (
    <>
    <div className="container-fluid my-5 " >
        <div className="text-center bgText p-3 " data-aos='fade-in'>
            <h1 className='fw-bold fs-2'>Our Projects</h1>
        </div>
        < div className="row  ">
         <div className="col-11 d-flex mx-auto flex-wrap  justify-content-evenly ">
           {
            projectdata.map((data)=>(
                <ProjectCard  key={data.id} title={data.title}/>

            )

            )
           } 
            
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Projects

