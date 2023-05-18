import React from 'react'
import "./Style.css"

function Form() {

  const handleClick = () => {
    alert("Thank you for connting with us")
  }

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

              <select name="state" id="state">
                <option value="volvo">Select State</option>
                <option value="saab">Maharashtra</option>
                <option value="opel">Gujrat</option>
                <option value="audi">Himachal</option>
              </select>

            </div>
          </div> <br />

          <lable className='lbl'>How Would You Describe Yourself ?</lable> <br />
          <select name="state" id="state">
            <option value="volvo">Describe Yourself</option>
            <option value="saab">Web Developer</option>
            <option value="opel">Installer</option>
            <option value="audi">Data Scientist</option>
          </select> <br /><br />

          <lable className='lbl'>Preferred Distributor :</lable> <br />
          <select name="state" id="state">
            <option value="volvo">Select Distributor</option>
            <option value="saab">Aerotect</option>
            <option value="opel">Hidujas</option>
            <option value="audi">HEL</option>
          </select> <br /><br />

          <lable className='lbl'>Additional Information</lable> <br />
          <textarea type="text"></textarea>

          <input style={{ width: "10%", marginLeft: "-8px" }} type='checkbox'></input> <span className='cbox'>I'd like to receive promotions, product information and <span style={{ marginLeft: "40px" }}>service offers from Avery Dennison.</span></span>
          <br /><br />
          <button className='subbtn' type='submit' onClick={handleClick}> Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form