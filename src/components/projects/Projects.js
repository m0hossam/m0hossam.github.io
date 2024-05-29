import React from 'react';
import './Projects.css';
import ChessImage from './images/Chess.png'
import portfolioImage from './images/Portfolio.png'
import tinyChessDuckImage from './images/TinyChessDuck.png'
import sportsWebAppImage from './images/SportsWebApp.png'
import osSimOutImage from './images/OSSimOutput.png'

function Project(props){
    const tags = props.tags;
    const listItems = tags.map((tag,index) => <li key={index}>{tag}</li>);
    
    return (
        <div className="project">
            <div className="project-content">
                <div className="project-title-container">
                    <h3 className="project-title">{props.title}</h3>
                    <a title="GitHub Repo" rel="noopener noreferrer" className="contact-link" href={props.link} target="_blank">
                        <svg className="side-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" fill="var(--main-text)"></path> </svg>
                    </a>
                </div>
                <div className="project-desc">
                    <img className="responsive-project-image" src={props.imageSrc} alt={props.imageAlt} />
                    {props.desc}
                </div>
                <ul className="project-tag-list">
                    {listItems}
                </ul>
            </div>
            <div className="project-image">
                <img src={props.imageSrc} alt={props.imageAlt} />
            </div>
        </div>
    );
}

export default function Projects(){
    return (
        <section id="projects">
            <h1 className="section-header">My Projects</h1>

            <Project
            title="Operating System Simulator"
            link="https://github.com/Abd002/os-simulator"
            imageSrc={osSimOutImage}
            imageAlt="OS Simulator High Level Architecture"
            desc="A CLI simulator for Operating Systems I built with 2 of my colleagues.
            It simulates fundamental OS functions like process management, context switching, round-robin scheduling, synchronization using Mutex locks (binary semaphores) and memeory management."
            tags={["Java", "OS", "Scheduling", "Mutex", "Architecture"]}/>

            <br/>
            <Project
            title="Sports Management System"
            link="https://github.com/m0hossam/sports-management-system"
            imageSrc={sportsWebAppImage}
            imageAlt="Sports Web App"
            desc="A web application I developed with my colleague for a sports management system.
            The web app provides role-based CRUD dashboards according to
            different user account types. You can use this system to manage clubs, organize matches
            and host them on various stadiums, you can also register as a fan and purchase tickets to events."
            tags={["C#", "ASP.NET", "MVC", "Entity Framework", "RDBMS"]}/>

            <br/>
            <Project
            title="Tiny Chess Bot"
            link="https://github.com/m0hossam/tiny-chess-duck"
            imageSrc={tinyChessDuckImage}
            imageAlt="Tiny Chess Bots Tournament"
            desc="A tiny chess bot capable of playing decent chess I made as part of Youtuber/Game Dev
            Sebastian Lague's tiny chess bot tournament. The bot battled against 623 other bots and came out
            ranked 117th! Check out the tournament video and results - links provided in the GH repo."
            tags={["C#", "Alpha-Beta", "Minimax"]}/>

            <br/>
            <Project
            title="Portfolio Website"
            link="https://github.com/m0hossam/m0hossam.github.io"
            imageSrc={portfolioImage}
            imageAlt="Portfolio Website"
            desc="A modern responsive website I made to 
            showcase my personal skills and projects."
            tags={["React.js", "JavaScript", "HTML/CSS"]}/>
            
            <br/>
            <Project 
            title="Two-Player Chess Game" 
            link="https://github.com/m0hossam/chess-pvp"
            imageSrc={ChessImage}
            imageAlt="Chess Engine"
            desc="A two-player offline chess engine where you can play against your friends.
            All chess moves are supported, including castling and en passant."
            tags={["OOP", "C#", "WPF", "MVVM"]}/>
        </section>
    );
}