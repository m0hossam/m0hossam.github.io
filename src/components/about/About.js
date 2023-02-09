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
                        Hi, I'm Mohamed! I study <span>computer science & engineering.</span>
                        I like to build virtual stuff like apps, games and websites.
                        <br />
                        <br />
                        I'm currently studying these topics: <span>Databases, Computer Organization.</span>
                        My main interests are: <span>Software Engineering, Game Development and AI.</span>
                        <br />
                        <br />
                        I'm interested in new experiences that could enrich my knowledge
                        about technology and strengthen my teamwork abilities.
                    </p>
                    <img className="coder-photo" src={CoderPhoto} alt="Coder Illustration" />                   
                </div>
            </section>
        );
}