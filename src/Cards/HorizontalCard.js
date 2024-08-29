import { React, useRef, useEffect, useState } from 'react';
import './HorizontalCard.css';
import 'animate.css';


function HorizontalCard({ imageSrc, alt, title, subtitle, bodyText }) {
    const cardRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        setHovered(true);
    };
    
    const handleMouseLeave = () => {
        setHovered(false);
    };
    

    return (
        <div className={`horizontal-card ${hovered ? 'animate__animated animate__pulse' : ''}`}
             ref={cardRef}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <div className="card-content">
                <div className="card-image">
                    <img src={imageSrc} alt={alt} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5>{subtitle}</h5>
                    <p className="card-text">{bodyText}</p>
                </div>
            </div>
        </div>
    );
}

export default HorizontalCard;
