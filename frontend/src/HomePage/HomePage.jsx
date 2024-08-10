import Card from '../Card/card.jsx'
import styles from './homepage.module.css'
import '../App.css'
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { BottomNavigation } from '@mui/material'
import { UserContext } from '../UserContext.jsx';
function HomePage(){
  const location=useLocation();
  const navigate = useNavigate();
  const {usermail}= useContext(UserContext);
  console.log("homepage usermail", usermail);
  const [feed,setFeed]=useState([]);
  const getFeed=async()=>{
    const feedresponse=await axios.post("http://localhost:3000/feed",{usermail:usermail});
    console.log(feedresponse.data);
    setFeed(feedresponse.data);
  }
  useEffect(()=>{
    getFeed();
  },[]);

  const navigateToCreatePost = ()=>{
    navigate("/CreatePost", {state:usermail});
  }
  return(
    <>
    <button onClick = {navigateToCreatePost} className = {styles.postCont}>create a post</button>
    <div className = 'post-box'>
      {
        feed.map((post,index)=>{
          return(
            <Card
                  // id={styles.card}
                  key={index}
                  // community={community}
                  username={post.username}
                  time={post.timespan}
                  branch={post.branch}
                  year={post.year}
                  para={post.post}
                  title={post.title}
                />
          )
        })
      }
     
    </div>
    </>
  );
}
export default HomePage