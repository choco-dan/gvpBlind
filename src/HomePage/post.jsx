import styles from './homepage.module.css'
import plus from './assets/add.svg';
import tick from "./assets/tick.svg";
import { useState,useRef } from 'react'
import axios from 'axios';
function Post(props){
    const [post,setPost]=useState("");
    const [icon,setIcon]=useState(plus);
    const postInput=useRef(null);
    const community=()=>{
        if(post){
            let low=0;
            let str=post.substring(low);
            if(str.indexOf('#')!==-1)
            {
                let a=str.substring(str.indexOf('#'));
                let b=a.substring(1,a.indexOf(" "));
                low=a.indexOf(" ");
            }
        }
    }
    const postData=async()=>{
       if(post){
        const data={post:post,user:props.user};
        setIcon(tick);
        postInput.current.value="";
        await axios.post("http://localhost:3000/userpost",data);
       }
       else{
        postInput.current.value="Enter something to post";
       }
    }
    return(
        <>
        <div className = {styles.postCont}>
            <img 
            className = {styles.plusicon} 
            src = {icon} alt='post '
            onClick={postData} 
            />

            <input 
            className = {styles.postin} 
            type = "text" 
            placeholder="Start a post......" 
            onChange={(e)=>{setPost(e.target.value);
            setIcon(plus)}}
            ref={postInput}
            ></input>
        </div> 
        </>
    )


}
export default Post