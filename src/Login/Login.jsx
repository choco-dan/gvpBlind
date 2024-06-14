import "./Login.css";
import { IoEye,IoEyeOff  } from "react-icons/io5";
import { useState,useRef, useEffect } from "react";
import users from "./Users.json";
function Login(props){
    const [show,setShow]=useState(false);
    const [valid,setValid]=useState(false);
    // const [isValid,setIsvalid]=useState(false);

    const unameInput=useRef(null);
    const pwdInput=useRef(null);
    const showPassword=()=>{
        if(show){
            pwdInput.current.setAttribute("type","password");
        }
        else{
            pwdInput.current.setAttribute("type","text");
        }
        setShow(s=>!s);
    }
    const loginBtn=useRef(null);
    const login=()=>{
        let uname=unameInput.current.value;
        let pwd=pwdInput.current.value;

        const result=document.querySelector("#user-result");
        if(users[uname] && users[uname]===pwd){
            result.textContent="";
            setValid(true);
            props.handleValid(true);

        }
        else{
            result.textContent="Invalid username or password";
            setValid(false);
            props.handleValid(false);
        }
    }

    return(
        <div id="background">
            <div id="outer-box">
                <div id="login-box">
                <div id="login-form">
                    <div id="input-box">
                        <p id="heading">Login</p>
                        <p id="username">Username</p>
                        <input type="text" id="uname-input" ref={unameInput} />
                        <p id="password">Password</p>
                        <div id="password-box">
                        <input type="password" id="password-input" ref={pwdInput}/>
                        <div id="pwd-icon">
                            {show?<IoEye className="icon" onClick={showPassword}/>:<IoEyeOff className="icon" onClick={showPassword}/>}
                        </div>
                        </div>
                        <a href="#" id="forgot-pwd">Forget&nbsp;password?</a>
                    </div>
                    <div id="btn-box">
                        <button id="login-btn" onClick={login} ref={loginBtn} >
                            LOGIN
                        </button>
                        <p id="user-result"></p>
                    </div>
                    <div id="signup-box">
                        <a href="#" id="signup-link">Doesnt have account yet? Sign up</a>
                    </div>
                </div>
                </div>
                <div id="image-box"></div>
            </div>
        </div>
    )
}
export default Login