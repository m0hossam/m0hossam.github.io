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
                <img className="mylogo" src="./RocketDuck.png" alt="logo" />
                <button className="res-nav-icon" onClick={() => this.openResponsiveNav()}>
                    <svg height="48" viewBox="0 0 21 21" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12" fill="var(--main-text)"></path><path d="m4.498 10.5h11.997" fill="var(--main-text)"></path><path d="m4.5 14.5h11.995" fill="var(--main-text)"></path></g></svg>
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    <li className="nav-item"><button className="resume">Resume</button></li>
                </ul>
            </nav>
        );
  }
}

//hiding and re-appearing on scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    if (currentScrollPos > 0.001) {
      document.getElementById("navbar").style.boxShadow = "0 10px 20px 0 rgba(0,0,0,.2)";
    }
    else {
      document.getElementById("navbar").style.boxShadow = "none";
    }
  } else { //scrolling down = hide navbar
    document.getElementById("navbar").style.top = "-100%";
    var x = document.getElementsByClassName("navbar-nav")[0];
    var y = document.getElementById("navbar");
    var z = document.getElementsByClassName("mylogo")[0];
    x.className = "navbar-nav";
    y.className = "";
    z.className = "mylogo"
  }
  prevScrollpos = currentScrollPos;
}
