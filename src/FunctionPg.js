import React, { PureComponent } from 'react';
import { evaluate, derivative, sin, pi } from 'mathjs';
import { scaleLinear } from 'd3-scale';
import Line from './helper/js/line.js';
import XYAxis from './helper/js/xy-axis.js';
import * as fnConsts from './helper/js/functionConstants.js';
import { line, curveMonotoneX, curveBasis, curveLinear } from 'd3-shape';

class FunctionPg extends PureComponent
{

  constructor(props)
  {
    super(props);

    this.margins = {top: 50, right: 50, bottom: 100, left: 50};

    this.state =
    {
      moving_x: 0,
      moving_y: 0,
      functionString: 'x^2',
      width: this.props.width,
      height: this.props.height,
      fillColor: this.props.fillColor,
      maxXDomain: 5,
      maxYRange: 5,
      maxYDomain: 50,
      minXDomain: -5,
      minYDomain: 0,
      minYRange: -1,

    }

    this.axisWidth = this.state.width - this.margins.left - this.margins.right;
    this.axisHeight = this.state.height - this.margins.top - this.margins.bottom;

  }

  render = () =>
  {
    var xScale = scaleLinear()
          .domain([this.state.minXDomain, this.state.maxXDomain]) // input
          .range([0, this.axisWidth]); // output

    var yScale = scaleLinear()
          .domain([this.state.minYDomain, this.state.maxYDomain]) // input
          .range([this.axisHeight, 0]); // output

    var curveGenerator = line()
          .x(function(d) { return xScale(d.x); })
          .y(function(d) { return yScale(d.y); })
          .curve(curveBasis);

    var linearGenerator = line()
          .x(function(d) { return xScale(d.x); })
          .y(function(d) { return yScale(d.y); })
          .curve(curveLinear);

    var dataset = this.calculateFunctionPoints();
    var derivativeDataset = this.calculateTangentAtPointX(this.state.moving_x);

    var forms = this.generateFunctionForms();
    
    return (
      <>
        {forms}
        <div>
          <label>
            {this.state.moving_x}
          </label>
          <label>
            {this.state.moving_y}
          </label>
        </div>
        <div onMouseMove={this.onMouseMove.bind(this)}>
          <svg
            className="lineChartSvg"
            width={this.axisWidth + this.margins.left + this.margins.right}
            height={this.axisHeight + this.margins.top + this.margins.bottom}
          >
            <g transform={`translate(${this.margins.left}, ${this.margins.top})`}>
              <XYAxis xScale={xScale} yScale={yScale} width={this.axisWidth} height={this.axisHeight} />
              <Line data={dataset} xScale={xScale} yScale={yScale} fillColor={this.state.fillColor}
                lineGenerator={curveGenerator} width={this.axisWidth} height={this.axisHeight} num={"1"} />
              <Line data={derivativeDataset} xScale={xScale} yScale={yScale} fillColor={this.state.fillColor}
                  lineGenerator={linearGenerator} width={this.axisWidth} height={this.axisHeight} num={"2"} />
          </g>
          </svg>
        </div>
      </>
    );
  }

  generateGraph = () =>
  {

  }

  generateFunctionForms = () =>
  {
    var form = (
      <>
        <label>
          Polynomial Input:
          <input type="text" name="polyInput"
            value={this.state.functionString} onChange={this.handleChange} />
        </label>
        <label>
          Derivative: {this.calculateDerivative(this.state.functionString)}
        </label>
      </>
    );

    return form;
  }

  // Returns empty string or string of derivative
  calculateDerivative = (func) =>
  {
    var der = "";

    try 
    {
      var der = String(derivative(func, 'x'));
    }
    catch(err)
    {
      der = "";
    }
    finally 
    {
      return der;
    }
  }

  // Evaluates func string at x
  evaluateFunction(func, x)
  {
    var val = "";

    let scope = {
      x: x,
    }

    try
    {
      val = evaluate(func, scope);
    }
    catch (err)
    {
      val = "";
    }
    finally 
    {
      return val;
    }    
  }

  calculateFunctionPoints = () =>
  {
    var step = 1;
    var data = [];
    for (var i = this.state.minXDomain; i < this.state.maxXDomain + 10; i += step)
    {
        data.push({
            x: i,
            y: this.evaluateFunction(this.state.functionString, i),
        });
    }
    return data;
  }

  calculateTangentAtPointX = (xVal) =>
  {
    var step = 1;
    var data = [];
    var slope = this.evaluateFunction(this.calculateDerivative(this.state.functionString), xVal);
    var yInt = this.calculateYIntercept(xVal, slope);
    
    var func  = slope + "x +" + String(yInt);

    for (var i = this.state.minXDomain; i < this.state.maxXDomain + 10; i += step)
    {
        data.push({
            x: i,
            y: this.evaluateFunction(func, i)
        });
    }
    return data;
  }

  calculateYIntercept = (xVal, slope) =>
  {
    var yInt = - (xVal * slope) + this.evaluateFunction(this.state.functionString, xVal);

    return yInt;
  }

  onMouseMove = (event) =>
  {
    var xScale = scaleLinear()
          .domain([this.state.minXDomain, this.state.maxXDomain]) // input
          .range([0, this.state.width]); // output

    this.setState({
        moving_x: this.round(xScale.invert(event.screenX), 3),
        moving_y: this.round(this.evaluateFunction(this.state.functionString, this.state.moving_x), 3),//this.round(this.calculateY(this.state.moving_x, -1, 10, 2), 3),
    });
  }

  round = (value, decimals) =>
  {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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
    else if (nextProps.fillColor !== prevState.fillColor)
    {
      return { fillColor: nextProps.fillColor };
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
    else if (prevProps.fillColor !== this.props.fillColor)
    {
      this.setState({ fillColor: this.props.fillColor});
    }
  }

  handleChange = (event) =>
  {
    if (event.target.name === "polyInput")
    {
      this.setState({ functionString: event.target.value });
    }
  }
}

export default FunctionPg;
