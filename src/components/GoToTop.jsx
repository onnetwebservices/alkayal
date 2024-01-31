import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import '../styles/GoToTop.Module.css'

function GoToTop() {
    const [isVisible,setVisible]=useState(false);
    useEffect(()=>{
     window.addEventListener('scroll',listenToScroll);
     return()=>window.removeEventListener('scroll',listenToScroll);
    },[])

    const listenToScroll=()=>{
        let heightHidden=250;
        const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll>heightHidden){
         setVisible(true);
        }else{
            setVisible(false);
        }
    }
    const goToBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center">
        {
            isVisible && (
                <div className='top-btn' onClick={goToBtn}>
                <FaArrowUp  className='top-btn-icon'/>
               </div>

            )
        }
   
    </div>
    </>
  )
}

export default GoToTop
