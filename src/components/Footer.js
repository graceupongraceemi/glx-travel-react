import React from 'react';
import './FooterStyles.css';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <div>
              <h4>Anaheim, CA</h4>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
              +1(657)-281-1018
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
              graceupongraceemi@gmail.com
            </h4>
          </div>
        </div>

        <div className='right'>
          <h4>About the company</h4>
          <p>
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            optio eos vero, expedita nihil, neque, eaque id quo voluptatem quasi
            ducimus facere? Sunt eveniet recusandae quae aut? At, dolorum!
            Deleniti!
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
