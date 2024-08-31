import styles from './card.module.css';
import userImg from './assets/userimage.png';
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import axios from "axios";

function Card(props) {    
    return (
        <>
            <div className={styles.cardBox}>
                <div className={styles.cardDetails}>
                    <img className={styles.userimg} src={userImg} alt='userimg' />
                    <div className={styles.cardtag}>
                        <div className={styles.comtime}>
                            <div className={styles.community}>
                                {props.username}
                            </div>
                            <div className={styles.dot}>
                                &nbsp;&#183;&nbsp; 
                            </div>
                            <div className={styles.time}>
                                {props.time}
                            </div>
                        </div>
                        <div className={styles.branchuser}>
                            <div className={styles.branch}>
                                {props.branch}
                            </div>
                            <div className={styles.dot}>
                                &nbsp;&#183;&nbsp; 
                            </div>
                            <div className={styles.username}>
                                {props.username}
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.cardpost}>
                    <h2 className={styles.cardposttitle}>{props.title}</h2>
                    <p className={styles.cardpostcontent}>
                        {props.para}
                    </p>
                </div>
            
                <div className={styles.cardFooter}>
                    <div className={styles.iconWrapper}>
                        <FaHeart className={styles.iconLiked} 
                                    onClick={()=> props.likePost(props.postid)}/> {props.likes}
                    </div>
                    <div className={styles.iconWrapper}>
                        <FaRegComment className={styles.icon} /> {props.comments}
                    </div>
                    <div className={styles.iconWrapper}>
                        <BiShow className={styles.icon} /> {props.views}
                    </div>
                </div>
            </div>
        </>
    );    
}

export default Card;
