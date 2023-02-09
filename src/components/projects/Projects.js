import React from 'react';
import './Projects.css';
import ChessImage from './images/Chess.png'

export default function Projects(){
    return (
        <section id="projects">
            <h1 className="section-header">My Projects</h1>
            <div className="project">
                <div className="project-content">
                    <h3 className="project-title">Chess Game</h3>
                    <a rel="noopener noreferrer" href="https://github.com/m0hossam/chess-pvp" target="_blank">
                        <div className="project-desc">
                            <img className="responsive-project-image" src={ChessImage} alt="Chess" />
                            A player-vs-player chess engine created using C# and WPF. All
                            standard chess moves are supported, including castling, promotion
                            and en passant. 
                            Play against your friends and try to checkmate
                            them, but.. Beware of stalemate!
                        </div>
                    </a>
                    <ul className="project-tag-list">
                        <li>OOP</li>
                        <li>C#</li>
                        <li>WPF</li>
                        <li>MVVM</li>
                    </ul>
                </div>
                <div className="project-image">
                    <img id="chess-image" src={ChessImage} alt="Chess" />
                </div>
            </div>
        </section>
    );
}