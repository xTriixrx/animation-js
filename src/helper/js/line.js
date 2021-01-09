import React, { PureComponent } from 'react';
import { select } from 'd3-selection';

class Line extends PureComponent
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      num: this.props.num,
      data: this.props.data,
      width: this.props.width,
      height: this.props.height,
      xScale: this.props.xScale,
      yScale: this.props.yScale,
      fillColor: this.props.fillColor,
      lineGenerator: this.props.lineGenerator,
    }

    this.ref = React.createRef();
  }

  componentDidMount = () =>
  {
    const node = this.ref.current;

    select(node)
      .append('path')
      .datum(0)
      .attr('id', 'line' + this.state.num)
      .attr('stroke-width', 1)
      .attr('fill', 'none')
      .attr('d', this.state.lineGenerator);
  }

  updateChart = () =>
  {
    const line = select('#line' + this.state.num);

    line
      .attr('stroke', this.state.fillColor)
      .datum(this.state.data)
      .attr('d', this.state.lineGenerator);

  }

  render = () => 
  {
    // This is a hack... no idea why this line is forcing the state to finally update for the color
    // in the update chart call, remove this line and the line color stays yellow. I believe it has to
    // do something with the this.ref instance not being updated properly...
    this.setState({fillColor: 'black'});

    this.updateChart();
 
    return <g className="line-group" ref={this.ref}/>;
  }

  /**
  * Necessary for update: enables the component to update its internal
  * state as the result of changes in props from the Animation component.
  */
  static getDerivedStateFromProps = (nextProps, prevState) =>
  {
    if (nextProps.data !== prevState.data)
    {
      return { data: nextProps.data };
    }
    else if (nextProps.num !== prevState.num)
    {
      return { num: nextProps.num };
    }
    else if (nextProps.xScale !== prevState.xScale)
    {
      return { xScale: nextProps.xScale };
    }
    else if (nextProps.yScale !== prevState.yScale)
    {
      return { yScale: nextProps.yScale };
    }
    else if (nextProps.width !== prevState.width)
    {
      return { width: nextProps.width };
    }
    else if (nextProps.height !== prevState.height)
    {
      return { height: nextProps.height };
    }
    else if (nextProps.fillColor !== prevState.fillColor)
    {
      return { fillColor: nextProps.fillColor };
    }
    else if (nextProps.lineGenerator !== prevState.lineGenerator)
    {
      return { lineGenerator: nextProps.lineGenerator };
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
    if (prevProps.data !== this.props.data)
    {
      this.setState({ data: this.props.data });
    }
    else if (prevProps.num !== this.props.num)
    {
      this.setState({ num: this.props.num });
    }
    else if (prevProps.xScale !== this.props.xScale)
    {
      this.setState({ xScale: this.props.xScale });
    }
    else if (prevProps.yScale !== this.props.yScale)
    {
      this.setState({ yScale: this.props.yScale });
    }
    else if (prevProps.width !== this.props.width)
    {
      this.setState({ width: this.props.width });
    }
    else if (prevProps.height !== this.props.height)
    {
      this.setState({ height: this.props.height });
    }
    else if (prevProps.fillColor !== this.props.fillColor)
    {
      this.setState({ fillColor: this.props.fillColor });
    }
    else if (prevProps.lineGenerator !== this.props.lineGenerator)
    {
      this.setState({ lineGenerator: this.props.lineGenerator });
    }
  }
}

export default Line;
