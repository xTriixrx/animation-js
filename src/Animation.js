import './css/Animation.css';
import { HuePicker } from 'react-color';
import FunctionPg from './FunctionPg.js';
import React, {PureComponent} from 'react';
import AnimationPg from './AnimationPg.js';
import PageDropDown from './helper/js/PageDropDown.js';
import * as amConsts from './helper/js/animationConstants.js';
import AnimationDropDown from './helper/js/AnimationDropDown.js';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 5/7/20
*
* The Animation component controls the different types of graphing components
* based on input from the AnimationEngine and from the user. Currently, there
* are only 2 different types of graph classifications: wave and shapes. The
* shapes classification may get redefined into more classifications later on.
*/
class Animation extends PureComponent
{
  /**
  * Constructor which retrieves the current window height and width as well as
  * the arguments passed in from the AnimationEngine component.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      colorMenu: false,
      fillColor: "yellow",
      width: window.innerWidth,
      height: window.innerHeight,
      pageType: this.props.pageType,
      graphType: this.props.graphType,
      shapeType: this.props.shapeType,
    };

    window.addEventListener('resize', this.handleResize);
  }

  /**
  * Based on the Animation components' state attribute shapeType will display
  * either a wave or shape page. All classification types will have an
  * AnimationDropDown menu component which will control the different types of
  * graphs (this also will update the shapeType).
  */
  render = () =>
  {
    var page = this.generatePage();

    var html = (
      <>
        {page}
      </>
    );

    return html;
  }

  /**
  * Generates different page types based on the pageType state value.
  *
  */
  generatePage = () =>
  {
    var page = NaN;
    if (this.state.pageType === amConsts.ANIMATIONS)
    {
      page = (
        <>
          <div id="formContainer">
            <div id="animationConstantHeader">
              <label id="huePickerLabel">Graph Color</label>
              <div className="huePickerContainer" width={this.state.width}>
                <HuePicker onChangeComplete={this.handleColorChange} />
              </div>
              <PageDropDown pageType={this.state.pageType}
                callback={this.pageTypeUpdater} />
              <AnimationDropDown id="graphDropDown" graphType={this.state.graphType}
                callback={this.graphTypeUpdater} />
            </div>
          </div>
          <AnimationPg width={this.state.width}
            height={this.state.height}
            graphType={this.state.graphType}
            shapeType={this.state.shapeType}
            fillColor={this.state.fillColor} />
        </>
      );
    }
    else if (this.state.pageType === amConsts.FUNCTIONS)
    {
      page = (
        <>
          <div id="formContainer">
            <div id="animationConstantHeader">
              <label id="huePickerLabel">Graph Color</label>
              <div className="huePickerContainer" width={this.state.width}>
                <HuePicker onChangeComplete={this.handleColorChange} />
              </div>
              <PageDropDown id="graphDropDown" pageType={this.state.pageType}
                callback={this.pageTypeUpdater} />
            </div>
          </div>
          <FunctionPg width={this.state.width}
            height={this.state.height}
            graphType={this.state.graphType}
            fillColor={this.state.fillColor} />
        </>
      );
    }
    return page;
  }

  /**
  * Updates the dimensions of the window size of the window is resized during the
  * application lifecycle.
  */
  updateDimensions = () =>
  {
    if (this.state.width !== window.innerWidth)
    {
      this.setState({ width: window.innerWidth });
    }
    if (this.state.height !== window.innerHeight)
    {
      this.setState({ height: window.innerHeight });
    }
  }

  /**
  * Used by the AnimationDropDown menu component to forward updates to the page
  * type from the menu to the Animation object to re-render the specified page.
  *
  */
  pageTypeUpdater = (event) =>
  {
    this.setState({ pageType: event.target.value });
  }

  /**
  * Used by the AnimationDropDown menu component to forward the update from the
  * menu to the Animation object to re-render the Animation scenario.
  */
  graphTypeUpdater = (event) =>
  {
    if (amConsts.WAVE_TYPES.includes(event.target.value))
    {
      this.setState({
        shapeType: amConsts.WAVE,
        graphType: event.target.value,
      });
    }
    if (amConsts.SHAPE_TYPES.includes(event.target.value))
    {
      this.setState({
        shapeType: amConsts.SHAPE,
        graphType: event.target.value,
      });
    }
  }

  /**
  * Window event listener to call the updateDimensions function.
  */
  handleResize = () =>
  {
    this.updateDimensions();
  }

  /**
  * Updates the fillColor state value when this handler is triggered by the
  * huePicker.
  */
  handleColorChange = (color) =>
  {
    this.setState({ fillColor: color.hex });
  }

  /**
  * Updates the dimensions on component mounting.
  */
  componentDidMount = () =>
  {
    this.updateDimensions();
  }

} // end of Animation

export default Animation;
