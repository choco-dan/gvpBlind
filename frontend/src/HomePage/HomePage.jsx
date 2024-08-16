import Card from '../Card/card.jsx'
import styles from './homepage.module.css'
import '../App.css'
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { BottomNavigation } from '@mui/material'
import { UserContext } from '../UserContext.jsx';
import Notification from './Notification.jsx';
function HomePage(){
  const location=useLocation();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
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
  useEffect(()=>{
    if(location.state && location.state.showNotification){
      setShowNotification(true);
    }
  }, [location.state]);

  const navigateToCreatePost = ()=>{
    navigate("/CreatePost", {state:usermail});
  }
  return(
    <>
    <Notification 
      message = 'Post pushed successfully'
      show = {showNotification}
      onClose = {()=> setShowNotification(false)} />
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