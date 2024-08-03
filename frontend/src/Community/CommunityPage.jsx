import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './cp.module.css'
import axios from 'axios';
import Card from "../Card/card.jsx";
const CommunityPage = () => {
  const community=useParams().name.toLowerCase();
  const [communityData, setCommunityData] = useState(null);

  const getPost=async()=>{
    const response=await axios.get(`http://localhost:3000/community/${community}`);
    setCommunityData(response.data);
    console.log(response);
  }
  useEffect(()=>{
    getPost();
  },[community]);
  if (!communityData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
    <div className = {styles.CommunityPage}>
      <div className = {styles.commtitle}>
      <h1>#{community.toUpperCase()}</h1>
      </div>
      <div className= {styles.commdesc}>
      <p>Community description needed to be added from database</p>
      </div>
     
    </div>
      <div id={styles.cardBox}>
        {
          communityData.map((post,index)=>{
              return(
                <Card
                  id={styles.card}
                  key={index}
                  community={community}
                  username={post.username}
                  time="0"
                  branch={post.branch}
                  year={post.year}
                  para={post.post}
                  title="title"
                />
              )
          })
        }
      </div>
    </div>
  );
};

export default CommunityPage;
