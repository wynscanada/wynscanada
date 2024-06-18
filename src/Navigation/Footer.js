import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="text-center text-black px-5 py-4 m-0">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <p>WYNS</p>
                    <img src={require('./wynslogowhitebg.jpg')} className="rounded-circle img-fluid" alt="WYNS Logo" />
                </div>
                <div className="d-flex ml-auto">
                    <div className="footer-section">
                        <p className="text-uppercase">General</p>
                        <section>
                            <a href="#">Home</a><br />
                            <a href="#">About</a><br />
                            <a href="#">Donate</a>
                        </section>
                    </div>
                    <div className="footer-section">
                        <p className="text-uppercase">Socials</p>
                        <section>
                            <a href="https://www.instagram.com/wishyouthnetworksociety/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                            <a href="https://ca.linkedin.com/company/wish-youth-network-society" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
                            <a href="#">Facebook</a>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
