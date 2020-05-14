import React from 'react';
import { Image } from 'semantic-ui-react';

import { Rain } from './rain';
import './Raindrop.scss';

const FarmPhone = require('../../../assets/images/phone.png');
const Facebook = require('../../../assets/images/facebook.png');
const Twitter = require('../../../assets/images/twitter.png');
const Youtube = require('../../../assets/images/youtube.png');
const Instagram = require('../../../assets/images/instagram.png');

const RaindropImage = ({ children }) => (
   <div>
      <Rain />
      <div className="container image-farm">
         <p className="raindrop-title">
            Dial *515# to Access Innovation Agriculture
         </p>
         <p className="raindrop-title2">Services on MLima wherever you are.</p>
         <div className="phone-container">
            <Image src={FarmPhone} id="raindrop-phone" alt="phone" />
            <div className="rounded-cicle">
               <span className="dot" />
               <span className="dot" />
               <span className="dot" />
            </div>
         </div>
      </div>
      <div className="social-images">
         <Image className="social" src={Facebook} alt="facebook" />
         <Image className="social" src={Instagram} alt="instagram" />
         <Image className="social" src={Youtube} alt="youtube" />
         <Image className="social" src={Twitter} alt="twitter" />
      </div>
      {children}
   </div>
);

export default RaindropImage;
