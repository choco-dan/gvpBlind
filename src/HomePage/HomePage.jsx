import Sidebar from '../sidebar/sidebar.jsx'
import Header from '../Header/header.jsx'
import Post from './post.jsx'
import Card from '../Card/card.jsx'
import '../App.css'
function HomePage(){

  return(
    <>
    <Post />
  
    <div className = 'post-box'>
      <Card community ="community"
        time = "time"
        branch = "cse"
        username = "arvix17" 
        title = "title"
        para = "yap yap yap yap i be yapping a lot with a yapper like a yapmaster7000   yap yap yap this post has to be an yap yappy yappy yapya me when i yappily yappend to yap yap yap"/>
      <Card community = "community2"
            time = "11h"
            branch = "chocolate-factory"
            username = "dileep"
            title = "doing chocolate"
            para = "fuckity fuckity fuckity fuck" />
     
    </div>
    </>
  );
}
export default HomePage