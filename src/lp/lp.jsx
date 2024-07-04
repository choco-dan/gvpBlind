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
            <ul>
                <li>
                    <Link className = "lp-navli" to ="/Login">LOGIN</Link>
                </li>
                <li>
                    <Link className = "lp-navli" to = "/SignupPage">SIGN UP</Link>
                </li>
            </ul>
           </div>
        </div>
        <section className = "lp-sec"> 
            <h1>Blinder</h1>
            <br></br>
            <br></br>
            <div className = "lp-desc">
                <h3>Welcome to GVP Blinder Community Hub</h3>
                <br></br>
                <p>
                Stay connected with your peers and engage in meaningful discussions
                on GVP Blinder Community Hub! This exclusive platform is designed for students of
                GVP to share experiences, exchange ideas, and collaborate on projects.
                Access is restricted to members with a valid college domain email, ensuring a safe and 
                private environment for our community.</p>

            </div>
            
            <br></br><br></br>
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
                    ig x in links social media 
                </p>
                &copy;i am the owner 
            </div>
            <hr></hr>
        </section>
        </div>
        </>
    )
}

export default LandingPage