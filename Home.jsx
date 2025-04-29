import React from "react";
import "./Home.css";
import man from "../../assets/man.png.png";
import { ReactTyped } from "react-typed";
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'


function Home() {
  useGSAP(()=>{
 let tl1 = gsap.timeline();
 tl1.from(".line1",{
  y:80,
  duration:1,
  opacity:0
 })
 tl1.from(".line2",{
  y:80,
  duration:1,
  opacity:0
 })
 tl1.from(".line3",{
  y:80,
  duration:1,
  opacity:0
 })
 gsap.from(".righthome img",{
x:200,
duration:1,
opacity:0,
 })
  })

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">MANISH KUMAR SONI</div>
          <div className="line3">
          <ReactTyped
              strings={["FULL STACK WEB DEVELOPER"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursor='|'
              // typeSpeed={50}
              // typeDelay={1000}
              // loop
              // showCursor={true}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
