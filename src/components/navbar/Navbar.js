import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component{
  openResponsiveNav = () => {
    var x = document.getElementsByClassName("navbar-nav")[0];
    var y = document.getElementById("navbar");
    var z = document.getElementsByClassName("mylogo")[0];
    if (x.className === "navbar-nav") {
      x.className += " responsive";
      y.className += " responsive";
      z.className += " responsive";
    } else {
      x.className = "navbar-nav";
      y.className = "";
      z.className = "mylogo"
    }
  }

  render(){
    return(
      <nav id="navbar">
        <a className="mylogo" href="https://m0hossam.github.io/" title="Logo">
        <svg xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="64px"
        height="64px"
        viewBox="0 0 737.28 737.28">
          <defs/>
          <circle id="shape0" transform="matrix(0.999999960263572 0 0 0.999999960263572 44.6399935626975 44.6399935626975)" r="324.000019311906" cx="324.000019311906" cy="324.000019311906" fill="none" stroke="#64ffda" strokeWidth="28.8" strokeLinecap="square" strokeLinejoin="bevel"/><text id="shape0" transform="translate(219.2025, 440.73375)" fill="#64ffda" strokeOpacity="0" stroke="#000000" strokeWidth="0" strokeLinecap="square" strokeLinejoin="bevel" fontFamily="SansSerif" fontSize="200" fontSizeAdjust="0.42953" fontStretch="normal" fontWeight="700" letterSpacing="20px" wordSpacing="0"><tspan x="0">MH</tspan></text>
        </svg>

        </a>
        <button type="button" title="Menu" className="res-nav-icon" onClick={() => this.openResponsiveNav()}>
          <svg height="48" viewBox="0 0 21 21" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12" fill="var(--main-text)"></path><path d="m4.498 10.5h11.997" fill="var(--main-text)"></path><path d="m4.5 14.5h11.995" fill="var(--main-text)"></path></g></svg>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <li className="nav-item"><a href="https://drive.google.com/file/d/19XCKTLfRL1Z6jJ728wPS8euppV_OaZCL/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" className="resume">Resume</button></a></li>
        </ul>
      </nav>
    );
  }
}

//hiding and re-appearing on scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  //scrolling closes responsive menu:
  var x = document.getElementsByClassName("navbar-nav")[0];
  var y = document.getElementById("navbar");
  var z = document.getElementsByClassName("mylogo")[0];
  if (x.className !== "navbar-nav")
  {
    x.className = "navbar-nav";
    y.className = "";
    z.className = "mylogo"
  }

  //hiding and re-appearing:
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) { //scrolling upwards
    document.getElementById("navbar").style.top = "0";
    if (currentScrollPos > 0.001) { //did not reach the top
      document.getElementById("navbar").style.boxShadow = "0 10px 20px 0 rgba(0,0,0,.2)";
    }
    else { //reached the top
      document.getElementById("navbar").style.boxShadow = "none";
    }
  } else { //scrolling downwards
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}
