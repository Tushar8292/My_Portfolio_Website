import './contact.css';
import SailLogo from '../../assests/sail-logo.png';
import EazyBytes from '../../assests/eazybytes-logo.jpeg';
import AndroidClub from '../../assests/android-club-logo.jpeg';
import LinkedInIcon from '../../assests/linkedin-logo.png';
import GitHubIcon from '../../assests/github-logo.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y0wgqgr', 'template_oiiyqwy', form.current, 'KTMyqK36aFq4LJvKx')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="exp">
                <h1 className="contactPageTitle">My Experience</h1>
                <span className="expDesc">
                </span>
                <div className="expImgs">
                    <img src={SailLogo} alt="SAIL" className="expImg" />
                    
                    <img src={EazyBytes} alt="EazyBytes" className="expImg" />
                    
                    <img src={AndroidClub} alt="AndroidClub" className="expImg" />              
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">

                        <a href="https://www.linkedin.com/in/tushar-kumar-637b1521b/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>

                        <a href="https://github.com/Tushar8292" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" className="link" />
                        </a>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;