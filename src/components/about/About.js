import React from 'react';
import './About.css';
import CoderPhoto from './coder_illustration.svg';

export default function About(){
        return(
            <section id="about">
                <h1 className="section-header">
                    About Me
                </h1>
                <div className="about-content">
                    <p>
                        Hi, I'm <span>Mohamed</span>! I study <span>computer science & engineering</span>. 
                        I like to build virtual stuff like apps, games and websites.
                        <br/>
                        <br/>
                        My main interests are: <span>Software Engineering, Game Development and AI</span>. 
                        Outside of tech, I like games, movies, books and football.
                    </p>
                    <img className="coder-photo" src={CoderPhoto} alt="Coder Illustration" />                   
                </div>
            </section>
        );
}