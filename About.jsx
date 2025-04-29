import React from "react";
import "./About.css";
// import Card from "../Card/Card";
// import mern from "../../assets/mern.png";
// // import java from "../../assets/java.png";
// // import html from "../../assets/HTML & CSS.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      ScrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      ScrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      ScrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      ScrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      ScrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 60%",
        end:"top 30%"
      }
    })
  });
  
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span>: MANISH KUMAR SONI
              </li>
              <li>
                <span>AGE</span>: 30 YEAR
              </li>
              <li>
                <span>GENDER</span>: MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span>: HINDI, ENGLISH
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education Info</h1>
            <ul>
              <li>
                <span>DEGREE</span>: B.COM
              </li>
              <li>
                <span>BRANCH</span>: COMMERENCE BANKING
              </li>
              <li>
                <span>CGPA</span>: 8.2
              </li>
            </ul>
          </div>

          <div className="Skill">
            <h1>Skill</h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>JAVA SCRIPT</li>
              <li>HTML, CSS, React, NodeJS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout"></div>
      {/* <Card title="MERN STACK WEB DEVELOPER" image={mern} />
      <Card title="JAVA" image={java} />
      <Card title="HTML&CSS" image={html} /> */}
    </div>
  );
}

export default About;
