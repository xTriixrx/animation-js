import '../css/Star.css';
import React, {PureComponent} from 'react';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 5/7/20
*
* This component generates the point information for a Star and outputs the
* <polygon> element with point information onto the SVG element.
*/
class Star extends PureComponent
{

  /**
  * Star component constructor which initializes the state from the prop values
  * passed in during the initialization of the Star component.
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
      rotate: this.props.rotate,
      points: this.props.points,
      startTime: this.props.startTime,
      fillColor: this.props.fillColor,
    };
  }

  /**
  * Renders the Star component with the points calculated from generateStarPoints.
  */
  render()
  {
    var starPoints = this.generateStarPoints();
    var star = <polygon points={starPoints} fill="none"
      stroke={this.state.fillColor} strokeWidth="2" />

    return (
      <>
        {star}
      </>
    );
  }

  /**
  * Generates the points for a single Star react component.
  */
  generateStarPoints = () =>
  {
    var innerCirclePoints = this.state.points; // N point star

    var innerRadius = this.state.radius / 2;
    var innerOuterRadiusRatio = 2.5;
    var outerRadius = innerRadius * innerOuterRadiusRatio;

    const angle = (Math.PI / innerCirclePoints);
    const angleOffsetToCenterStar = this.state.rotate;
    const totalPoints = innerCirclePoints * 2;

    var points = '';
    for (let i = 0; i < totalPoints; i++)
    {
      let isEvenIndex = i % 2 === 0;
      let r = isEvenIndex ? outerRadius : innerRadius;
      let currX = this.state.startX + Math.cos(i * angle + angleOffsetToCenterStar ) * r;
      let currY = this.state.startY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
      points += currX + ',' + currY + ' ';
    }

    return points;
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
    else if (nextProps.fillColor !== prevState.fillColor)
    {
      return { fillColor: nextProps.fillColor };
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
    else if (prevProps.fillColor !== this.props.fillColor)
    {
      this.setState({ fillColor: this.props.fillColor });
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

}

export default Star;
