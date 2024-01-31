import React from 'react'
import home from '../images/home.jpeg'

function ProjectCard({title}) {
  return (
    <>
    
      <div className="grid" data-aos='flip-up'>
    <div className="cards p-3" style={{height:'250px' ,}} >
            <img  className=" gray  " src={home} alt="project image" />
            <div className="cards-body slide-right">
                <h2 className="text-center">{title}</h2>
                
                <a href="/projects" className="btn btn-danger">View Photos</a>
            </div>
       </div>
       </div>
    
      
    </>
  )
}

export default ProjectCard
