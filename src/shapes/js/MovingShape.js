import Star from './Star.js';
import Circle from './Circle.js';
import React, {PureComponent} from 'react';
import * as amConsts from '../../helper/js/animationConstants.js';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 5/7/20
*
* This component generates the JSX data for a MovingShape which can be either a
* Star or Circle component. Each of these components have their own respective
* forms and data.
*/
class MovingShape extends PureComponent
{
  /**
  * MovingShape component constructor which initializes the state from the prop values
  * passed in during the initialization of the MovingShape component. This component
  * either creates a Star or Circle component based on the graphType at a given
  * moment.
  */
  constructor(props)
  {
    super(props);
    this.state = {
      time: Date.now(),
      translateUp: false,
      translateDown: true,
      translateLeft: false,
      translateRight: true,
      startTime: Date.now(),
      width: this.props.width,
      height: this.props.height,
      radius: this.props.radius,
      rotate: this.props.rotate,
      points: this.props.points,
      startX: this.props.startX,
      startY: this.props.startY,
      fillColor: this.props.fillColor,
      graphType: this.props.graphType,
      shapeType: this.props.shapeType,
      moveSpeedX: this.props.moveSpeedX,
      moveSpeedY: this.props.moveSpeedY,
    };
  }

  /**
  * Renders either a moving Circle or Star component based on what the graphType
  * state is currently.
  */
  render = () =>
  {
    var html = "";
    if (this.state.graphType === amConsts.CIRCLE)
    {
      html = (
        <>
          <Circle time={this.state.time} startTime={this.state.startTime}
            width={this.state.width} height={this.state.height}
            startX={this.state.startX} startY={this.state.startY}
            fillColor={this.state.fillColor} radius={this.state.radius} />
        </>
      );
    }
    else if (this.state.graphType === amConsts.STAR)
    {
      html = (
        <>
          <Star time={this.state.time} startTime={this.state.startTime}
            width={this.state.width} height={this.state.height}
            startX={this.state.startX} startY={this.state.startY}
            fillColor={this.state.fillColor} radius={this.state.radius}
            rotate={this.state.rotate} points={this.state.points} />
        </>
      );
    }

    return html;
  }

  /**
  * Necessary for update: enables the component to update its internal
  * state as the result of changes in props from the Wave component.
  */
  static getDerivedStateFromProps = (nextProps, prevState) =>
  {
    if (nextProps.width !== prevState.width)
    {
      return { width: nextProps.width };
    }
    else if (nextProps.height !== prevState.height)
    {
      return { height: nextProps.height };
    }
    else if (nextProps.graphType !== prevState.graphType)
    {
      return { graphType: nextProps.graphType };
    }
    else if (nextProps.shapeType !== prevState.shapeType)
    {
      return { shapeType: nextProps.shapeType };
    }
    else if (nextProps.fillColor !== prevState.fillColor)
    {
      return { fillColor: nextProps.fillColor };
    }
    else if (nextProps.radius !== prevState.radius)
    {
      return { radius: nextProps.radius };
    }
    else if (nextProps.moveSpeedX !== prevState.moveSpeedX)
    {
      return { moveSpeedX: nextProps.moveSpeedX };
    }
    else if (nextProps.moveSpeedY !== prevState.moveSpeedY)
    {
      return { moveSpeedY: nextProps.moveSpeedY };
    }
    else if (nextProps.rotate !== prevState.rotate)
    {
      return { rotate: nextProps.rotate };
    }
    else if (nextProps.points !== prevState.points)
    {
      return { points: nextProps.points };
    }
    else
    {
      return null;
    }
  }

  /**
  * Is called after any rendered HTML has finished loading. It receives
  * two arguments, the props and state of the component before the current
  * updating period began. This will check if the props have changed and the
  * state must be updated.
  */
  componentDidUpdate(prevProps, prevState)
  {
    if (prevProps.width !== this.props.width)
    {
      this.setState({ width: this.props.width });
    }
    else if (prevProps.height !== this.props.height)
    {
      this.setState({ height: this.props.height });
    }
    else if (prevProps.graphType !== this.props.graphType)
    {
      this.setState({ graphType: this.props.graphType });
    }
    else if (prevProps.shapeType !== this.props.shapeType)
    {
      this.setState({ shapeType: this.props.shapeType });
    }
    else if (prevProps.fillColor !== this.props.fillColor)
    {
      this.setState({ fillColor: this.props.fillColor });
    }
    else if (prevProps.radius !== this.props.radius)
    {
      this.setState({ radius: this.props.radius });
    }
    else if (prevProps.moveSpeedX !== this.props.moveSpeedX)
    {
      this.setState({ moveSpeedX: this.props.moveSpeedX });
    }
    else if (prevProps.moveSpeedY !== this.props.moveSpeedY)
    {
      this.setState({ moveSpeedY: this.props.moveSpeedY });
    }
    else if (prevProps.rotate !== this.props.rotate)
    {
      this.setState({ rotate: this.props.rotate });
    }
    else if (prevProps.points !== this.props.points)
    {
      this.setState({ points: this.props.points });
    }
  }

  /**
  * Updates the translations and determines if the translations need to be inverted.
  */
  updateState = () =>
  {
    if (!this.state.translateUp && this.state.translateDown &&
    !this.state.translateLeft && this.state.translateRight)
    {
      this.setState({
        time: Date.now(),
        startX: this.state.startX + this.state.moveSpeedX,
        startY: this.state.startY + this.state.moveSpeedY,
      });
    }
    if (this.state.translateUp && !this.state.translateDown &&
    !this.state.translateLeft && this.state.translateRight)
    {
      this.setState({
        time: Date.now(),
        startX: this.state.startX + this.state.moveSpeedX,
        startY: this.state.startY - this.state.moveSpeedY,
      });
    }
    if (this.state.translateUp && !this.state.translateDown &&
    this.state.translateLeft && !this.state.translateRight)
    {
      this.setState({
        time: Date.now(),
        startX: this.state.startX - this.state.moveSpeedX,
        startY: this.state.startY - this.state.moveSpeedY,
      });
    }
    if (!this.state.translateUp && this.state.translateDown &&
    this.state.translateLeft && !this.state.translateRight)
    {
      this.setState({
        time: Date.now(),
        startX: this.state.startX - this.state.moveSpeedX,
        startY: this.state.startY + this.state.moveSpeedY,
      });
    }

    this.updateTranslation();
  }

  /**
  * Updates the movement of the moving object to stay on the current window size
  * by inversing the translation. This is called by updateState to check the
  * position of the moving object and determine if action needs to take place.
  */
  updateTranslation = () =>
  {
    if ((this.state.startX + this.state.radius) > this.state.width)
    {
      this.setState({
        translateLeft: true,
        translateRight: false,
      });
    }
    if ((this.state.startY + this.state.radius) > this.state.height)
    {
      this.setState({
        translateUp: true,
        translateDown: false,
      });
    }
    if ((this.state.startX - this.state.radius) < 0)
    {
      this.setState({
        translateLeft: false,
        translateRight: true,
      });
    }
    if ((this.state.startY - this.state.radius) < 0)
    {
      this.setState({
        translateUp: false,
        translateDown: true,
      });
    }
  }

  /**
  * Sets the interval for every 10 milliseconds to call updateState
  */
  componentDidMount = () =>
  {
    this.interval = setInterval(() => this.updateState(), 10);
  }

  /**
  * Clears interval once component has unmounted.
  */
  componentWillUnmount = () =>
  {
    clearInterval(this.interval);
  }

} // end of MovingShape

export default MovingShape;
