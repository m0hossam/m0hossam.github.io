import React from 'react';
import './Emailbar.css';

export default function Emailbar(){
        return(           
            <div id="emailbar">
                <ul>
                    <li>
                        <a rel="noopener noreferrer" className="side-email-link" href="mailto:mohossam1326@gmail.com">mohossam1326@gmail.com</a>
                    </li>
                    <li className="vertical-line"></li>
                </ul>
            </div>
        );
}