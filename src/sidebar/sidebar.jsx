import React from 'react'
import styles from './sidebar.module.css'
import feed from './assets/square-poll-horizontal.svg'
import poll from './assets/vote-yea.svg'
function Sidebar(){
    return(
        <>
        <div className = {styles.sidebar}>
        <div className = {styles.unscroll}>
        <div className ={styles.feed}>
        <img className = {styles.feedicon} src={feed} alt='feed'/>
        <a className = {styles.feeda}href="#" >&nbsp;Feed</a>
        </div>
        <div className = {styles.poll}>
            <img className = {styles.pollicon} src = {poll} alt = 'poll' />
            <a className = {styles.polla} href = "#">&nbsp;Polls</a>
        </div>
        </div>
        <div className = {styles.scrollable}>
            <div className = {styles.industries}>
            <h3>Industries</h3>
            <a href = "#">Tech</a>
            <a href = "#">Financial Services</a>
            <a href = "#">Healthcare</a>
            <a href = "#">Gaming</a>
            <a href= "#">E-commerce & Retail</a>
            </div>
            <div className = {styles.branches}>
                <h3>Branch groups</h3>
                <a href = "#">CSE</a>
                <a href = "#">CSM</a>
                <a href = "#">CSD</a>
                <a href = "#">IT</a>
                <a href = "#">ECE</a>
                <a href = "#">EEE</a>
                <a href = "#">Mech</a>
                <a href = "#">Civil</a>
                <a href = "#">Chemical</a>
            </div>
            <div className = {styles.general}>
                <h3>General Topics</h3>
                <a href ="#">Ask Gvp</a>
                <a href ="#">Cars</a>
                <a href = "#">Artificial Intelligence</a>
                <a href = "#">Vizag</a>
                <a href = "#">Misc.</a>
                <a href = "#">India</a>
                <a href = "#">Politics</a>
                <a href = "#">Relation ships</a>
                <a href = "#">memes</a>
                <a href = "#">movies</a>
                <a href = "#">Anime</a>
                <a href = "#">Cricket</a>
            </div>
        </div>
        </div>
        </>
    );
}
export default Sidebar