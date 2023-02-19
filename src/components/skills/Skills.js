import React from 'react';
import './Skills.css';

function TabContent(props){
    const tablistItems = props.tablistItems;
    const listItems = tablistItems.map((listItem,index) => <li key={index}>{listItem}</li>)
    return (
        <div id={props.id} className="tab-content">
            <h3 className="tab-header">{props.tabHeader}</h3>
            <ul>{listItems}</ul>
        </div>
    );
}

export default class Skills extends React.Component{

    handleClick = (tabName,e) => {
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
                        <button type="button" className="tab-button active" onClick={(e) => this.handleClick('languages',e)}>Languages</button>
                        <button type="button" className="tab-button" onClick={(e) => this.handleClick('technologies',e)}>Technologies</button>
                        <button type="button" className="tab-button" onClick={(e) => this.handleClick('sciences',e)}>Sciences</button>
                        <button type="button" className="tab-button" onClick={(e) => this.handleClick('activities',e)}>Activities</button>
                    </div>
                    <div className="tabs-content">

                        <TabContent id="languages"
                        tabHeader="Programming languages I'm familiar with"
                        tablistItems={["C","C++","C#","JavaScript (+HTML/CSS)","Python"]} />
                        
                        <TabContent id="technologies"
                        tabHeader="Technologies I'm familiar with"
                        tablistItems={["ReactJS"]} />
                        
                        <TabContent id="sciences"
                        tabHeader="Theory I've studied"
                        tablistItems={["Data Structures & Algorithms","Object-Oriented Programming"]} />
                        
                        <TabContent id="activities"
                        tabHeader="Student activities I've participated in"
                        tablistItems={["ICPC: Participated in the 2022 ECPC after qualifying in the ECPC Qualifications.",
                        "IEEE: Trained in the IEEExtreme Programming team with IEEE MUSB."]} />
                    </div>
                </div>
            </section>
        );
    }
}