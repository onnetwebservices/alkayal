import React from 'react'
import '../styles/Watsapp.Module.css'
import { FaWhatsapp } from 'react-icons/fa6'

function Watsapp() {
  return (
    <div className="container ">
        <div className='watsapp-btn ' >
            <a className='d-flex justify-content-center align-items-center'title='watsapp' href='https://wa.me/971506879192?text=Hello How can i help you?' target='_blank'>
          <FaWhatsapp />
          </a>
        </div>
      
    </div>
  )
}

export default Watsapp
