import React from 'react'
import "./Style.css"
import logoes from "./Images/whitelogo.png"

function Footer() {
  return (
    <>
      <div id='mainfootdiv'>
        <div className='footdiv1'>
          <p>Best solutions from</p>
          <img src={logoes} />
        </div>

        <div className='footdiv1'>
          <p>DOL Max Overlaminate Films</p>
          <p>Why us</p>
          <p>Enquire now</p>
        </div>

        <div className='footdiv1' style={{ fontSize: "12px", color: "rgb(116, 114, 114)" }}>
          <p>Avery Dennison Overlaminate</p>
          <p>Avery Dennison Overlaminate Films </p>
          <p>Avery Dennison Digital Overlaminate Films </p>
          <p>Avery Dennison DOL Max</p>
        </div>

        <div className='footdiv1' style={{ fontSize: "12px", color: "rgb(116, 114, 114)" }}>
          <p>Overlaminate</p>
          <p>Overlaminate Films </p>
          <p>Digital Overlaminate Films</p>
        </div>
      </div>
    </>
  )
}

export default Footer