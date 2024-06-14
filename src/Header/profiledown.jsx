import React from 'react'
import './dropdown.css'

function Profiledown(){
    return(
        <div className = 'profiledownbox'>
            <ul className = 'profileul'>
                <li>Profile</li>
                <li id="settings">&nbsp;Settings&nbsp;</li>
                
                <li>Logout</li>
            </ul>
        </div>
    );
}

export default Profiledown