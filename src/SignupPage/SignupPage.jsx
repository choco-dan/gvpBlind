import  styles from"./Signup.module.css";
import { useState,useEffect,useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogActions  from "@mui/material/DialogActions";
import { useNavigate } from "react-router-dom";
function SignupPage(){
    const [validDetails,setValiddetails]=useState(false);
    const [dialogOpen,setDialogopen]=useState(false);
    const [user,setUser]=useState({});
    let navigate=useNavigate();
    //accesing dom using useRef hook
    const unameInput=useRef(null);
    const emailInput=useRef(null);
    const pwdInput=useRef(null);
    const confirmInput=useRef(null);
    const branchInput=useRef(null);
    const yearInput=useRef(null);
    const registerBtn=useRef(null);
    const mailCheck=useRef(null);
    const pwdMatch=useRef(null);

    //addding event listener to register button
    const register=()=>{
        const uname=unameInput.current.value;
        const email=emailInput.current.value;
        const branch=branchInput.current.value;
        const year=yearInput.current.value;
        const pwd=pwdInput.current.value;
        const confirm=confirmInput.current.value;
        email.indexOf("@gvpce.ac.in")==-1?mailCheck.current.textContent="Enter correct domain mail id":mailCheck.current.textContent="";
        pwd!==confirm?pwdMatch.current.textContent="Password didnt matched":pwdMatch.current.textContent="";
        if(uname &&  email.indexOf("@gvpce.ac.in")!==-1 && pwd===confirm){
            setValiddetails(true);
            let userdetail={};
            userdetail["email"]=email;
            userdetail["username"]=uname;
            userdetail["password"]=pwd;
            userdetail["year"]=year;
            userdetail["branch"]=branch;
            setUser(userdetail);
            setDialogopen(true);
        }
        else{
            setValiddetails(false);
        }
    }
    // adding functions to dialog box
    const handleOpen=()=>{
        setDialogopen(true);
    }
    const handleClose=()=>{
        setDialogopen(false);
    }
    const navigateDialog=()=>{
        navigate("/HomePage");
    }

    return(
        <div id={styles.container}>
            <br></br>
               <h1 id={styles["heading"]}>Sign up</h1>
               <br></br>
            <div id={styles["signup-box"]}>
                <code>/fill up this form to register/</code>
             
                <div id={styles["uname-box"]}>
                    <p id={styles["uname"]}>Username</p>
                    <input type="text" id={styles["uname-input"]} ref={unameInput}/>
                </div>
                <div id={styles["email-box"]}>
                    <p id={styles["email"]}>Email-id</p>
                    <input type="email" id={styles["email-input"]} placeholder="Enter domain mail id" ref={emailInput}/>
                    <p id={styles["mail-check"]} ref={mailCheck}></p>
                </div>
                <div id={styles["acadamic-box"]}>
                    <div id={styles["branch-box"]}>
                        <p id={styles["branch"]}>Branch</p>
                        <select name="" id={styles["branch-input"]} ref={branchInput}>
                            <option value="cse">CSE</option>
                            <option value="ece">ECE</option>
                            <option value="eee">EEE</option>
                            <option value="mech">MECH</option>
                            <option value="civil">CIVIL</option>
                            <option value="chem">CHEMICAL</option>
                        </select>
                    </div>
                    <div id={styles["year-box"]}>
                        <p id={styles["year"]}>Year</p>
                        <select name="" id={styles["year-input"]} ref={yearInput}>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                        </select>
                    </div>
                </div>
                <div id={styles["pwd-box"]}>
                    <p id={styles["pwd"]}>Create Password</p>
                    <input type="password" id={styles["pwd-input"]} ref={pwdInput} />
                </div>
                <div id={styles["confirm-box"]}>
                    <p id={styles["confirm-pwd"]}>Confirm Password</p>
                    <input type="password" id={styles["confirm-input"]} ref={confirmInput} />
                    <p id={styles["pwd-match"]} ref={pwdMatch}></p>
                </div>
                <div id={styles["btn-box"]}>
                    <button id={styles["register-btn"]} ref={registerBtn} onClick={register}>Register</button>
                </div>
            </div>
            <Dialog open={dialogOpen} onClose={handleClose} id={styles["dialog-box"]}>
                <DialogTitle id={styles["dialog-title"]}>
                    {`welcome ${user["username"]}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your account succesfully created<br/>
                        Click on continue to start gvpBlind
                    </DialogContentText>
                    <DialogActions>
                        <button onClick={navigateDialog}>Continue</button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default SignupPage