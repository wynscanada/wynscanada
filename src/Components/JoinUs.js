import 'bootstrap/dist/css/bootstrap.min.css';
import Hiring from "./Hiring/Hiring.js";
import { heroDescription } from "../assets/data.js";

function JoinUs() {
  const gradient = {
    background: "linear-gradient(0.25turn, #FB9ED5, #FFFFFF, #D5E2D3)"
  }

  return (
    <>
      <Hiring
        positionName="School Executive"
        positionDescription={heroDescription}
        link="#"
        color={gradient.background}
      />

      <Hiring
        positionName="Research Member"
        positionDescription={heroDescription}
        link="#"
        color={gradient.background}
      />

      <Hiring
        positionName="Marketing Member"
        positionDescription={heroDescription}
        link="#"
        color={gradient.background}
      />
    </>
  );
}

export default JoinUs;
