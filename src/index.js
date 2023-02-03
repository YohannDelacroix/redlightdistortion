import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home.js";
import Tour from "./Components/Tour/Tour.js";
import News from "./Components/News/News.js";
import Photos from "./Components/Photos/Photos.js";
import Videos from "./Components/Videos/Videos.js";
import Music from "./Components/Music/Music.js";
import About from "./Components/About/About.js";
import Universe from "./Components/Universe/Universe.js";
import NewsContent from './Components/News/NewsContent/NewsContent';
import Inexistant from './Components/Inexistant/Inexistant';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Admin from './Components/Admin/Admin';
import Login from './Components/Admin/Login';
import RequireAuth from './Components/Admin/RequireAuth';
import { AuthProvider } from './Context/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="redlightdistortion" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Tour" element={<Tour />} />
        <Route path="News" element={<News />}>
          <Route path=":linkNews" element={<NewsContent />} />
        </Route>
        <Route path="Photos" element={<Photos />} />
        <Route path="Videos" element={<Videos />} />
        <Route path="Music" element={<Music />} />
        <Route path="About" element={<About />} />
        <Route path="Universe" element={<Universe />} />
        <Route path="*" element={<Inexistant />} />
        <Route element={<RequireAuth />}>
          <Route path="Admin" element={<Admin />} />
        </Route>
        
        <Route path="Login" element={<Login />} />
    </Routes>
    </AuthProvider>
    </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
