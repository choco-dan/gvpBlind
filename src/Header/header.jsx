import React, { useState, useRef} from 'react';
import styles from './header.module.css';
import logo from './assets/user.svg';
import post from './assets/script.svg';
import dots from './assets/menu-dots.svg';

function Header() {
    const profileMenu = ['PROFILE','SETTINGS','LOGOUT'];
    const postMenu = ['POSTS','LIKES','COMMENTS'];
    const dotsMenu = ['ABOUT','POLICY','LICENSE'];
    const [openProfile, setOpenProfile] = useState(false);
    const [openPost, setOpenPost] = useState(false);
    const[openDots, setOpenDots] = useState(false);

   const profileMenuRef = useRef();
   const profileRef = useRef();
   const postMenuRef = useRef();
   const postRef = useRef();
   const dotsMenuRef = useRef();
   const dotsRef = useRef();

   window.addEventListener('click', (e)=>{
   if(e.target !== profileMenuRef.current && e.target !== profileRef.current){
        setOpenProfile(false);
    }})
    window.addEventListener('click',(e)=>{
         if(e.target !== postMenuRef.current && e.target !== postRef.current){
            setOpenPost(false);
        }})
    window.addEventListener('click',(e)=>{
        if(e.target !== dotsMenuRef.current && e.target !== dotsRef.current){
            setOpenDots(false);
        }
    })
    

    return (
        <>
        <div className={styles.x}>
            <div className={styles.name}>Blinder</div>
            <div className={styles.options}>
                    <div
                    className={styles.button}
                     onClick={() => { setOpenProfile(!openProfile);}}>
                        <img  ref = {profileRef}
                         className={styles.usericon} src={logo} alt='user' />
                    </div>
                    <div 
                     className={styles.button}
                      onClick = {()=>{setOpenPost(!openPost);}}>
                        <img ref = {postRef}
                        className={styles.post} src={post} alt='post' />
                    </div>              
                    <div
                     className={styles.button}
                      onClick = {()=>{setOpenDots(!openDots);}}>
                        <img ref = {dotsRef}
                        className={styles.dots} src={dots} alt='about' />
                    </div>     
                </div>
            </div>
        
        {openProfile && (
                     <div ref = {profileMenuRef}
                     className = {styles.dropdownprofile}>
                     <ul>
                         {profileMenu.map((menu,index)=>(
                             <li onClick={()=>setOpenProfile(false)}
                               className = {styles.dropdownitem} key={index}>
                                 {menu}      
                             </li>
                         ))}
                     </ul>
                     </div> 

                )};
        {openPost && (
                    <div ref = {postMenuRef}
                     className = {styles.dropdownpost}>
                    <ul>
                        {postMenu.map((menu,index)=>(
                            <li onClick = {()=>setOpenPost(false)}
                             className= {styles.dropdownitem} key = {index}>
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
                )};
        {openDots && (
                    <div ref = {dotsMenuRef}
                     className = {styles.dropdowndots}>
                    <ul>
                        {dotsMenu.map((menu,index)=>(
                            <li onClick={()=>setOpenDots(false)}
                            className = {styles.dropdownitem}
                            key = {index}>
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
                )};
        </>
    );   
}

export default Header;
