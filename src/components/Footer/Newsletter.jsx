import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="NewsLetter"/>
      <h1 className="headtext__cormorant">Subscribe to our News Letter</h1>
      <p className="p__opensans">Never Miss Our Latest Updates When You Subscribe</p>
    </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your Name"/>
        <button className="custom__button">Enter your email address</button>
        <button className="custom__button">Subscribe</button>
      </div>
    
  </div>
);

export default Newsletter;
