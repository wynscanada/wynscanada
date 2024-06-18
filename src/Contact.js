import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import linktreeLogo from './assets/linktreelogo.png';

function Contact() {
    const isSmallScreen = window.innerWidth < 576;

    const background = {
        background: "linear-gradient(#E3F0E4, #FCA5D9)",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "5rem"
    }

    const titleStyle = {
        paddingBottom: isSmallScreen ? "1rem" : "1.5rem",
        fontFamily: "Montserrat",
        textTransform: "uppercase",
        textAlign: "center"
    }

    const subtitleStyle = {
        fontFamily: "Montserrat",
        letterSpacing: "-0.5px",
        textAlign: "center",
    }

    const iconRow = {
        display: "flex",
        alignItems: "center",
        gap: isSmallScreen ? "0.6rem" : "1rem",
        justifyContent: "center",
        paddingBottom: isSmallScreen ? "1.5rem" : "2.5rem"
    }

    const iconStyle = {
        height: isSmallScreen ? "6vh" : "7vh",
        width: isSmallScreen ? "6vh" : "7vh"
    }

    const align = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const label = {
        fontSize: isSmallScreen ? "0.5rem" : "0.8rem",
        marginTop: "0.5rem",
        textAlign: "center",
        fontFamily: "Montserrat"
    }

    const emailStyle = {
        textDecoration: "underline",
        fontSize: "1rem",
    }

    return (
        <div style={background}>
            <div className="container">
                <h1 style={titleStyle} className="fw-bold fs-1 animate__animated animate__fadeIn animate__slower">Let's get in contact!</h1>
                <div className="animate__animated animate__fadeInUp animate__slow">
                <h2 style={subtitleStyle} className='fs-5'>To learn more, feel free to explore our social media:</h2>
                <div style={iconRow}>
                    <a href="https://www.instagram.com/wishyouthnetworksociety/?hl=en" target="_blank" rel="noopener noreferrer" style={align}>
                        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
                        <p className='fw-light' style={label}>Instagram</p>
                    </a>
                    <a href="https://ca.linkedin.com/company/wish-youth-network-society" target="_blank" rel="noopener noreferrer" style={align}>
                        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                        <p className='fw-light' style={label}>LinkedIn</p>
                    </a>
                    <a href="https://linktr.ee/wishyouthnetworksociety" target="_blank" rel="noopener noreferrer" style={align}>
                        <img src={linktreeLogo} alt="linktree logo" style={iconStyle} />
                        <p className='fw-light' style={label}>LinkTree</p>
                    </a>
                </div>
                </div>
                    <h2 style={subtitleStyle} className='fs-5 animate__animated animate__fadeInUp animate__slow animate__delay-1s'>For business or partnership inquiries, please contact: <br/><a href="mailto:wishyouthnetworksociety@gmail.com" style={emailStyle}>wishyouthnetworksociety@gmail.com</a></h2>
            </div>
        </div>
    );
}

export default Contact;
