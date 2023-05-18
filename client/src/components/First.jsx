import React from 'react'
import "./Style.css"
import logo from "./Images/logo.png"
import yes from "./Images/yesclick.png"
import protect from "./Images/protectlogo.png"
import mobile from "./Images/mobile.png"


function First() {
    return (
        <>
            <div id='firstmain'>

                <img className='logoimage' src={logo} />
                <h1 className='headtext'>
                    Take your graphics protection <br /> to the next level with DOL <br /> Max overlaminates
                </h1>
                <p className='textnormal'>
                    Pair with MIP 1105 wrapping film <br /> for ramped up protection
                </p>
                
                <div id='imgmaindiv'>
                    <div className='cirimgdiv'>
                        <div className='imgdiv'><img className='yesimg' src={yes} /></div>
                        <div className='imdtext'> Maximum  <br /> Durability</div>
                    </div>
                    <div className='cirimgdiv'>
                        <div className='imgdiv'><img className='yesimg' src={protect} /></div>
                        <div className='imdtext'> Enhanced  <br /> Appearance</div>
                    </div>
                    <div className='cirimgdiv'>
                        <div className='imgdiv'><img className='yesimg' src={mobile} /></div>
                        <div className='imdtext'> High Gloss  <br /> Finish</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default First