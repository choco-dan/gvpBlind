import Sidebar from '../sidebar/sidebar.jsx'
import Header from '../Header/header.jsx'
import Post from './post.jsx'
import Card from '../Card/card.jsx'
import '../App.css'
import {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';
function HomePage(){
  const location=useLocation();
  const usermail=location.state || {};
  const [feed,setFeed]=useState([]);
  const getFeed=async()=>{
    const feedresponse=await axios.post("http://localhost:3000/feed",{usermail:usermail});
    console.log(feedresponse.data);
    setFeed(feedresponse.data);
  }
  useEffect(()=>{
    getFeed();
  },[]);
  return(
    <>
    <Header />
    <Sidebar />
    <Post usermail={usermail}/>  
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