import HomePage from './HomePage/HomePage.jsx';
import Login from "./Login/Login.jsx";
import { useState } from 'react';
import users from "./Login/Users.json";

import './App.css'
function App(){
  const [isValid,setIsvalid]=useState(false);
  const handleValid=(valid)=>{
    setIsvalid(valid);
  }
  return(

    <>
        {isValid?<HomePage/>:<Login handleValid={handleValid}/>}
    </>
    

  
  );
}
export default App