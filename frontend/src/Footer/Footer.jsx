import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>Connect with me on GitHub:</p>
                <a href="https://github.com/yourAccount1" target="_blank" rel="noopener noreferrer">
                    GitHub Account 1
                </a>
                <a href="https://github.com/yourAccount2" target="_blank" rel="noopener noreferrer">
                    GitHub Account 2
                </a>
            </div>
        </footer>
    );
};

export default Footer;
