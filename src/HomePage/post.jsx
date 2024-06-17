import styles from './homepage.module.css'
import plus from './assets/add.svg'

function Post(){
    return(
        <>
        <div className = {styles.postCont}>
            <img className = {styles.plusicon} src = {plus} alt='post ' />
            <input className = {styles.postin} type = "text" placeholder="Start a post......"></input>
        </div> 
        </>
    )


}
export default Post