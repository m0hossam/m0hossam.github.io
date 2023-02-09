import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Emailbar from './components/emailbar/Emailbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App(){
        return(
            <main>
                <Navbar />
                <div className="content">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <Welcome />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
                <Emailbar />
                <footer>
                    <div id="end">
                        Built by Mohamed Hossam
                    </div>
                </footer>
            </main>
        );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);