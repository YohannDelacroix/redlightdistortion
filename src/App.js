import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home.js";
import Tour from "./Components/Tour/Tour.js";
import News from "./Components/News/News.js";
import Photos from "./Components/Photos/Photos.js";
import Videos from "./Components/Videos/Videos.js";
import Music from "./Components/Music/Music.js";
import About from "./Components/About/About.js";
import Universe from "./Components/Universe/Universe.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/redlightdistortion" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Tour" element={<Tour />} />
      <Route path="/News" element={<News />} />
      <Route path="/Photos" element={<Photos />} />
      <Route path="/Videos" element={<Videos />} />
      <Route path="/Music" element={<Music />} />
      <Route path="/About" element={<About />} />
      <Route path="/Universe" element={<Universe />} />
    </Routes>
  );
}

export default App;
