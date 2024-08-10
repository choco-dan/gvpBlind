import styles from './profilepage.module.css'
import userImg from './assets/userimage.png'

function UserProfile(){


    return(
        <>
        <div className = {styles.container}>
            <div className = {styles.profilebody}>
                <div className = {styles.image}>
                <img className = {styles.userimg} src = {userImg} alt = 'userimg' />
                </div>
                <div className = {styles.userdetails}>
                    <p className = {styles.info}>username</p>
                    <p className = {styles.info}>emailid</p>
                    <div className = {styles.infoby}>
                    <p className = {styles.info}>branch</p>
                    <p className = {styles.info}>year</p>
                    </div>
                </div>
            </div>
           
        </div>
       


        </>
    );
}

export default UserProfile