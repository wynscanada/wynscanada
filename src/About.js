import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./Hero/Hero.js";
import ExecSection from "./Executives/ExecSection.js";
import {meetTheTeam, seniorTitle, heroDescription, execDescription, exec1, exec2 } from "./assets/data.js";

function About() {
    return (
        <>
            <Hero subtitle={ meetTheTeam } title={ seniorTitle } description={ heroDescription } />
            <ExecSection
            title={ seniorTitle }
            execDescription={ execDescription }
            exec1 = { exec1 }
            exec2 = { exec2 }
            />
        </>
    )
}

export default About;