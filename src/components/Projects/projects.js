import React from 'react';
import './projects.css';
import CognionProject from '../../assests/cognion-project.png';
import TicTacToeGame from '../../assests/tic-tac-toe.png';
import WeatherApp from '../../assests/weather-app.png';


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">My few projects are listed below.</span>
            <div className="worksImgs">
  
  <a href="https://cognion-cognitive-companion.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src={CognionProject} alt="Cognion Project" className="worksImg" />
  </a>
  <a href="https://tic-tac-toe-game-in-react-three.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src={TicTacToeGame} alt="Tic Tac Toe Game" className="worksImg" />
  </a>
  <a href="https://weather-4ta5x327j-tushar8292s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src={WeatherApp} alt="Weather App" className="worksImg" />
  </a>
</div>

            <a href="https://github.com/Tushar8292" target="_blank" rel="noopener noreferrer">
            <button className="workBtn">See More</button>
            </a>
        </section>
    );
}

export default Works;