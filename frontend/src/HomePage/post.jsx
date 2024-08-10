import styles from './homepage.module.css'
import plus from './assets/add.svg';
import tick from "./assets/tick.svg";
import {Link} from 'react-router-dom'
import { useState,useRef, useEffect } from 'react'
import axios from 'axios';
import {useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Post(props){
  const location=useLocation();
  const usermail=location.state || {};
  const navigate=useNavigate();
    console.log("user a",usermail);
    const [icon,setIcon]=useState(plus);  
    const postData=()=>{
        navigate('/CreatePost',{state:usermail})
    }
    return(
        <>
         <div className = {styles.postCont} >
            <img 
            className = {styles.plusicon} 
            src = {icon} alt='post '
            onClick={postData} 
            />

        </div> 
        </>
    )


}
export default Post