import { useNavigate } from "react-router-dom"
import vid from './assets/855679-hd_1920_1080_30fps.mp4'
import './lp.css'
function LandingPage(){
        const navigate = useNavigate();
    return(
        <>
        <video autoplay = "true" muted="true" loop = "true" src={vid} type = 'video/mp4' />
        <div className = "lp-header">
           <span>HOME</span>
           <div className = "lp-options">
            <ol>
                <li>Log in</li>
                <li>Sign up</li>
            </ol>
           </div>
        </div>
        <seciton className = "lp-sec"> 
            <h1>gvpBlind</h1>
            <br></br>
            <br></br>
            <p>yaba yaba laba laba do doo</p>
            <br></br><br />
            <label for = "lmai">Enter your email here*</label>
            <div className = "lp-mail">
                <input type = "email" id = "lmai" name ="lmai" />
                <button>Notify me!</button>
            </div>
        </seciton>
        <section className = 'lp-credits'>
            <div>
                <p>
                    icons 
                    ig x in 
                </p>
                &copy;i am the owner of this bitch
            </div>
        </section>
        </>

    )
}

export default LandingPage