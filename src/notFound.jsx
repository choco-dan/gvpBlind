import {Link} from "react-router-dom"

const notFound = () =>{
    return(
        <div>
            <h1>Page not Found</h1>
            <Link to = "/">GO HOME</Link>
        </div>
    );
};

export default notFound