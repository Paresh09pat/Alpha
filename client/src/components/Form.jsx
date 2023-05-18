import React from 'react'
import "./Style.css"

function Form() {
  return (
    <>
      <div id='mainformdiv'>
        <form>
          <h1>
            Connect with us
          </h1>

          <span>for outstanding protective overlaminates</span>

          <div id='formsub'>
            <div className='fdiv1'>
              <label className='lbl'>First Name</label> <br />
              <input type='text' /><br /><br />
              <label className='lbl'>Email</label><br />
              <input type='email' /><br /><br />
              <label className='lbl'>Company</label><br />
              <input type='text' />
            </div>
            <div className='fdiv1'>
              <label className='lbl'>Last Name</label> <br />
              <input type='text' /><br /><br />
              <label className='lbl'>Contact Number</label><br />
              <input type='number' /><br /><br />
              <label className='lbl'>State</label><br />
              <input type='text' />
            </div>
          </div> <br />

          <lable className='lbl'>How Would You Describe Yourself ?</lable> <br />
          <input type='text' /> <br /><br />

          <lable className='lbl'>Preferred Distributor :</lable> <br />
          <input type='text' /> <br /><br />

          <lable className='lbl'>Additional Information</lable> <br />
          <textarea type="text"></textarea>

          <input style={{width:"10%" , marginLeft:"-8px"}} type='checkbox'></input> <span>I'd like to receive promotions, product information and <span  style={{marginLeft:"40px"}}>service offers from Avery Dennison.</span></span>
<br/><br/>
<button className='subbtn' type='submit'> Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form