import './App.css';
import {Contact, Footer} from './sections';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function App() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["an Automotive Engineer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
    }, []);


  return (
    <div className="App">
      {/*<!-- ======= Hero Section ======= -->*/}
      <div id="hero" class="home">

        <div class="container">
          <div class="hero-content">

            <p1 class="hero-subtitle hero-bg">I'm <span ref={el}></span></p1>
            <p2>CAD / CAE / CAM</p2>

            <ul class="list-unstyled list-social">
              <li><a href="https://www.instagram.com/nadeem_mattara/"><i class="bi bi-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/nadheem-nassar-matara-902255202/"><i class="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/*<!-- End Hero -->*/}

      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
