import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./About.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import YohannPic from "../../Assets/yohann_seul.jpg";
import RomanPic from "../../Assets/roman_seul_face.jpg";


function About(){
  return (<div className="container">
    <Header />
    <div className="about-container">
      <TitleComponent titleContent="About" />
      <div className="about-biography">
        
        <div className="about-member-biography-left">
          <img className="about-img-yohann" src={RomanPic} alt="beautiful picture of X" />
          <h3>Walrus</h3>
          <h5 className="about-title-right">Roman Krukowski</h5>
          <h6>Guitarist</h6>
          <p>
          Roman was 15 when the shock happenned.
          </p>
          <p>
          He was already listen to metal since he was 10, but it is with the discover of electro and especially with the videoclip «Wizard» 
          by Martin Garrix that the seed of passion was planted. <br />
          Since that time he never looked back.</p>
          <p>
          Starting to learn how to mix, he gave up the mixing to focus on his heart’s instrument, the guitar. 
          When his fingers touched the neck, he immediately knew what he wanted to be : a musician. 
          </p>
          <p>
          So, he begins to devote his time and his own energy to music, 
          drawing inspiration from accomplished musicians like Dave Mustaine or Joe Duplantier. 
          Since, the more the sands of time was running out, 
          the more his passion and devotion increased. 
          </p>
          
        </div>

        <div className="about-member-biography-right">
        <img className="about-img-roman" src={YohannPic} alt="beautiful picture of X" />
          
          <h3>X</h3>
          <h5 className="about-title-left">Yohann Delacroix</h5>
          
          
          <h6>Guitarist, Singer</h6>
          <p>
          At 17, Yohann was a mere student who spent his time playing guitar.
          </p>
          <p>
          During a metal show, he is invited to perform a song with the band, he realises that the stage is a place where he loves to be.
          He decides to stop his studies to devote himself entirely to music.</p>
          <p>
          Afterward, he takes singing lessons with Saturne Mezzasalma. She gives him the will to sing and he learns everything from her.
          </p>
          <p>
          In 2017, he lost a loved one, and begins to ask himself on what will be the future, what is really important for him..
          And during these dark times he composes the first Red Light Distortion's sound.
          He realises the most important thing before death takes life is to play music.
          </p>
        </div>


        <div className="about-band-biography" >
          <h3>The Red Story</h3>
          <p>
          At the beginning, Yohann was a guitar teacher and gave guitar lessons to Roman.
          They become friends and decide to create Red Light Distortion.
          The two friends start to search for a drummer and a bassist to fill a Heavy Metal line-up.</p>
          <p>
          One, and another one, and another again, but at the end still no one fits.<br />
          And one day, suddenly, they thought : "Why searching for musicians if we have a good sound playing in duo ?"</p>
          <p>
          Following this realization came the idea to fill the rythmic section with electronic sounds.
          After several weeks of hard word the new Red Light Electronic Distortion is ready.
          To Yohann and Roman, this is a success, the sounds fits perfectly together and the energy is strongly waving.
          </p>
          <p>
          Red Light Distortion is ready to put their feets on stage.
          The audience is about to discover the new Electronic Heavy Metal.
          </p>
        </div>
      </div>
      
    </div>
    <Footer />
  </div>)
}

export default About;
