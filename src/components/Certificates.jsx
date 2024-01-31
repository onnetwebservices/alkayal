import React, { useState } from 'react'
import { Document,Page,pdfjs } from 'react-pdf'
import alkayalpdf from '../alkayal.pdf'
import '../styles/Certificate.Module.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

//pdfjsLib.GlobalWorkerOptions.workerSrc = '../node_modules/pdfjs-dist/build/pdf.worker.js';
//pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;


function Certificates() {
    const [numPages,setNumPages]=useState()
    const [pageNumber,setPageNumber]=useState(1)
    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages)
    }
  return (
    <>
      <div className="container-fluid my-5" >
        <div className="text-center text-primary">
            <h2 >Certificates</h2>
        </div>
        
      <div className="row"
      
      >
        <div className="col-md-12 col-sm-12 col-lg-6 mb-5" style={{padding:'50px',backgroundColor:'gray'}}>
        <Document file={alkayalpdf} onLoadSuccess={onDocumentLoadSuccess} >
            {
                Array.apply(null,Array(numPages))
                .map((x,i)=>i+1)
                .map((page)=>(
                    
                        
        

                    <Page 
                     
                       pageNumber={page} renderAnnotationLayer={false} renderTextLayer={false}
                    size={10}
                    />
                    
                    
                ))
            }
            
        </Document>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default Certificates
