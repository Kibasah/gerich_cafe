import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour"/>
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>
          A place where you can find all your favourite restaurants in one place, with a single click of a button. Eat like royalty and sleep like a peasant.
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
        
      </div>
  </div>
);

export default Header;
