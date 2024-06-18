import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import WynsNav from './Navigation/WynsNav.js';
import Footer from './Navigation/Footer.js';
import About from './About.js';
import Construction from './Construction.js';
import WhoWeAre from './WhoWeAre.js';
import Contact from './Contact.js';

function App() {
  return (
    <>
      <WynsNav />
      <Routes style={{background: "#FCA5D9"}}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;