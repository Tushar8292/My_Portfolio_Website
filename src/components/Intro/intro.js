import React from 'react';
import './intro.css';
import bg from '../../assests/image.png';
// import btnImg from '../../assests/hireme.png';
// import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="typingLine line1">Hello!!!</span>
                <span className="typingLine line2" style={{ color: 'purple' }}>I'm Tushar</span>
                <span className="typingLine line3">Web Developer...</span>
                <p className="introPara">I am a skilled web developer with experience in developing<br />responsive and user friendly websites.</p>
               {/* <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>  */}
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;