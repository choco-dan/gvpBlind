import styles from "./Login.module.css";
import { IoEye,IoEyeOff  } from "react-icons/io5";
import { useState,useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

function Login(){
    const [show,setShow]=useState(false);
    const [valid,setValid]=useState(false);
    const [user,setUser]=useState({usermail:"",password:""});
    const navigate=useNavigate();
    const unameInput=useRef(null);
    const pwdInput=useRef(null);
    const result=useRef(null);
    const {setUsermail}= useContext(UserContext);
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
        console.log("user data before post:", user);
        try{
            const response= await axios.post("https://gvpblind.onrender.com/login",user);
       console.log(response);
       if(response.data==="valid user"){
        setUsermail(user.usermail);
        localStorage.setItem('usermail', user.usermail);
        result.current.textContent="";
        navigate("/HomePage",{state:user.usermail});
       }
       else{
        console.log("Invalid username or password");
        result.current.textContent="Invalid username or password";
       }

        }
        catch (error) {
        console.error("Error during login:", error);
        result.current.textContent = "An error occurred. Please try again.";
    }

       
    }
    return(
        <div id={styles["background"]}>
            <div id={styles["outer-box"]}>
                <div id={styles["login-box"]}>
                <div id={styles["login-form"]}>
                    <div id={styles["input-box"]}>
                        <h1 id={styles["heading"]}>Login</h1>
                        <code>/enter your credentials/<br></br>/for demo login use 
                            Domain Mail id: abc@123
                            pass: 123/</code>
                        <p id={styles["username"]}>E-mail</p>
                        <input type="email" placeholder="Domain Mail id" id={styles["uname-input"]} ref={unameInput} 
                        onChange={e=>setUser({...user,usermail:e.target.value})} />
                        <p id={styles["password"]}>Password</p>
                        <div id={styles["password-box"]}>
                        <input type="password" placeholder="password" id={styles["password-input"]} ref={pwdInput}
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
            </div>
            <footer className={styles.authfooter}>
    <div className={styles.footercontent}>
    <div className= {styles.socialicons}>
        <p>
            <a href="https://github.com/danixDe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> danixDe
            </a> |&nbsp;
            <a href="https://www.linkedin.com/in/arvix17" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> AravindB
            </a>
        </p>
        <p>
            <a href="https://github.com/DileepKumarRambarki" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> DileepKumarRambarki
            </a> |&nbsp;
            <a href="https://www.linkedin.com/in/dileepkumarrambarki" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> Dileep Kumar
            </a>
        </p>
        <hr style={{marginTop:'5px',backgroundColor:'black'}}/>
        <p >&copy; 2024 Project by DileepKumar.R & Aravind.B</p>
    </div>
    </div>
</footer>
        </div>
    )
}
export default Login