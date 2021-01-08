import './css/AnimationPg.css';
import Wave from './waves/js/Wave.js';
import React, {PureComponent} from 'react';
import MovingShape from './shapes/js/MovingShape.js'
import GraphicsSlider from './helper/js/GraphicsSlider.js';
import * as amConsts from './helper/js/animationConstants.js';
import GraphicsCheckbox from './helper/js/GraphicsCheckbox.js';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 1/8/21
*
* The AnimationPg component is a page component which controls the rendering
* of all graph types that fall under the Wave or MovingShape classification.
* These types are defined in the animationConstants.js file. This component
* also renders any wave, moving shapes, or component specific control features.
*/
class AnimationPg extends PureComponent
{
  /**
  * AnimationPg constructor which contains the prop values passed in from the
  * Animation component and the default values for each wave value field defined
  * in the animationConstants.js file. Also creates a React reference to the
  * current wave graph being rendered.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      width: this.props.width,
      height: this.props.height,
      fillColor: this.props.fillColor,
      graphType: this.props.graphType,
      shapeType: this.props.shapeType,
      waveFreq: amConsts.defaultWaveFreq,
      starBorder: amConsts.defaultBorder,
      circleBorder: amConsts.defaultBorder,
      fillShape: amConsts.defaultFillShape,
      lineTotal: amConsts.defaultLineTotal,
      inversion: amConsts.defaultInversion,
      randomColor: amConsts.defaultRanColor,
      moveSpeedX: amConsts.defaultMoveSpeed,
      moveSpeedY: amConsts.defaultMoveSpeed,
      rotateStar: amConsts.defaultRotateStar,
      starPoints: amConsts.defaultStarPoints,
      shapeCount: amConsts.defaultShapeCount,
      waveHeight: amConsts.defaultWaveHeight,
      pointTotal: amConsts.defaultPointTotal,
      startPoint: amConsts.defaultStartPoint,
      waveLength: amConsts.defaultWaveLength,
      radiusFactor: amConsts.defaultRadiusFactor,
      circularRadius: amConsts.defaultCircularRadius,
      freqMultiplier: amConsts.defaultFreqMultiplier,
      startHeightPoint: amConsts.defaultYStartHeightPoint,
      waveIntervalSpeed: amConsts.defaultWaveIntervalSpeed,
      xRotationMultiplier: amConsts.defaultRotationMultiplier,
      yRotationMultiplier: amConsts.defaultRotationMultiplier,
    };

    this.state.pointTotalName = "pointTotal";
    this.state.starPointsName = "starPoints";
  }

  /**
  * Currently builds a wave component along side the form elements which
  * depends on the state of the graphType. Lastly will wrap the current wave
  * animation within a <svg> HTML element to be graphed onto the screen.
  */
  render = () =>
  {
    var forms, graph = NaN;

    if (amConsts.WAVE_TYPES.includes(this.state.graphType))
    {
      forms = this.generateWaveForms();
      graph = this.generateWaveElement(this.state.graphType);
    }
    else if (amConsts.SHAPE_TYPES.includes(this.state.graphType))
    {
      if (this.state.graphType === amConsts.CIRCLE)
      {
        forms = this.generateMovingShapeForms();
        graph = this.generateMovingCircleElements(this.state.shapeCount);
      }
      else if (this.state.graphType === amConsts.STAR)
      {
        forms = this.generateMovingShapeForms();
        graph = this.generateMovingStarElements(this.state.shapeCount);
      }
    }

    var html = (
      <>
      {forms}
      <div className="fullscreen">
        <svg width={this.state.width} height={this.state.height}
          preserveAspectRatio="xMinYMin slice">
          {graph}
        </svg>
      </div>
      </>
  );
    return html;
  }

  /**
  * Generates the JSX necessary to display a wave classification based on the
  * graphType of the object.
  */
  generateWaveElement = (type) =>
  {
    var waveElement = (
      <>
        <Wave width={this.state.width} height={this.state.height}
          graphType={type} shapeType={this.state.shapeType}
          pointTotal={this.state.pointTotal} startPoint={this.state.startPoint}
          waveLength={this.state.waveLength} waveHeight={this.state.waveHeight}
          waveFreq={this.state.waveFreq} inversion={this.state.inversion}
          radiusFactor={this.state.radiusFactor} fillColor={this.state.fillColor}
          freqMultiplier={this.state.freqMultiplier}
          startHeightPoint={this.state.startHeightPoint}
          waveIntervalSpeed={this.state.waveIntervalSpeed}
          xRotationMultiplier={this.state.xRotationMultiplier}
          yRotationMultiplier={this.state.yRotationMultiplier} />;
      </>
    );

    return waveElement;
  }

  /**
  * Generates the JSX necessary to display a movingShape classification of the
  * Star specific component.
  */
  generateMovingStarElements = (elementNum) =>
  {
    var movingElements = [];
    var movingElement = NaN;

    for (var i = 0; i < elementNum; i++)
    {
      if (this.state.randomColor)
      {
        movingElement = (
          <>
            <MovingShape width={this.state.width} height={this.state.height}
              graphType={this.state.graphType} shapeType={this.state.shapeType}
              radius={this.state.circularRadius}
              rotate={this.state.rotateStar}
              points={this.state.starPoints}
              moveSpeedX={this.state.moveSpeedX}
              moveSpeedY={this.state.moveSpeedY}
              fillShape={this.state.fillShape}
              starBorderWidth={this.state.starBorder}
              fillColor={'#'+ (Math.random() * 0xFFFFFF << 0).toString(16)}
              startX={Math.random() * this.state.width}
              startY={Math.random() * this.state.height} />
          </>
        );
      }
      else
      {
        movingElement = (
          <>
            <MovingShape width={this.state.width} height={this.state.height}
              graphType={this.state.graphType} shapeType={this.state.shapeType}
              radius={this.state.circularRadius}
              rotate={this.state.rotateStar}
              points={this.state.starPoints}
              moveSpeedX={this.state.moveSpeedX}
              moveSpeedY={this.state.moveSpeedY}
              fillShape={this.state.fillShape}
              fillColor={this.state.fillColor}
              starBorderWidth={this.state.starBorder}
              startX={Math.random() * this.state.width}
              startY={Math.random() * this.state.height} />
          </>
        );
      }
      movingElements.push(movingElement);
    }

    return movingElements;
  }

  /**
  * Generates the JSX necessary to display a movingShape classification of the
  * Circle specific component.
  */
  generateMovingCircleElements = (elementNum) =>
  {
    var movingElements = [];
    var movingElement = NaN;

    for (var i = 0; i < elementNum; i++)
    {
      if (this.state.randomColor)
      {
        movingElement = (
          <>
            <MovingShape key={i} width={this.state.width} height={this.state.height}
              graphType={this.state.graphType} shapeType={this.state.shapeType}
              radius={this.state.circularRadius}
              moveSpeedX={this.state.moveSpeedX}
              moveSpeedY={this.state.moveSpeedY}
              fillShape={this.state.fillShape}
              circleBorderWidth={this.state.circleBorder}
              fillColor={'#'+ (Math.random() * 0xFFFFFF << 0).toString(16)}
              startX={Math.random() * this.state.width}
              startY={Math.random() * this.state.height} />
          </>
        );
      }
      else
      {
        movingElement = (
          <>
            <MovingShape key={i} width={this.state.width} height={this.state.height}
              graphType={this.state.graphType} shapeType={this.state.shapeType}
              radius={this.state.circularRadius}
              moveSpeedX={this.state.moveSpeedX}
              moveSpeedY={this.state.moveSpeedY}
              fillShape={this.state.fillShape}
              fillColor={this.state.fillColor}
              circleBorderWidth={this.state.circleBorder}
              startX={Math.random() * this.state.width}
              startY={Math.random() * this.state.height} />
          </>
        );
      }
      
      movingElements.push(movingElement);
    }

    return movingElements;
  }

  /**
  * Generates the forms necessary for the MovingShape classification page. The forms
  * includes Star component specific form elements as well as sliders, checkboxes,
  * and input boxes.
  */
  generateMovingShapeForms = () =>
  {
    var borderSlider = "";
    var starRotSlider = "";
    var starPointInput = "";

    if (this.state.graphType === amConsts.STAR)
    {
        starRotSlider = (
          <>
          <label className="slider-header">Rotate Star</label>
          <GraphicsSlider type={amConsts.ROTATESTAR}
            callback={this.rotateStarHandler} />
          </>
        );

        starPointInput = (
          <>
            <label>
              Star Point Total:
              <input type="text" name="starPoints"
                value={this.state.starPoints} onChange={this.handleChange} />
            </label>
          </>
        );

        borderSlider = (
          <>
            <label className="slider-header">Star Border Width</label>
          <GraphicsSlider type={amConsts.STARBORDER}
            callback={this.starBorderHandler} />
          </>
        );
    }
    else if (this.state.graphType === amConsts.CIRCLE)
    {
      borderSlider = (
        <>
          <label className="slider-header">Circle Border Width</label>
        <GraphicsSlider type={amConsts.CIRCLEBORDER}
          callback={this.circleBorderHandler} />
        </>
      );
    }
    var forms = (
      <>
      <form>
        <label>
          Shape Total:
          <input type="text" name="shapeCount"
            value={this.state.shapeCount} onChange={this.handleChange} />
        </label>
        {starPointInput}
        <label>
          Random Color Checkbox:
          <GraphicsCheckbox callback={this.handleRandomColorCheckbox} />
        </label>
        <label>
          Fill Shapes Checkbox:
          <GraphicsCheckbox callback={this.handleFillShapeCheckbox} />
        </label>
      </form>
      <form>
        <div className="sliders-root">
          {starRotSlider}
          {borderSlider}
          <label className="slider-header">Radius</label>
          <GraphicsSlider type={amConsts.CIRCULARRADIUS}
            callback={this.circularRadiusHandler} />
          <label className="slider-header">X Movement Speed</label>
          <GraphicsSlider type={amConsts.MOVESPEED}
            callback={this.moveSpeedYHandler} />
          <label className="slider-header">Y Movement Speed</label>
          <GraphicsSlider type={amConsts.MOVESPEED}
            callback={this.moveSpeedXHandler} />
        </div>
      </form>
      </>
    );

    return forms;
  }

  /**
  * Generates the forms necessary for the wave classification page. The forms
  * includes a non-slider and slider form which also contains a set of dependant
  * sliders that need to be determined prior to rendering using the graphType
  * state attribute.
  */
  generateWaveForms = () =>
  {
    var dependantSliders = this.generateDependantSliders();
    var nonSliderForm = this.generateNonSliderForm();
    var sliderForm = this.generateSliderForm(dependantSliders);

    var style = {
      width: this.state.width,
    }

    var waveForms = (
      <>
        <div style={style}>
          {nonSliderForm}
          {sliderForm}
        </div>
      </>
    );
    return waveForms;
  }

  /**
  * Generates the non-slider form which contains 3 <input> text HTML elements
  * and a GraphicCheckbox component.
  */
  generateNonSliderForm = () =>
  {
    var nonSliderForm = (
      <>
        <div id="formContainer">
          <div className="nonSliderForm">
            <form>

              <label>
                Points:
                <input id="pointInput" type="text" name="pointTotal"
                  value={this.state.pointTotal} onChange={this.handleChange} />
              </label>

              <label>
                Frequency Multiplier:
                <input type="text" name="freqMultiplier"
                  value={this.state.freqMultiplier} onChange={this.handleChange} />
              </label>

              <label>
                Inversion Checkbox:
                <GraphicsCheckbox callback={this.handleInversionCheckbox} />
              </label>

             </form>
           </div>
         </div>
      </>
    );

    return nonSliderForm;
  }

  /**
  * Generates the slider form which contains 2 layers of sliders to help change
  * the inputs of the current wave graphType. The argument depSliders is created
  * by the generateDependantSliders() function and is placed in the first row
  * of sliders.
  */
  generateSliderForm = (depSliders) =>
  {
    var sliderForm = (
      <>
        <form>
          <div className="sliders-root">
            <label className="slider-header">X Start Point</label>
            <GraphicsSlider type={amConsts.XSTARTPOINT}
              callback={this.xStartPointSlideHandler} />

            <label className="slider-header">Wave Interval Speed</label>
            <GraphicsSlider type={amConsts.WAVEINTERVALSPEED}
              callback={this.waveIntervalSpeedSlideHandler} />

            <label className="slider-header">Y Start Point</label>
            <GraphicsSlider type={amConsts.YSTARTPOINT}
              callback={this.yStartPointSlideHandler} />

            {depSliders}
          </div>

          <div className="sliders-root">
            <label className="slider-header">Radius Factor</label>
            <GraphicsSlider type={amConsts.RADIUSFACTOR}
              callback={this.radiusFactorSlideHandler} />

            <label className="slider-header">Wave Length</label>
            <GraphicsSlider type={amConsts.WAVELENGTH}
              callback={this.waveLengthSlideHandler} />

            <label className="slider-header">CX Rotation Multiplier</label>
            <GraphicsSlider type={amConsts.XROTMULTI}
              callback={this.xRotationMultiplierSlideHandler} />

            <label className="slider-header">CY Rotation Multiplier</label>
            <GraphicsSlider type={amConsts.YROTMULTI}
              callback={this.yRotationMultiplierSlideHandler}  />
          </div>
        </form>
      </>
    );

    return sliderForm;
  }

  /**
  * Generates the dependant sliders which needs to be determined prior to
  * rendering. This function checks the current value of the state attribute
  * graphType to do its determination.
  */
  generateDependantSliders = () =>
  {
    var sliders = '';

    if (this.state.graphType === amConsts.SINE ||
      this.state.graphType === amConsts.COSINE)
    {
      sliders = (
        <>
          <label className="slider-header">Wave Height</label>
          <GraphicsSlider type={amConsts.SINCOSWAVEHEIGHT}
            callback={this.sinCosWaveHeightSlideHandler} />

          <label className="slider-header">Wave Frequency</label>
          <GraphicsSlider type={amConsts.SINCOSWAVEFREQ}
            callback={this.sinCosWaveFreqSlideHandler} />
        </>
        );
    }
    else if (this.state.graphType === amConsts.TANGENT)
    {
      sliders = (
        <>
          <label className="slider-header">Wave Height</label>
          <GraphicsSlider type={amConsts.TANWAVEHEIGHT}
            callback={this.tangentWaveHeightSlideHandler} />

          <label className="slider-header">Wave Frequency</label>
          <GraphicsSlider type={amConsts.TANWAVEFREQ}
            callback={this.tangentWaveFreqSlideHandler} />
        </>
      );
    }

    return sliders;
  }

  /**
  * Necessary for update: enables the component to update its internal
  * state as the result of changes in props from the Animation component.
  */
  static getDerivedStateFromProps = (nextProps, prevState) =>
  {
    if(nextProps.graphType !== prevState.graphType)
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
    else if (nextProps.width !== prevState.width)
    {
      return { width: nextProps.width };
    }
    else if (nextProps.height !== prevState.height)
    {
      return { height: nextProps.height };
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
    if(prevProps.graphType !== this.props.graphType)
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
    else if (prevProps.width !== this.props.width)
    {
      this.setState({ width: this.props.width });
    }
    else if (prevProps.height !== this.props.height)
    {
      this.setState({ height: this.props.height });
    }
  }

  /**
  * Used within the first of the two wave forms to update the state attributes of
  * pointTotal, lineTotal, or freqMultiplier. For the pointTotal, it guarantees
  * that the point total cannot be any less then 10 points. This feature helps
  * prevent bugs that occur during the rendering of a null state.
  */
  handleChange = (event) =>
  {
    if (event.target.name === this.state.pointTotalName)
    {
      if (event.target.value < 15)
      {
        this.setState({ pointTotal: 10 });
      }
      else
      {
        this.setState({ pointTotal: event.target.value });
      }
    }
    else if (event.target.name === this.state.starPointsName)
    {
      if (event.target.value > amConsts.starPointsMax)
      {
        this.setState({ starPoints: amConsts.starPointsMax });
      }
      else
      {
        this.setState({ starPoints: event.target.value });
      }
    }
    else
    {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  /**
  * Callback for updating state for moveSpeedX attribute.
  */
  moveSpeedXHandler = (event, value) =>
  {
    this.setState({ moveSpeedX: value });
  }

  /**
  * Callback for updating state for moveSpeedY attribute.
  */
  moveSpeedYHandler = (event, value) =>
  {
    this.setState({ moveSpeedY: value });
  }

  /**
  * Callback for updating state for circularRadius attribute.
  */
  circularRadiusHandler = (event, value) =>
  {
      this.setState({ circularRadius: value });
  }

  /**
  * Callback for updating state for startPoint attribute.
  */
  xStartPointSlideHandler = (event, value) =>
  {
    this.setState({ startPoint: value });
  }

  /**
  * Callback for updating state for waveIntervalSpeed attribute.
  */
  waveIntervalSpeedSlideHandler = (event, value) =>
  {
    this.setState({ waveIntervalSpeed: value });
  }

  /**
  * Callback for updating state for radiusFactor attribute.
  */
  radiusFactorSlideHandler = (event, value) =>
  {
    this.setState({ radiusFactor: value });
  }

  /**
  * Callback for updating state for waveLength attribute.
  */
  waveLengthSlideHandler = (event, value) =>
  {
    this.setState({ waveLength: value });
  }

  /**
  * Callback for updating state for startHeightPoint attribute.
  */
  yStartPointSlideHandler = (event, value) =>
  {
    this.setState({ startHeightPoint: value });
  }

  /**
  * Callback for updating state for waveHeight attribute when a sin/cos graph
  * is being used.
  */
  sinCosWaveHeightSlideHandler = (event, value) =>
  {
    this.setState({ waveHeight: value });
  }

  /**
  * Callback for updating state for waveHeight attribute when a tangent graph
  * is being used.
  */
  tangentWaveHeightSlideHandler = (event, value) =>
  {
    this.setState({ waveHeight: value });
  }

  /**
  * Callback for updating state for waveFreq attribute when a sin/cos graph
  * is being used.
  */
  sinCosWaveFreqSlideHandler = (event, value) =>
  {
    this.setState({ waveFreq: value });
  }

  /**
  * Callback for updating state for waveFreq attribute when a tangent graph
  * is being used.
  */
  tangentWaveFreqSlideHandler = (event, value) =>
  {
    this.setState({ waveFreq: value });
  }

  /**
  * Callback for updating state for xRotationMultiplier attribute.
  */
  xRotationMultiplierSlideHandler = (event, value) =>
  {
    this.setState({ xRotationMultiplier: value });
  }

  /**
  * Callback for updating state for yRotationMultiplier attribute.
  */
  yRotationMultiplierSlideHandler = (event, value) =>
  {
    this.setState({ yRotationMultiplier: value });
  }

  /**
  * Callback for updating state for rotateStar attribute.
  */
  rotateStarHandler = (event, value) =>
  {
    this.setState({ rotateStar: value });
  }

  /**
   * Callback for updating state for starBorder attribute.
   */
  starBorderHandler = (event, value) =>
  {
    this.setState({ starBorder: value });
  }

  /**
   * Callback for updating state for circleBorder attribute.
   */
  circleBorderHandler = (event, value) =>
  {
    this.setState({ circleBorder: value });
  }
  /**
  * Callback for updating state for inversion attribute.
  */
  handleInversionCheckbox = (event, value) =>
  {
    this.setState({ inversion: value });
  }

  /**
  * Callback for updating state for random color attribute.
  */
  handleRandomColorCheckbox = (event, value) =>
  {
    this.setState({ randomColor: value });
  }

  /**
   * Callback for updating state for filling in shapes attribute.
   */
  handleFillShapeCheckbox = (event, value) =>
  {
    this.setState({ fillShape: value });
  }

} // end of AnimationPg

export default AnimationPg;
