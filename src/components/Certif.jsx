import React from 'react'
import pdf from '../assets/alkayalcertificate.pdf'

function Certif() {
     
  return (
    <div className='container-fluid my-5 bg-light my-5'>
      <div className="text-center p-4" data-aos='fade-in'>
        <h1 className='bgText fw-bold'>Certificates</h1>
      </div>
    <div className='col-lg-11 col-md-11 col-sm-11 mx-auto ' style={{height:'85vh'}} >
      <embed src={`${pdf}#toolbar=0`} width='100%' height='100%' type='application/pdf'  />
    </div>
    </div>
  )
}

export default Certif
