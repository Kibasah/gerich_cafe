
//most important file in react
//Entry point of the application
//So when rendering dia masuk sini dulu
//Reconnect file application to the DOM
//what is a DOM u ask?
//Dom is tempat React Application is rendered into, so basically DOM ni tempat nk load React app


import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


//So mana root ni? (dekat /public/index.html)
