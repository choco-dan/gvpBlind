import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './cp.module.css'

const CommunityPage = () => {
  /*const { name } = useParams();
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    fetch(`/api/community/${name}`)
      .then(response => response.json())
      .then(data => setCommunityData(data));
  }, [name]);

  if (!communityData) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className = {styles.CommunityPage}>
      <h1>Welcome to the  community</h1>
      <p>This is a community b1tch and you can fuck offf!!!!!!!!!</p>
    </div>
  );
};

export default CommunityPage;
