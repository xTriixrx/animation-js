import '../css/Wave.css';
import Sine from './Sine.js';
import Cosine from './Cosine.js';
import Tangent from './Tangent.js';
import React, {PureComponent} from 'react';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 3/27/20
*
* The Wave component is created by the AnimationWavePg and controls the movement
* of any of the given wave graph types.
*/
class Wave extends PureComponent
{
  /**
  * The wave constructor creates state attributes from the prop values that are
  * passed in from the AnimationWavePg component.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      lineTotal: 1,
      width: this.props.width,
      height: this.props.height,
      waveFreq: this.props.waveFreq,
      inversion: this.props.inversion,
      fillColor: this.props.fillColor,
      graphType: this.props.graphType,
      shapeType: this.props.shapeType,
      pointTotal: this.props.pointTotal,
      startPoint: this.props.startPoint,
      waveLength: this.props.waveLength,
      waveHeight: this.props.waveHeight,
      radiusFactor: this.props.radiusFactor,
      freqMultiplier: this.props.freqMultiplier,
      startHeightPoint: this.props.startHeightPoint,
      waveIntervalSpeed: this.props.waveIntervalSpeed,
      xRotationMultiplier: this.props.xRotationMultiplier,
      yRotationMultiplier: this.props.yRotationMultiplier,
    };

    /*
      A conversion array to change a string representation to its
     respective wave component.
     */
    this.WAVE_CONVERSION = {
      "Sine": Sine,
      "Cosine": Cosine,
      "Tangent": Tangent,
    };
  }

  /**
  * Renders the current wave component based on the state attributes graphType.
  */
  render = () =>
  {
    var waveElement = this.generateWaveElement();
    var html = (
      <>
        {waveElement}
      </>
    );

    return html;
  }

  /**
  * Necessary for update: enables the component to update its internal
  * state as the result of changes in props from the AnimationWavePg component.
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
      this.setState({ fillColor: this.state.fillColor });
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
  * Called during the render method to dynamically choose the type of wave graph
  * to render and passes the necessary state values through the prop values.
  */
  generateWaveElement = () =>
  {
    const WaveType = this.WAVE_CONVERSION[this.state.graphType];

    var waveElement = (
      <WaveType width={this.state.width} height={this.state.height} fillColor={this.state.fillColor}
        pointTotal={this.state.pointTotal} lineTotal={this.state.lineTotal}
        startPoint={this.state.startPoint} startHeightPoint={this.state.startHeightPoint}
        waveIntervalSpeed={this.state.waveIntervalSpeed} radiusFactor={this.state.radiusFactor}
        waveLength={this.state.waveLength} waveHeight={this.state.waveHeight} waveFreq={this.state.waveFreq}
        freqMultiplier={this.state.freqMultiplier} xRotationMultiplier={this.state.xRotationMultiplier}
        yRotationMultiplier={this.state.yRotationMultiplier} inversion={this.state.inversion} />
    );
    return waveElement;
  }

} // end of Wave

export default Wave;
