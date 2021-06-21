import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
/* eslint-disable */

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light fixed-top'
      style={{ background: '#e3f2fd' }}
    >
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={logo} alt='logo...' />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: '#f04019' }}
          />
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='about'
                offset={-70}
                className='nav-link'
                href='#'
              >
                о компании
              </Link>
            </li>
            <li className='nav-item active'>
              <Link
                smooth={true}
                to='services'
                offset={-70}
                className='nav-link'
                href='#'
              >
                наш услуги
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='maps'
                offset={-70}
                className='nav-link'
                href='#'
              >
                карта <span class='sr-only'></span>
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link className='nav-link' href='#'>
                Portfolio
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                smooth={true}
                to='contactUs'
                offset={-70}
                className='nav-link'
                href='#'
              >
                связаться с нами
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
