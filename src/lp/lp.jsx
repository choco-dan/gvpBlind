import { useNavigate } from "react-router-dom"
import vid from './assets/855679-hd_1920_1080_30fps.mp4'
import './lp.css'
import {Link} from 'react-router-dom'
import React, {useRef} from 'react';

function LandingPage(){


    const mailRef = useRef(null);
    const handleEmail = ()=>{
        const mailid = mailRef.current.value;
        if(mailid && mailid.indexOf('@gvpce.ac.in') !== -1){
            alert('Verification Email sent');
        }
        else if(mailid || mailid.indexOf('@gvpce.ac.in') === -1 ){
            alert('Enter valid Domain Mail ID');
        }       
    };

    return(
        <>
        <div className = "lander">
        <video autoplay = "true" muted="true" loop = "true" src={vid} type = 'video/mp4' />
        <div className = "lp-header">
           <span>
            <Link className = "lp-nav"to = "/HomePage">HOME</Link></span>
           <div className = "lp-options">
            <ol>
                <li>
                    <Link className = "lp-navli" to ="/Login">Log in</Link>
                </li>
                <li>
                    <Link className = "lp-navli" to = "/SignupPage">Sign up</Link>
                </li>
            </ol>
           </div>
        </div>
        <section className = "lp-sec"> 
            <h1>gvpBlind</h1>
            <br></br>
            <br></br>
            <p>yaba yaba laba laba do doo</p>
            <br></br><br />
            <label for = "lmai">Enter your email here*</label>
            <div className = "lp-mail">
                <input type = "email" id = "lmai" name ="lmai" ref = {mailRef} />
                <button onClick = {handleEmail}>Verify me!</button>
            </div>
        </section>
        <section className = 'lp-credits'>
            <div>
                <p>
                    icons 
                    ig x in 
                </p>
                &copy;i am the owner of this bitch
            </div>
        </section>
        </div>
        </>
    )
}

export default LandingPage