import styles from './homepage.module.css'
import plus from './assets/add.svg';
import tick from "./assets/tick.svg";
import {Link} from 'react-router-dom'
import { useState,useRef, useEffect } from 'react'
import axios from 'axios';
function Post(props){
    const [post,setPost]=useState("");
    const [icon,setIcon]=useState(plus);
    const [usermail,setUsermail]=useState(props.usermail);

    const postInput=useRef(null);
    useEffect(()=>{
        if(props.usermail){
            setUsermail(props.usermail);
        }
        console.log("user",usermail );
        
    },[props.usermail])
    const getCommunity = (post) => {
        let communities=[];
        if (post) {
            const regex = /#[^\s#]+/g;
            let match;
            while ((match = regex.exec(post)) !== null) {
                 
                communities.push(match[0].substring(1))
            }
        }
        return communities;
    };
    
    const postData=async()=>{
       if(post){
        const data={post:post,usermail:usermail,communities:getCommunity(post)};
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
        <Link className = {styles.postCont}
                to = '/CreatePost'>
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
        </Link> 
        </>
    )


}
export default Post