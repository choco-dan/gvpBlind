import styles from "./Login.module.css";
import { IoEye,IoEyeOff  } from "react-icons/io5";
import { useState,useRef } from "react";
import users from "./assets/Users.json"
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login(){
    const [show,setShow]=useState(false);
    const [valid,setValid]=useState(false);
    const [user,setUser]=useState({username:"",password:""});
    const navigate=useNavigate();
    const unameInput=useRef(null);
    const pwdInput=useRef(null);
    const result=useRef(null);
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
    
    const postUser=async ()=>{
       const response= await axios.post("http://localhost:3000/login",user);
       if(response.data==="success"){
        result.current.textContent="";
        navigate("/HomePage");
       }
       else{
        console.log("Invalid username or password");
        result.current.textContent="Invalid username or password";
       }
    }
    return(
        <div id={styles["background"]}>
            <div id={styles["outer-box"]}>
                <div id={styles["login-box"]}>
                <div id={styles["login-form"]}>
                    <div id={styles["input-box"]}>
                        <h1 id={styles["heading"]}>Login</h1>
                        <code>/enter your credentials/</code>
                        <p id={styles["username"]}>Username</p>
                        <input type="text" id={styles["uname-input"]} ref={unameInput} 
                        onChange={e=>setUser({...user,username:e.target.value})} />
                        <p id={styles["password"]}>Password</p>
                        <div id={styles["password-box"]}>
                        <input type="password" id={styles["password-input"]} ref={pwdInput}
                        onChange={e=>setUser({...user,password:e.target.value})}/>
                        <div id={styles["pwd-icon"]}>
                            {show?<IoEye className={styles.icon} onClick={showPassword}/>:<IoEyeOff className={styles.icon} onClick={showPassword}/>}
                        </div>
                        </div>
                        <a href="#" id={styles["forgot-pwd"]}>Forget Password?</a>
                    </div>
                    <div id={styles["btn-box"]}>
                        <button id={styles["login-btn"]} onClick={postUser} ref={loginBtn}>
                            LOGIN
                        </button>
                        <p id={styles["user-result"]} ref={result}></p>
                    </div>
                    <div id={styles["signup-box"]}>
                        <a href="/SignupPage" id={styles["signup-link"]}>Doesn't have an account yet? Sign up</a>
                    </div>
                </div>
                </div>
                <div id={styles["image-box"]}></div>
            </div>
        </div>
    )
}
export default Login