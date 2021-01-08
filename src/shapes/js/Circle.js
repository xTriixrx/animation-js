import '../css/Circle.css';
import React, {PureComponent} from 'react';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 5/7/20
*
* This component generates the point information for a Star and outputs the
* <circle> element with point information onto the SVG element.
*/
class Circle extends PureComponent
{

  /**
  * Circle component constructor which initializes the state from the prop values
  * passed in during the initialization of the Circle component.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
       time: this.props.time,
       width: this.props.width,
       height: this.props.height,
       startX: this.props.startX,
       startY: this.props.startY,
       radius: this.props.radius,
       startTime: this.props.startTime,
       fillColor: this.props.fillColor,
    };
  }

  /**
  * Renders the Circle component with the points calculated from circleBuilder
  * function.
  */
  render()
  {
    var circles = this.circleBuilder();

    return (
      <>
        {circles}
      </>
    );
  }

  /**
  * Generates the circle element with the current state values.
  */
  circleBuilder = () =>
  {

    var circle = (
      <>
        <circle cx={this.state.startX}
          r={this.state.radius} fill="none"
          stroke={this.state.fillColor}
          strokeWidth="5"
          cy={this.state.startY}>
        </circle>
      </>
    );

    return circle;
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
    if (nextProps.startX !== prevState.startX)
    {
      return { startX: nextProps.startX };
    }
    else if (nextProps.startY !== prevState.startY)
    {
      return { startY: nextProps.startY };
    }
    else if (nextProps.radius !== prevState.radius)
    {
      return { radius: nextProps.radius };
    }
    else if (nextProps.time !== prevState.time)
    {
      return { time: nextProps.time };
    }
    else if (nextProps.startTime !== prevState.startTime)
    {
      return { startTime: nextProps.startTime };
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
    else if (prevProps.startX !== this.props.startX)
    {
      this.setState({ startX: this.props.startX });
    }
    else if (prevProps.startY !== this.props.startY)
    {
      this.setState({ startY: this.props.startY });
    }
    else if (prevProps.radius !== this.props.radius)
    {
      this.setState({ radius: this.props.radius });
    }
    else if (prevProps.time !== this.props.time)
    {
      this.setState({ time: this.props.time });
    }
    else if (prevProps.startTime !== this.props.startTime)
    {
      this.setState({ startTime: this.props.startTime });
    }
  }
}

export default Circle;
