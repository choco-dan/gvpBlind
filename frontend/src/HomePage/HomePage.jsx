import Card from '../Card/card.jsx'
import styles from './homepage.module.css'
import '../App.css'
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../UserContext.jsx';
import Notification from './Notification.jsx';
import InViewComponent from '../InViewComponent.jsx';

function HomePage(){

  const location=useLocation();
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const {usermail, setUsermail}= useContext(UserContext);

  const [feed,setFeed]=useState([]);

  const getFeed=async()=>{
    const feedresponse=await axios.post("http://localhost:3000/feed",{usermail:usermail});
    console.log(feedresponse.data);
    setFeed(feedresponse.data);
  }
  //usermail carry to homepage
  useEffect(()=>{
    const storedUsermail = localStorage.getItem('usermail');
    if(storedUsermail){
      setUsermail(storedUsermail);
    }
    getFeed();
  },[usermail, setUsermail]);
  //Post notification
  useEffect(()=>{
    if(location.state && location.state.showNotification){
      setShowNotification(true);
      const timer = setTimeout(()=>{
        setShowNotification(false);
        navigate(location.pathname, {replace:true, state:{}})
      }, 2000);
      return () =>clearTimeout(timer);
    }
  }, [location.state]);

  const navigateToCreatePost = ()=>{
    navigate("/CreatePost", {state:usermail});
  }

  const postVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y:0},

  };

  return(
    <>
    <Notification 
      message = 'Post pushed successfully'
      show = {showNotification}
      onClose = {()=> setShowNotification(false)} />
      <div onClick = {navigateToCreatePost} className = {styles.postbtn}>
        Create a Post
       </div>
    <div className = 'post-box'>
      {
        feed.map((post,index)=>{
          return(
            <InViewComponent key = {index} variants = {postVariants} index = {index}>
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
            </InViewComponent>
          )
        })
      }
    </div>
    </>
  );
}
export default HomePage