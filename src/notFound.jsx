import {Link} from "react-router-dom";
const notFoundStyle = {
    color: 'black',
    backgroundColor: 'whitesmoke',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    verticalAlign: 'middle',
    marginTop: '48vh',
};
const NotFound = () =>{
    return(
        <div style = {notFoundStyle} >
            <h1> 404 Page not Found</h1>
            <br></br>
            <Link to = "/">GO HOME</Link>
        </div>
    );
};

export default NotFound