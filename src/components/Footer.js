import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
       <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Click my link to follow the techical write-up
        </p>
        <p className="footer-subscription-text">
            Enter the link here
        </p>
        <div className='input-areas'>
            <form>
                <input type="email" name='email' placeholder='Your Email' className='footer-input' />
                <Button buttinStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
       </section> 
       <div className="footer-links">
           <div className="footer-link-wrapper">
              <div className="footer-link-items"> 
                <Link to='sign-up'>How it works</Link>
                <Link to='/'>Testimony</Link>
              </div> 
           </div>
       </div>
    </div>
  )
}

export default Footer