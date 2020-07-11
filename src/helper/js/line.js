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
      .attr('stroke', this.state.fillColor)
      .attr('stroke-width', 1)
      .attr('fill', 'none')
      .attr('d', this.state.lineGenerator);

    this.updateChart()
  }

  componentDidUpdate = () =>
  {
    this.updateChart();
  }

  updateChart()
  {

    const line = select('#line' + this.state.num);

    line
      .datum(this.state.data)
      .attr('d', this.state.lineGenerator);

  }
  render() {
    return <g className="line-group" ref={this.ref} />;
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
    else if (nextProps.fillColor !== prevState.fillColor)
    {
        return { fillColor: nextProps.fillColor };
    }
    else if (nextProps.lineGenerator !== prevState.lineGenerator)
    {
      return { lineGenerator: nextProps.lineGenerator };
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
