import React from 'react'
import { Document, Page,pdfjs } from 'react-pdf';
import alkayalpdf from '../alkayal.pdf'

function Certif() {
     
  return (
    <div className='container-fluid my-5 bg-light my-5'>
      <div className="text-center p-4" data-aos='fade-in'>
        <h1 className='bgText fw-bold'>Certificates</h1>
      </div>
    <div className='col-lg-11 col-md-11 col-sm-11 mx-auto' style={{height:'80vh'}} >
      <embed src='../alkayal.pdf#toolbar=0' width='100%' height='100%' />
    </div>
    </div>
  )
}

export default Certif
