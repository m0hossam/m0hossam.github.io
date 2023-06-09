import React from 'react';
import { useState } from 'react';
import './Skills.css';
import MySkills from'./Skills.json';

export default function Skills(){
    const [activeTab, setActiveTab] = useState(MySkills[0]);

    function handleClick(tabId){
        setActiveTab(MySkills.filter(tab => tab.id === tabId)[0]);
    }

    return(
        <section id="skills">
            <h1 className="section-header">My Skills</h1>
            <div className="skills-content">
                <div className="tabs-list">
                    {MySkills?.map(tab => <button key={tab.id} type="button" className={(tab.id === activeTab.id) ? "tab-button active" : "tab-button"} onClick={() => handleClick(tab.id)}>{tab.id}</button>)}
                </div>
                <div className="tabs-content">
                    <div className="tab-content" id={activeTab.id}>
                        <h3 className="tab-header">{activeTab.header}</h3>
                        <ul>
                            {activeTab.skills?.map((skill, i) => 
                            <li key={i}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}