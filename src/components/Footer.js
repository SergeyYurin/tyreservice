import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

/* eslint-disable */

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>
                ул. Юности, 2г Сосновоборск, Красноярский край, 662500
              </p>
            </div>
            <div className='d-flex'>
              <a href='tel:+7923-319-21-29'>+7(923)319-21-29</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link
                  smooth={true}
                  to='maps'
                  offset={-70}
                  className='footer-nav'
                >
                  местоположение
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-70}
                  className='footer-nav'
                >
                  о нас
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='services'
                  offset={-70}
                  className='footer-nav'
                >
                  наши услуги
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-2 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <a
                href='https://vk.com/public198208851'
                className='vkontakte social'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faVk} size='2x' />
              </a>
            </div>
            <p className='py-3 text-center'>
              {new Date().getFullYear()}&nbsp;SIBerian Stop | Все
              права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
