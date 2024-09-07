import styles from './card.module.css';
import userImg from './assets/userimage.png';
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import axios from "axios";
import { useState, useEffect } from "react";

function Card(props) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const checkLikeStatus = async () => {
            try {
                const response = await axios.get(`/posts/${props.postid}/like-status/${props.usermail}`);
                setIsLiked(response.data.liked);
            } catch (error) {
                console.error("Error fetching like status", error);
            }
        };
        checkLikeStatus();
    }, [props.postid, props.usermail]);

    const handleLikeClick = async () => {
        try {
            await props.likePost(props.postid);
            setIsLiked(!isLiked); 
        } catch (error) {
            console.error("Error liking post", error);
        }
    };
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
                        {isLiked ? 
                            <FaHeart className={styles.iconLiked} onClick={handleLikeClick} /> : 
                            <FaRegHeart className={styles.icon} onClick={handleLikeClick} />
                        } 
                        {props.likes}
                    </div>
                    <div className={styles.iconWrapper}>
                        <FaRegComment className={styles.icon} /> {props.comments}
                    </div>
                    <div className={styles.iconWrapper}>
                        <BiShow className={styles.icon} /> {props.views}
                    </div>
                    <div className={styles.iconWrapper}>
                        <div className={styles.icon} onClick={()=>props.deletepost(props.postid)}>
                            {props.deletebtn}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );    
}

export default Card;
