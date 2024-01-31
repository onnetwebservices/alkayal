import React from 'react'
import '../styles/Accordian.Module.css'

function Accordian({title,id,desc,dataparent,show}) {
  return (
    <>
      <div className="accordion-item bg-light ">
    <h2 className="accordion-header " >
      <button className="accordion-button  text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
        {title}
      </button>
    </h2>
    <div id={id} className={`accordion-collapse collapse ${show?'show': null} `} data-bs-parent={`#${dataparent}`}>
      <div className="accordion-body">
        <p><strong>{desc}</strong></p>
      </div>
    </div>
  </div>
    </>
  )
}

export default Accordian
