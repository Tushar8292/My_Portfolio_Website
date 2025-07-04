import React from 'react';
import './skills.css';
import ReactLogo from '../../assests/react-logo.png';
import NodeLogo from '../../assests/node-logo.png';
import MySQLLogo from '../../assests/mysql-logo.png';
import TailwindLogo from '../../assests/tailwind-logo.png';
import JavaLogo from '../../assests/java-logo.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Skills</span>
            <span className="skillDesc">I'm a web developer with a strong sense of aesthetics and usability, dedicated to building sleek, responsive, and user-centric websites. My expertise spans across Tailwind CSS for modern UI design, React JS for dynamic front-end development, Node JS for scalable backend services, MySQL for structured data management, and Java for programming solutions.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ReactLogo} alt="ReactLogo" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React JS</h2>
                        <p>I've intermediate-level proficiency in React.js, with hands-on experience in building dynamic and responsive web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={NodeLogo} alt="NodeLogo" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Node JS</h2>
                        <p>I've solid working knowledge of Node.js, with practical experience in developing scalable and efficient backend solutions.
</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MySQLLogo} alt="MySQLLogo" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>MySQL</h2>
                        <p>With a strong command of MySQL, I specialize in crafting optimized queries and designing reliable relational databases that ensure data integrity and performance across web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={TailwindLogo} alt="TailwindLogo" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Tailwind CSS</h2>
                        <p>Proficient in using Tailwind CSS to create clean, responsive UI designs with growing expertise in utility-first styling.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={JavaLogo} alt="JavaLogo" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Java</h2>
                        <p>Experienced in using Java for object-oriented programming, with a strong foundation in core concepts and data structures.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;