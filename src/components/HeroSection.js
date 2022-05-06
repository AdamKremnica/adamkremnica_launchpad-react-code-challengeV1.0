import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import ReactPlayer from 'react-player';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/*I'm using react-player to display video.
        Unfortunatly, Youtube has their own javascript that
        doesn't allow me to remove its UI*/}
        <ReactPlayer url='https://www.youtube.com/watch?v=LjQmKc24q5w'
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="100%"/>

        <h1>University Postal Directory</h1>
        <p>Please find your school listed on page</p>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>
            Get Started</Button>

            <Button className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'>
            Watch Video <i className='far fa-play-circle' /></Button>
        </div>
    </div>
  );
}

export default HeroSection