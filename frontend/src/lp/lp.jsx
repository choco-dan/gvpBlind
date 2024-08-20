import { useNavigate } from "react-router-dom";
import './lp.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
    const mailRef = useRef(null);

    const handleEmail = () => {
        const mailid = mailRef.current.value;
        if (mailid && mailid.indexOf('@gvpce.ac.in') !== -1) {
            alert('Verification Email sent');
        } else if (mailid || mailid.indexOf('@gvpce.ac.in') === -1) {
            alert('Enter valid Domain Mail ID');
        }
    };

    const nameVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.6
            }
        })
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1
            }
        }
    };

    const fadeInUpWithDelay = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1.2
            }
        }
    };

    return (
        <>
            <div className="lander">
                <motion.div 
                    className="lp-header"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>
                        <Link className="lp-nav" to="/HomePage">HOME</Link>
                    </span>
                    <div className="lp-options">
                        <ul>
                            <li>
                                <Link className="lp-navli" to="/Login">LOGIN</Link>
                            </li>
                            <li>
                                <Link className="lp-navli" to="/SignupPage">SIGN UP</Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <br />
                <section className="lp-sec">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        className="blinder-name"
                    >
                        {'Blinder'.split('').map((letter, i) => (
                            <motion.span key={i} custom={i} variants={nameVariants}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <br />
                    <br />
                    <motion.div
                        className="lp-desc"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h3
                            variants={fadeInUp}
                        >
                            Welcome to GVP Blinder Community Hub
                        </motion.h3>
                        <br />
                        <motion.p
                            variants={fadeInUpWithDelay}
                        >
                            Stay connected with your peers and engage in meaningful discussions
                            on GVP Blinder Community Hub! This exclusive platform is designed for students of
                            GVP to share experiences, exchange ideas, and collaborate on projects.
                            Access is restricted to members with a valid college domain email, ensuring a safe and
                            private environment for our community. More on community guidelines.
                        </motion.p>
                    </motion.div>

                    <br /><br />
                    <label htmlFor="lmai">Enter your email here*</label>
                    <div className="lp-mail">
                        <motion.input
                            type="email"
                            id="lmai"
                            name="lmai"
                            ref={mailRef}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        />
                        <motion.button
                            onClick={handleEmail}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                        >
                            Verify me!
                        </motion.button>
                    </div>
                </section>
                <motion.section
                    className='lp-credits'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    <div>
                        <p>
                            icons
                            ig x in links social media
                        </p>
                        &copy; I am the owner
                    </div>
                    <hr />
                </motion.section>
            </div>
        </>
    );
}
export default LandingPage;
