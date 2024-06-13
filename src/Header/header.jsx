import styles from './header.module.css';
import logo from "./assets/user.svg";
import post from './assets/script.svg';
import dots from "./assets/menu-dots.svg"

function Header(){
    
    return(
        <>
        <div className = {styles.x}>
            
            <div className={styles.name}>
                gvpBlind
            </div>
            <div className = {styles.options}>
                <button className = {styles.button}>
                <img className = {styles.usericon} src ={logo} alt = 'user' />
                </button>
                <button className = {styles.button}>
                    <img className = {styles.post} src={post} alt = 'post' />
                </button>
                <button className = {styles.button}>
                    <img className = {styles.dots} src = {dots} alt = 'about' />
                </button>
            </div>
        </div>
        </>
    )
}
export default Header