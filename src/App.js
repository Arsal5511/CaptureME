import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import About from './components/About/About';
import React, { Children } from 'react';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Gallery from './components/constants/Gallery';
import Video from './components/constants/Video';


function App() {
  return (
    <>
    <Router>
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}  ></Route>
            {/* Add other routes here */}
        </Routes>
        <Routes>
            <Route path="/about" element={<About />}  ></Route>
            {/* Add other routes here */}
        </Routes>
        <Routes>
            <Route path="/contact" element={<Contact />}  ></Route>
            {/* Add other routes here */}
        </Routes>
    </div>
</Router>
<Video />
    <Gallery />
    <Footer />
</>
  );
}

export default App;
