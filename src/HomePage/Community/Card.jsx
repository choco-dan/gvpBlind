const Card=()=>{
    return(
        <div id={styles.card}>
            <div id={styles.userInfo}>
                <p id={styles.userName}></p>
            </div>
            <div id={styles.messageBox}>
                <p id={styles.message}></p>
            </div>
            <div id={styles.comments}></div>
        </div>
    )
}
export default Card