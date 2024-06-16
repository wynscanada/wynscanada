import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import WynsNav from './Navigation/WynsNav.js';
import Footer from './Navigation/Footer.js';
import About from './About.js';
import Construction from './Construction.js';
import WhoWeAre from './WhoWeAre.js';

function App() {
  return (
    <>
      <WynsNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;