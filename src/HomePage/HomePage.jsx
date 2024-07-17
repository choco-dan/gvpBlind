import Sidebar from '../sidebar/sidebar.jsx'
import Header from '../Header/header.jsx'
import Post from './post.jsx'
import '../App.css'
import {useLocation} from "react-router-dom";
function HomePage(){
  const location=useLocation();
  const user=location.state || {};
  return(
    <>
    <Header />
    <Sidebar />
    <Post user={user}/>
    </>
  );
}
export default HomePage