import 'bootstrap/dist/css/bootstrap.min.css';
import { whoweare } from "./assets/data.js";
import HomeHero from './Components/Hero/HomeHero.js';

function WhoWeAre() {
    return (
        <HomeHero
            mission1={whoweare}
            mission2=""
            title="Who We Are"
            href="https://drive.google.com/file/d/1viyYQ1lovlO8T2sbsiM9slJrvAOBLzZ4/view?usp=sharing"
            buttonText="Our Certification"
        />
    );
}

export default WhoWeAre;