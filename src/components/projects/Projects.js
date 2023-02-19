import React from 'react';
import './Projects.css';
import ChessImage from './images/Chess.png'

function Project(props){
    const tags = props.tags;
    const listItems = tags.map((tag,index) => <li key={index}>{tag}</li>);
    
    return (
        <div className="project">
            <div className="project-content">
                <h3 className="project-title">{props.title}</h3>
                <a rel="noopener noreferrer" href={props.link} target="_blank">
                    <div className="project-desc">
                        <img className="responsive-project-image" src={props.imageSrc} alt={props.imageAlt} />
                        {props.desc}
                    </div>
                </a>
                <ul className="project-tag-list">
                    {listItems}
                </ul>
            </div>
            <div className="project-image">
                <img id={props.imageId} src={props.imageSrc} alt={props.imageAlt} />
            </div>
        </div>
    );
}

export default function Projects(){
    return (
        <section id="projects">
            <h1 className="section-header">My Projects</h1>
            <Project title="Chess Game" 
            link="https://github.com/m0hossam/chess-pvp"
            imageSrc={ChessImage}
            imageAlt="Chess"
            imageId="chess-image"
            desc="A player-vs-player chess engine created using C# and WPF. 
            All standard chess moves are supported, including castling, 
            promotion and en passant. Play against your friends and try to 
            checkmate them, but.. Beware of stalemate!"
            tags={["OOP", "C#", "WPF", "MVVM"]}/>
        </section>
    );
}