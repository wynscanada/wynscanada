import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from "./Components/Hero/HomeHero.js";
import { wyns, mission1, mission2, support, philanthropy, advocacy, recruitment, knowledge } from "./assets/data.js";
import HorizontalCard from "./Cards/HorizontalCard.js";
import s from "./assets/images/s.jpeg";
import p from "./assets/images/p.jpeg";
import a from "./assets/images/a.jpeg";
import r from "./assets/images/r.jpeg";
import k from "./assets/images/k.jpeg";

function Home() {
  const titleStyle = {
    fontFamily: "League Spartan",
    textTransform: "uppercase",
    fontSize: "2.5rem",
    textAlign: "center",
    paddingTop: "6rem"
  };

  const hcBackground = {
    background: "linear-gradient(#FCA5D9, #E3F0E4)"
  }

  return (
    <>
      <HomeHero
      mission1={mission1}
      mission2={mission2}
      title={wyns}
      href="#spark"
      buttonText="Read more"/>
      <div style={hcBackground}>
        <h2 style={titleStyle} id="spark">Our Mission</h2>
        <div className="container col-9 pb-5">
          <HorizontalCard imageSrc={s} alt="the letter s" title="Support" bodyText={support} />
          <HorizontalCard imageSrc={p} alt="the letter p" title="Philanthropy" bodyText={philanthropy} />
          <HorizontalCard imageSrc={a} alt="the letter a" title="Advocacy" bodyText={advocacy} />
          <HorizontalCard imageSrc={r} alt="the letter r" title="Recruitment" bodyText={recruitment} />
          <HorizontalCard imageSrc={k} alt="the letter k" title="Knowledge" bodyText={knowledge} />
        </div>
      </div>
    </>
  )
}

export default Home;
