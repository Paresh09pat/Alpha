import React from 'react'
import "./Style.css"
import logoes from "./Images/whitelogo.png"

function Footer() {
  return (
    <>
      <div id='mainfootdiv'>
        <div className='footdiv1  A'>
          <p className='best'>Best solutions from</p>
          <img className='footlogo' src={logoes} />
        </div>

        <div className='footdiv1 AA'>
          <p>DOL Max Overlaminate Films</p>
          <p>Why us</p>
          <p>Enquire now</p>
        </div>

        <div className='footdiv1 AAA' style={{ fontSize: "12px", color: "rgb(116, 114, 114)" }}>
          <p>Avery Dennison Overlaminate</p>
          <p>Avery Dennison Overlaminate Films </p>
          <p>Avery Dennison Digital Overlaminate Films </p>
          <p>Avery Dennison DOL Max</p>
        </div>

        <div className='footdiv1 AAAA' style={{ fontSize: "12px", color: "rgb(116, 114, 114)" }}>
          <p>Overlaminate</p>
          <p>Overlaminate Films </p>
          <p>Digital Overlaminate Films</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
    </>
  )
}

export default Footer