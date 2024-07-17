import styles from './homepage.module.css'
import plus from './assets/add.svg'
import { useState } from 'react'
import axios from 'axios';
function Post(props){
    const [post,setPost]=useState("");
    const postData=async()=>{
        const data={post:post,user:props.user};
        const response=await axios.post("http://localhost:3000/userpost",data);
    }
    return(
        <>
        <div className = {styles.postCont}>
            <img 
            className = {styles.plusicon} 
            src = {plus} alt='post '
            onClick={postData} 
            />

            <input 
            className = {styles.postin} 
            type = "text" 
            placeholder="Start a post......" 
            onChange={(e)=>setPost(e.target.value)}
            ></input>
        </div> 
        </>
    )


}
export default Post