import './css/AnimationEngine.css';
import Animation from './Animation.js';
import React, {PureComponent} from 'react';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 3/25/20
*
* The AnimationEngine component controls the rendering of an Animation React
* component. For now this class is primarily a pass through however will provide
* stronger capabilities in later versions.
*/
class AnimationEngine extends PureComponent
{
  /**
  * Main constructor for the engine which instantiate the state of the entire
  * engine which is necessary for the entire Animation.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      defaultPage: this.props.pageType,
      defaultGraph: this.props.graphType,
      defaultShape: this.props.shapeType,
    }
  }

  /**
  * Render function for the engine, currently is a simple pass through to the Animation
  * React Component which renders the different types of animations.
  */
  render = () =>
  {
      var html = (
        <>
          <Animation pageType={this.state.defaultPage}
            graphType={this.state.defaultGraph}
            shapeType={this.state.defaultShape} />
        </>
      );
      return html;
  }

} // end of AnimationEngine

export default AnimationEngine;
