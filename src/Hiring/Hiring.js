import {React, useRef, useEffect} from 'react';

function Hiring({positionName, link, positionDescription, color}) {
    const section = {
        height: "80vh",
        background: color
    }

    const description = {
        fontFamily: "Montserrat"
    }

    const title = {
        fontSize: "2rem"
    }

    const button = {
        fontSize: "0.9rem",
        textDecoration: "none"
    }

    const hiringRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (hiringRef.current) {
            observer.observe(hiringRef.current);
        }

        return () => {
            if (hiringRef.current) {
                observer.unobserve(hiringRef.current);
            }
        };
    }, []);

    return (
        <div style={section}>
        <section className="container col-9" ref={hiringRef}>
            <h1 className="text-uppercase text-start fw-bold mb-4" style={title}>{positionName}</h1>
            <p className="my-5 col-8" style={description}>{positionDescription}</p>
            <a className="btn text-uppercase mx-0 my-0" href={link} role="button" style={button}>apply now</a>
        </section>
        </div>
    );
}

export default Hiring;