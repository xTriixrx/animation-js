import '../css/Cosine.css';
import React, {PureComponent} from 'react';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 3/26/20
*
* The Cosine component receives prop values from the Wave component and keeps
* track of time through the Date.now() function. The Cosine component graphs
* the cos() function using <circle> HTML elements.
*/
class Cosine extends PureComponent
{
  /**
  * Receives prop values from the Wave component and keeps track of the time
  * that has passed since the start of the function being graphed.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      time: Date.now(),
      width: this.props.width,
      height: this.props.height,
      waveFreq: this.props.waveFreq,
      fillColor: this.props.fillColor,
      inversion: this.props.inversion,
      lineTotal: this.props.lineTotal,
      pointTotal: this.props.pointTotal,
      waveLength: this.props.waveLength,
      waveHeight: this.props.waveHeight,
      startPoint: this.props.startPoint,
      radiusFactor: this.props.radiusFactor,
      freqMultiplier: this.props.freqMultiplier,
      startHeightPoint: this.props.startHeightPoint,
      waveIntervalSpeed: this.props.waveIntervalSpeed,
      xRotationMultiplier: this.props.xRotationMultiplier,
      yRotationMultiplier: this.props.yRotationMultiplier,
    };
  }

  /**
  * Renders the current iteration of the cosine graph.
  */
  render()
  {
    var circles = this.circleBuilder(this.state.pointTotal);

    return (
      <>
        {circles}
      </>
    );
  }

  /**
  * Calculates the radius, cx, and cy for each circle in the cosine graph for the
  * current iteration. Once each <circle> HTML element has been created, the
  * array of elements are returned to the render function.
  */
  circleBuilder = (dataPoints) =>
  {
    var circles = [];
    var startPoint = 1 / (dataPoints / this.state.startPoint);

    if (isNaN(startPoint))
    {
      startPoint = 1;
    }

    for (var i = 1; i <= dataPoints; i++)
    {
      var cx = (startPoint + (i * this.state.waveLength))
        * this.state.width / dataPoints;

      if (isNaN(cx))
      {
        cx = 1;
      }

      var r = this.state.width / dataPoints / this.state.radiusFactor;

      if (isNaN(r))
      {
        r = 1;
      }

      var cy = (Math.cos((startPoint + (i * this.state.freqMultiplier)) /
        this.state.waveFreq + this.state.time / this.state.waveIntervalSpeed))
        * this.state.height / this.state.waveHeight +
        this.state.height / this.state.startHeightPoint;

      if (isNaN(cy))
      {
          cy = 1;
      }

      var circle = NaN;
      if (this.state.inversion)
      {
        circle = <circle key={i}
          cx={cy + (this.state.xRotationMultiplier * (cx / 100))}
          r={r} fill={this.state.fillColor}
          cy={cx + (this.state.yRotationMultiplier * (cy / 100))}>
        </circle>;
      }
      else
      {
        circle = <circle key={i}
          cx={cx + (this.state.xRotationMultiplier * (cy / 100))}
          r={r} fill={this.state.fillColor}
          cy={cy + (this.state.yRotationMultiplier * (cx / 100))}>
        </circle>;
      }

      circles.push(circle);

    }

    return circles;
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
    else if (nextProps.waveFreq !== prevState.waveFreq)
    {
      return { waveFreq: nextProps.waveFreq };
    }
    else if (nextProps.inversion !== prevState.inversion)
    {
      return { inversion: nextProps.inversion };
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
    else if (nextProps.pointTotal !== prevState.pointTotal)
    {
      return { pointTotal: nextProps.pointTotal };
    }
    else if (nextProps.startPoint !== prevState.startPoint)
    {
      return { startPoint: nextProps.startPoint };
    }
    else if (nextProps.waveLength !== prevState.waveLength)
    {
      return { waveLength: nextProps.waveLength };
    }
    else if (nextProps.waveHeight !== prevState.waveHeight)
    {
      return { waveHeight: nextProps.waveHeight };
    }
    else if (nextProps.radiusFactor !== prevState.radiusFactor)
    {
      return { radiusFactor: nextProps.radiusFactor };
    }
    else if (nextProps.freqMultiplier !== prevState.freqMultiplier)
    {
      return { freqMultiplier: nextProps.freqMultiplier };
    }
    else if (nextProps.startHeightPoint !== prevState.startHeightPoint)
    {
      return { startHeightPoint: nextProps.startHeightPoint };
    }
    else if (nextProps.waveIntervalSpeed !== prevState.waveIntervalSpeed)
    {
      return { waveIntervalSpeed: nextProps.waveIntervalSpeed };
    }
    else if (nextProps.xRotationMultiplier !== prevState.xRotationMultiplier)
    {
      return { xRotationMultiplier: nextProps.xRotationMultiplier };
    }
    else if (nextProps.yRotationMultiplier !== prevState.yRotationMultiplier)
    {
      return { yRotationMultiplier: nextProps.yRotationMultiplier };
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
    else if (prevProps.waveFreq !== this.props.waveFreq)
    {
      this.setState({ waveFreq: this.props.waveFreq });
    }
    else if (prevProps.inversion !== this.props.inversion)
    {
      this.setState({ inversion: this.props.inversion });
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
    else if (prevProps.pointTotal !== this.props.pointTotal)
    {
      this.setState({ pointTotal: this.props.pointTotal });
    }
    else if (prevProps.startPoint !== this.props.startPoint)
    {
      this.setState({ startPoint: this.props.startPoint });
    }
    else if (prevProps.waveLength !== this.props.waveLength)
    {
      this.setState({ waveLength: this.props.waveLength });
    }
    else if (prevProps.waveHeight !== this.props.waveHeight)
    {
      this.setState({ waveHeight: this.props.waveHeight });
    }
    else if (prevProps.radiusFactor !== this.props.radiusFactor)
    {
      this.setState({ radiusFactor: this.props.radiusFactor });
    }
    else if (prevProps.freqMultiplier !== this.props.freqMultiplier)
    {
      this.setState({ freqMultiplier: this.props.freqMultiplier });
    }
    else if (prevProps.startHeightPoint !== this.props.startHeightPoint)
    {
      this.setState({ startHeightPoint: this.props.startHeightPoint });
    }
    else if (prevProps.waveIntervalSpeed !== this.props.waveIntervalSpeed)
    {
      this.setState({ waveIntervalSpeed: this.props.waveIntervalSpeed });
    }
    else if (prevProps.xRotationMultiplier !== this.props.xRotationMultiplier)
    {
      this.setState({ xRotationMultiplier: this.props.xRotationMultiplier });
    }
    else if (prevProps.yRotationMultiplier !== this.props.yRotationMultiplier)
    {
      this.setState({ yRotationMultiplier: this.props.yRotationMultiplier });
    }
  }

  /**
  * Clears the interval when the graph type changes.
  */
  componentWillUnmount = () =>
  {
    clearInterval(this.interval);
  }

  /**
  * Continually updates the time state attribute as time moves.
  */
  componentDidMount = () =>
  {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 10);
  }

} // end of Cosine

export default Cosine;
