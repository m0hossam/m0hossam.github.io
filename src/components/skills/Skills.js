import React from 'react';
import './Skills.css';

export default class Skills extends React.Component{

    openTab = (tabName,e) => {
        var i, tabs, tabButtons;
        
        tabs = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabs.length; i++) {
          tabs[i].style.display = "none";
        }
      
        tabButtons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabs.length; i++) {
          tabButtons[i].className = tabButtons[i].className.replace(" active", "");
        }
      
        document.getElementById(tabName).style.display = "block";
        e.currentTarget.className += " active";
    }

    render(){
        return(
            <section id="skills">
                <h1 className="section-header">My Skills</h1>
                <div className="skills-content">
                    <div className="tabs-list">
                        <button className="tab-button active" onClick={(e) => this.openTab('languages',e)}>Languages</button>
                        <button className="tab-button" onClick={(e) => this.openTab('technologies',e)}>Technologies</button>
                        <button className="tab-button" onClick={(e) => this.openTab('sciences',e)}>Sciences</button>
                        <button className="tab-button" onClick={(e) => this.openTab('activities',e)}>Activities</button>
                    </div>
                    <div className="tabs-content">
                        <div id="languages" className="tab-content">
                            <h3 className="tab-header">Programming languages I'm familiar with</h3>
                            <ul>
                                <li>C</li>
                                <li>C++</li>
                                <li>C#</li>
                                <li>JavaScript (+HTML/CSS)</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div id="technologies" className="tab-content">
                            <h3 className="tab-header">Technologies I'm familiar with</h3>
                            <ul>
                                <li>ReactJS</li>
                            </ul>
                        </div>
                        <div id="sciences" className="tab-content">
                            <h3 className="tab-header">Theory I've studied</h3>
                            <ul>
                                <li>Data Structures & Algorithms</li>
                                <li>Object-Oriented Programming</li>
                            </ul>
                        </div>
                        <div id="activities" className="tab-content">
                            <h3 className="tab-header">Student activities I've participated in</h3>
                            <ul>
                                <li>ICPC: Participated in the 2022 ECPC after
                                    qualifying in the ECPC Qualifications. 
                                </li>
                                <li>IEEE: Trained in the IEEExtreme Programming team
                                    with IEEE MUSB.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}