import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Tour from "./Components/Tour/Tour";
import News from "./Components/News/News";
import Photos from "./Components/Photos/Photos";
import Videos from "./Components/Videos/Videos";
import Music from "./Components/Music/Music";
import About from "./Components/About/About";
import Universe from "./Components/Universe/Universe";
import NewsContent from './Components/News/NewsContent/NewsContent';
import Inexistant from './Components/Inexistant/Inexistant';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Admin from './Components/Admin/Admin';
import Login from './Components/Admin/Login/Login';
import RequireAuth from './Components/Admin/RequireAuth';
import { AuthProvider } from './Context/AuthProvider';
import PersistLogin from './Components/Admin/PersistLogin';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <div className="container">
    <Header />
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
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="Admin" element={<Admin />} />
          </Route>
        </Route>

        <Route path="Login" element={<Login />} />
    </Routes>
    </AuthProvider>
    <Footer />
    </div>
    </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
