import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">

          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">Where there may be food, there must be hunger. Eating should be based on willpower and strength. There will never be more food than the love of food</p>
        
        
        </div>
          <p className="p__opensans">Food shouldn't divide people, as food is the symbol we are all the same since we all need food to survive</p>

      </div>

      <div className="app__chef-sign">
        <p>Ahmad Lomabong</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
