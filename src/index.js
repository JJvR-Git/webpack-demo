import _ from 'lodash';

//import myName function

import myName from './myName';

//import myModule

import {functionOne, functionTwo} from './myModule';

function component() {
    let element = document.createElement('div');
  
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.textContent = myName('JJ v Rhyn');
  
    return element;
  }

  function componentTwo() {
    let element = document.createElement('div');

    element.textContent = functionOne;
  
    return element;
  }
  
  document.body.appendChild(component());

  document.body.appendChild(componentTwo());