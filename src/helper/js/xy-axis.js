import Axis from './axis.js';
import React, { PureComponent } from 'react';

class XYAxis extends PureComponent
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      width: this.props.width,
      height: this.props.height,
      xScale: this.props.xScale,
      yScale: this.props.yScale,
    }
  }

  render = () =>
  {
    const xSettings = {
      scale: this.state.xScale,
      orient: 'bottom',
      transform: `translate(0, ${this.state.height})`,
    };
    const ySettings = {
      scale: this.state.yScale,
      orient: 'left',
      transform: 'translate(0, 0)',
      ticks: 6,
    };

    return (
      <>
        <g className="axis-group">
          <Axis {...xSettings} />
          <Axis {...ySettings} />
        </g>
      </>
    );
  }

  /**
  * Necessary for update: enables the component to update its internal
  * state as the result of changes in props from the Animation component.
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
    else if (nextProps.xScale !== prevState.xScale)
    {
      return { xScale: nextProps.xScale };
    }
    else if (nextProps.yScale !== prevState.yScale)
    {
      return { yScale: nextProps.yScale };
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
    else if (prevProps.xScale !== this.props.xScale)
    {
      this.setState({ xScale: this.props.xScale });
    }
    else if (prevProps.yScale !== this.props.yScale)
    {
      this.setState({ yScale: this.props.yScale });
    }
  }

}

export default XYAxis;
