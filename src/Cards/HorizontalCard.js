import { React, useRef, useEffect } from 'react';
import './HorizontalCard.css';

function HorizontalCard({ imageSrc, alt, title, subtitle, bodyText }) {
    const cardRef = useRef(null);

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

    return (
        <div className="horizontal-card" ref={cardRef}>
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
