import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  {/*I want the value to always be the opposite 
  of what click is*/}
  const[click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const showButton = () => {
    if(Window.innerWidth <= 760){
      setButton(false);
    }
    else{
      setButton(true);
    }
  }
{/*Error handling, to make sure Sign up button shows up*/}
  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        {/*Navigation Bar Creation*/}
        <div className='navbar-container'>
          {/*Navbar Closes after you select an option*/}
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                {/*Navigation Bar Logo imported from font awesome*/}
                UPD <i className='fas fa-paper-plane' />  
            </Link>

            {/*Hamburger Menu Creation
            Utilizes react.js's "useState" for it 
            to change from X to a Hamburger depending 
            on size of window*/}
            <div className='menu-icon' onClick={handleClick}>
              {/*Will change state with click using font awesome:
               - when is clicked it will be bars
               - when it is not clicked it will be Hambuger Menu*/}
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {/*When you click something on the menu, the menu will
            disapear after you selected a link.
            This table repesents all the links in the Navbar*/}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/universities' className='nav-links' onClick={closeMobileMenu}>
                  Universities <i className='fas fa-school' />
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/postalLookup' className='nav-links' onClick={closeMobileMenu}>
                  Postal Lookup <i className='fas fa-mail-bulk' />
                </Link>
              </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up <i className='fas fa-address-card' />
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

        </div>    
      </nav>

    </>
  );
}

export default Navbar;