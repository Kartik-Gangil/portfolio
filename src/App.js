import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'
import SubMain from './components/SubMain.js'
import TechStack from './components/TechStack.js'
import Footer from './components/Footer.js'
import backgroundimage from './assets/canvash_bacckground.jpg'
import Photo from './components/Photo'
import photo from './assets/photo.png'
import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check window width and set isMobileView state
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 699);
    };

    // Run once on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let pages = 9;

  return (
    <>
      {isMobileView ? (
        <>
          <Parallax pages={pages} style={{ left: "0", top: "0", backgroundImage: `url(${backgroundimage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }} className='Animation' >

            <ParallaxLayer sticky={{ start: 0, end: 5 }} offset={0} speed={0.5} style={{ zIndex: 3 }}>
              <br />
              <br />
              <Main />
            </ParallaxLayer>

            {/* flags content creator right */}
            <ParallaxLayer offset={2} speed={0.25} style={{ zIndex: 40 }}>
              <div className="flagsR" >
                <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Content Creator</h1>
                <p className='text-white text-center fs-3'>
                  <i className='fa-brands fa-youtube text-red-600'></i>
                  &nbsp; Kartik Gangil
                </p>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.25} style={{ zIndex: 40 }}>
              {/* flags video editor left */}
              <div className="flagsL">
                <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Video Editor</h1>
                <p className='text-center fs-3 text-white'><i className='fa-brands fa-youtube text-red-600'></i>&nbsp; Kartik Gangil</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0.25} style={{ zIndex: 40 }}>
              {/* flags web developer right */}
              <div className="flagsR">
                <h1 className='fs-1 fw-bold' style={{ color: "rgb(255, 119, 0)" }}>Web Developer</h1>
                <p className='text-white text-center fs-3'><i className='fa-brands fa-github '></i>&nbsp; Kartik Gangil</p>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={0.25} style={{ zIndex: 40 }}>
              {/* flags thumnail designer left */}
              <div className="flagsL ">
                <h1 className='fs-1 fw-bold' style={{ color: "rgb(255, 119, 0)" }}>Thumnail Designer</h1>
              </div>
            </ParallaxLayer>

            <ParallaxLayer sticky={{ start: 0.6, end: 5 }} offset={0.4} speed={0.25} style={{ zIndex: -1 }}>
              <Photo photo={photo} />
            </ParallaxLayer>

            <ParallaxLayer offset={6.3} speed={0.25} >
              <SubMain />
            </ParallaxLayer>

            <ParallaxLayer offset={7.8} speed={0.35} >
              <TechStack />
            </ParallaxLayer>
            
            <ParallaxLayer offset={8.85} speed={0.35} >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </>
      ) : (
        <Parallax pages={pages} style={{ left: "0", top: "0", backgroundImage: `url(${backgroundimage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }} className='Animation' >
          <ParallaxLayer sticky={{ start: 0, end: 5 }} offset={0} speed={0.5} style={{ zIndex: 3 }}>
            <Navbar />
            <Main />
          </ParallaxLayer>

          {/* flags content creator right */}
          <ParallaxLayer offset={2} speed={0.25} style={{ zIndex: 40 }}>
            <div className=" flagsR" >
              <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Content Creator</h1>
              <p className='text-white text-center fs-3'><i className='fa-brands fa-youtube text-red-600'></i>&nbsp; Kartik Gangil</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.25} style={{ zIndex: 40 }}>
            {/* flags video editor left */}
            <div className="flagsL">
              <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Video Editor</h1>
              <p className='text-center fs-3 text-white'><i className='fa-brands fa-youtube text-red-600'></i>&nbsp; Kartik Gangil</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.25} style={{ zIndex: 40 }}>
            {/* flags web developer right */}
            <div className="flagsR">
              <h1 className='fs-1 fw-bold' style={{ color: "rgb(255, 119, 0)" }}>Web Developer</h1>
              <p className='text-white text-center fs-3'><i className='fa-brands fa-github '></i>&nbsp; Kartik Gangil</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.25} style={{ zIndex: 40 }}>
            {/* flags thumnail designer left */}
            <div className="flagsL">
              <h1 className='fs-1 fw-bold ' style={{ color: "rgb(255, 119, 0)" }}>Thumnail Designer</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 0.6, end: 5 }} offset={0.4} speed={0.25} style={{ zIndex: -1 }}>
            <Photo photo={photo} />
          </ParallaxLayer>

          <ParallaxLayer offset={6.3} speed={0.25} >
            <SubMain />
          </ParallaxLayer>
          <ParallaxLayer offset={7.4} speed={0.35} >
            <TechStack />
          </ParallaxLayer>
          <ParallaxLayer offset={8.85} speed={0.35} >
            <Footer />
          </ParallaxLayer>

        </Parallax>
      )}
    </>
  )
}

export default App

