import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './cp.module.css'
import axios from 'axios';
import Card from "../Card/card.jsx";
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import InViewComponent from '../InViewComponent.jsx';
const CommunityPage = () => {
  const community=useParams().name.toLowerCase();
  const [communityData, setCommunityData] = useState(null);

  const getPost=async()=>{
    const response=await axios.get(`https://gvpblind.onrender.com/community/${community}`);
    setCommunityData(response.data);
    console.log(response);
  }
    const deletePost=async (id)=>{
        console.log("deleting post");
        try{
          const deleteres=await axios.delete(`https://gvpblind.onrender.com/post/delete/${id}`);
        console.log(deleteres);
        getPost();
        }
        catch(err){
          console.log("error in community page",err);
        }
    }
    
    const likePost=async(id)=>{
      console.log("likePost");
      const likedpost=await axios.put(`https://gvpblind.onrender.com/post/likes/${id}`);
      getPost();
      console.log(likedpost);
    }

  useEffect(()=>{
    getPost();
  },[community]);
  if (!communityData) {
    return <div>Loading...</div>;
  }
  const postVariants = {
    hidden: {opacity: 0, y: 0},
    visible: {opacity: 1, y:0},

  };
  return (
    <div className={styles.container}>
    <motion.div className = {styles.CommunityPage}
      initial = {{opacity: 0}}
      animate = {{opacity:1}}
      exit = {{opacity:0}}
      transition = {{duration:0.3, transition:'easeInOut'}}
      >
      <div className = {styles.commtitle}>
      <h1>#{community.toUpperCase()}</h1>
      </div>
      <div className= {styles.commdesc}>
      <p>Community description needed to be added from database</p>
      </div>
    </motion.div>
      <div id={styles.cardBox}>
        {
          communityData.map((post,index)=>{
              return(
                <InViewComponent key={index} variants={postVariants} index={index}>

                <Card
                  key={index}
                  postid={post._id}
                  community={community}
                  username={post.username}
                  time={post.timespan}
                  branch={post.branch}
                  year={post.year}
                  para={post.post}
                  title={post.title}
                  likes={post.likes}
                  deletePost={deletePost}
                  likePost={likePost}
                />
                </InViewComponent>
              )
          })
        }
      </div>
    </div>
  );
};

export default CommunityPage;
