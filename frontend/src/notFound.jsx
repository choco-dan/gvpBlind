import {Link} from "react-router-dom";
import React, {useEffect} from 'react';
const notFoundStyle = {
    color: 'black',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    verticalAlign: 'middle',
    marginTop: '45vh',
};
const NotFound = ({setIsNotFound}) =>{
    useEffect (()=>{
        setIsNotFound(true);

        return()=>setIsNotFound(false);

    },[setIsNotFound]);
    return(
        <div style = {notFoundStyle} >
            <h1> 404 Page not Found</h1>
            <br></br>
            <Link to = "/HomePage">GO HOME</Link>
        </div>
    );
};

export default NotFound