import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AnimationEngine from './AnimationEngine.js';
import * as amConsts from './helper/js/animationConstants.js';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 3/26/20
*
* index.js instantiates the animation engine with default graph component.
*/
ReactDOM.render(<AnimationEngine pageType={amConsts.ANIMATIONS}
  graphType={amConsts.SINE} shapeType={amConsts.WAVE} />,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
