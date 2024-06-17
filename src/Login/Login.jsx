import styles from "./Login.module.css";
import { IoEye,IoEyeOff  } from "react-icons/io5";
import { useState,useRef } from "react";
import users from "./assets/Users.json"
import { useNavigate } from "react-router-dom";
function Login(){
    const [show,setShow]=useState(false);
    const [valid,setValid]=useState(false);
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
    const login=()=>{
        let uname=unameInput.current.value;
        let pwd=pwdInput.current.value;
        if(users[uname] && users[uname]===pwd){
            result.current.textContent="";
            navigate("/HomePage");
            console.log("valid user");
            setValid(true);
        }
        else{
            console.log("Invalid username or password");
            result.current.textContent="Invalid username or password";
            setValid(false);
        }
    }
    return(
        <div id={styles["background"]}>
            <div id={styles["outer-box"]}>
                <div id={styles["login-box"]}>
                <div id={styles["login-form"]}>
                    <div id={styles["input-box"]}>
                        <p id={styles["heading"]}>Login</p>
                        <p id={styles["username"]}>Username</p>
                        <input type="text" id={styles["uname-input"]} ref={unameInput} />
                        <p id={styles["password"]}>Password</p>
                        <div id={styles["password-box"]}>
                        <input type="password" id={styles["password-input"]} ref={pwdInput}/>
                        <div id={styles["pwd-icon"]}>
                            {show?<IoEye className={styles.icon} onClick={showPassword}/>:<IoEyeOff className={styles.icon} onClick={showPassword}/>}
                        </div>
                        </div>
                        <a href="#" id={styles["forgot-pwd"]}>Forget Password</a>
                    </div>
                    <div id={styles["btn-box"]}>
                        <button id={styles["login-btn"]} onClick={login} ref={loginBtn}>
                            LOGIN
                        </button>
                        <p id={styles["user-result"]} ref={result}></p>
                    </div>
                    <div id={styles["signup-box"]}>
                        <a href="/SignupPage" id={styles["signup-link"]}>Doesnt have account yet? Sign up</a>
                    </div>
                </div>
                </div>
                <div id={styles["image-box"]}></div>
            </div>
        </div>
    )
}
export default Login