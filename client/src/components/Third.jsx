import React from 'react'
import "./Style.css"
import yespic from "./Images/blackyes.svg"
import double from "./Images/double.png"
import mesg from "./Images/message.png"
import protect from "./Images/protect2.png"

function Third() {
  return (
    <>
      <div id='thirdmain'>
        <div className='thirdsub1'></div>

        <div className='thirdsub2'>
          <h1 className='whyus'>Why us ?</h1>

          <div className='thirdcir'>
            <div className="timgdiv"><img className='tci1' src={yespic} /></div>
            <div className='ttextdiv'>
              <p>Quality products</p>
              <p> Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
            </div>
          </div>

          <div className='thirdcir'>
            <div className="timgdiv"><img className='tci1' src={double} /></div>
            <div className='ttextdiv'>
              <p>Multiple Options</p>
              <p> We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application.</p>
            </div>
          </div>

          <div className='thirdcir'>
            <div className="timgdiv"><img className='tci1' src={mesg} /></div>
            <div className='ttextdiv'>
              <p>Experties and support</p>
              <p>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond. </p>
            </div>
          </div>

          <div className='thirdcir'>
            <div className="timgdiv"><img className='tci1' src={protect} /></div>
            <div className='ttextdiv'>
              <p>Durability Assurance</p>
              <p>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
            </div>
          </div>

          <button className='reqbtn'> Request A callback</button>

        </div>
      </div>

    </>
  )
}

export default Third