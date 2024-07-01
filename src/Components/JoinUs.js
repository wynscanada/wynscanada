import 'bootstrap/dist/css/bootstrap.min.css';
import Hiring from "./Hiring/Hiring.js";
import { heroDescription } from "../assets/data.js";

function JoinUs() {
  const greenToLightPink = {
    background: "linear-gradient(#E3F0E4,#FFE1EE)"
  }

  const lightPinkTogreen = {
    background: "linear-gradient(#FFE1EE,#E3F0E4)"
  }

  return (
    <>
      <Hiring
        positionName="School Executive"
        positionDescription={heroDescription}
        link="#"
        color={greenToLightPink.background}
      />

      <Hiring
        positionName="Research Member"
        positionDescription={heroDescription}
        link="#"
        color={lightPinkTogreen.background}
      />

      <Hiring
        positionName="Marketing Member"
        positionDescription={heroDescription}
        link="#"
        color={greenToLightPink.background}
      />
    </>
  );
}

export default JoinUs;
