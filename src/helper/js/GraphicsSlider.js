import "../css/GraphicsSlider.css";
import React, {PureComponent} from 'react';
import Slider from '@material-ui/core/Slider';
import * as amConsts from './animationConstants';
import { withStyles } from '@material-ui/core/styles';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 1/8/21
*
* GraphicsSlider is a custom slider component based off of the material-ui Slider
* component. It uses the material-ui component as its base and passes custom props
* based on the type of the graph being displayed currently.
*/
class GraphicsSlider extends PureComponent
{

  /**
  * Saves type for the slider and creates references to state variables that will
  * be used during the render function call.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      type: this.props.type,
    };

    this.boxShadow =
      '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

    this.mySlider = this.generateMySlider();
    this.marks = this.determineMarks(this.state.type);
    this.min = this.determineMinValue(this.state.type);
    this.max = this.determineMaxValue(this.state.type);
    this.step = this.determineStepValue(this.state.type);
    this.def = this.determineDefaultValue(this.state.type);
  }

  /**
  * Renders the state attribute mySlider with prop values calculated during the
  * constructor.
  */
  render = () =>
  {
    var html = (
      <>
        <this.mySlider className="GraphicsSlider" aria-label="graphic-slider" step={this.step}
          min={this.min} max={this.max} marks={this.marks} defaultValue={this.def}
          onChange={this.props.callback} valueLabelDisplay="on" />
      </>
    );

    return html;
  }

  /**
  * Determines and returns set of marks for the marks prop based on the graph type.
  */
  determineMarks = (type) =>
  {
    if (type === amConsts.SINCOSWAVEHEIGHT)
    {
      return amConsts.sinCosWaveHeightMarks;
    }
    else if (type ===amConsts.TANWAVEHEIGHT)
    {
      return amConsts.tangentWaveHeightMarks;
    }
    else if (type === amConsts.SINCOSWAVEFREQ)
    {
      return amConsts.sinCosWaveFreqMarks;
    }
    else if (type === amConsts.TANWAVEFREQ)
    {
      return amConsts.tangentWaveFreqMarks;
    }
    else if (type === amConsts.XSTARTPOINT)
    {
      return amConsts.xStartPointMarks;
    }
    else if (type === amConsts.YSTARTPOINT)
    {
      return amConsts.yStartHeightPointMarks;
    }
    else if (type === amConsts.WAVEINTERVALSPEED)
    {
      return amConsts.waveIntervalSpeedMarks;
    }
    else if (type ===  amConsts.RADIUSFACTOR)
    {
      return amConsts.radiusFactorMarks;
    }
    else if (type === amConsts.WAVELENGTH)
    {
      return amConsts.waveLengthMarks;
    }
    else if (type === amConsts.XROTMULTI)
    {
      return amConsts.rotationMultiplierMarks;
    }
    else if (type === amConsts.YROTMULTI)
    {
      return amConsts.rotationMultiplierMarks;
    }
    else if (type === amConsts.CIRCULARRADIUS)
    {
      return amConsts.circularRadiusMarks;
    }
    else if (type === amConsts.MOVESPEED)
    {
      return amConsts.moveSpeedMarks;
    }
    else if (type === amConsts.ROTATESTAR)
    {
      return amConsts.rotateStarMarks;
    }
    else if (type === amConsts.STARPOINT)
    {
      return amConsts.starPointsMarks;
    }
    else if (type === amConsts.STARBORDER)
    {
      return amConsts.starBorderMarks;
    }
    else if (type === amConsts.CIRCLEBORDER)
    {
      return amConsts.circleBorderMarks;
    }
  }

  /**
  * Determines and returns the min value for the min prop based on the graph type.
  */
  determineMinValue = (type) =>
  {
    if (type === amConsts.SINCOSWAVEHEIGHT)
    {
      return amConsts.waveHeightMin;
    }
    else if (type === amConsts.TANWAVEHEIGHT)
    {
      return amConsts.waveHeightMin;
    }
    else if (type === amConsts.SINCOSWAVEFREQ)
    {
      return amConsts.waveFreqMin;
    }
    else if (type === amConsts.TANWAVEFREQ)
    {
      return amConsts.waveFreqMin;
    }
    else if (type === amConsts.XSTARTPOINT)
    {
      return amConsts.xStartPointMin;
    }
    else if (type === amConsts.YSTARTPOINT)
    {
      return amConsts.yStartHeightPointMin;
    }
    else if (type === amConsts.WAVEINTERVALSPEED)
    {
      return amConsts.waveIntervalSpeedMin;
    }
    else if (type === amConsts.RADIUSFACTOR)
    {
      return amConsts.radiusFactorMin;
    }
    else if (type === amConsts.WAVELENGTH)
    {
      return amConsts.waveLengthMin;
    }
    else if (type === amConsts.XROTMULTI)
    {
      return amConsts.rotationMultiplierMin;
    }
    else if (type === amConsts.YROTMULTI)
    {
      return amConsts.rotationMultiplierMin;
    }
    else if (type === amConsts.CIRCULARRADIUS)
    {
      return amConsts.circularRadiusMin;
    }
    else if (type === amConsts.MOVESPEED)
    {
      return amConsts.moveSpeedMin;
    }
    else if (type === amConsts.ROTATESTAR)
    {
      return amConsts.rotateStarMin;
    }
    else if (type === amConsts.STARPOINT)
    {
      return amConsts.starPointsMin;
    }
    else if (type === amConsts.STARBORDER)
    {
      return amConsts.starBorderMin;
    }
    else if (type === amConsts.CIRCLEBORDER)
    {
      return amConsts.circleBorderMin;
    }
  }

  /**
  * Determines and returns the max value for the max prop based on the graph type.
  */
  determineMaxValue = (type) =>
  {
    if (type === amConsts.SINCOSWAVEHEIGHT)
    {
      return amConsts.ySinCosWaveHeightMax;
    }
    else if (type === amConsts.TANWAVEHEIGHT)
    {
      return amConsts.yTangentWaveHeightMax;
    }
    else if (type === amConsts.SINCOSWAVEFREQ)
    {
      return amConsts.sinCosWaveFreqMax;
    }
    else if (type === amConsts.TANWAVEFREQ)
    {
      return amConsts.tangentWaveFreqMax;
    }
    else if (type === amConsts.XSTARTPOINT)
    {
      return amConsts.xStartPointMax;
    }
    else if (type === amConsts.YSTARTPOINT)
    {
      return amConsts.yStartHeightPointMax;
    }
    else if (type === amConsts.WAVEINTERVALSPEED)
    {
      return amConsts.waveIntervalSpeedMax;
    }
    else if (type === amConsts.RADIUSFACTOR)
    {
      return amConsts.radiusFactorMax;
    }
    else if (type === amConsts.WAVELENGTH)
    {
      return amConsts.waveLengthMax;
    }
    else if (type === amConsts.XROTMULTI)
    {
      return amConsts.rotationMultiplierMax;
    }
    else if (type === amConsts.YROTMULTI)
    {
      return amConsts.rotationMultiplierMax;
    }
    else if (type === amConsts.CIRCULARRADIUS)
    {
      return amConsts.circularRadiusMax;
    }
    else if (type === amConsts.MOVESPEED)
    {
      return amConsts.moveSpeedMax;
    }
    else if (type === amConsts.ROTATESTAR)
    {
      return amConsts.rotateStarMax;
    }
    else if (type === amConsts.STARPOINT)
    {
      return amConsts.starPointsMax;
    }
    else if (type === amConsts.STARBORDER)
    {
      return amConsts.starBorderMax;
    }
    else if (type === amConsts.CIRCLEBORDER)
    {
      return amConsts.circleBorderMax;
    }
  }

  /**
  * Determines and returns the default value for the default prop based on the
  * graph type.
  */
  determineDefaultValue = (type) =>
  {
    if (type === amConsts.SINCOSWAVEHEIGHT)
    {
      return amConsts.defaultWaveHeight;
    }
    else if (type === amConsts.TANWAVEHEIGHT)
    {
      return amConsts.defaultWaveHeight;
    }
    else if (type === amConsts.SINCOSWAVEFREQ)
    {
      return amConsts.defaultWaveFreq;
    }
    else if (type === amConsts.TANWAVEFREQ)
    {
      return amConsts.defaultWaveFreq;
    }
    else if (type === amConsts.XSTARTPOINT)
    {
      return amConsts.defaultStartPoint;
    }
    else if (type === amConsts.YSTARTPOINT)
    {
      return amConsts.defaultYStartHeightPoint;
    }
    else if (type === amConsts.WAVEINTERVALSPEED)
    {
      return amConsts.defaultWaveIntervalSpeed;
    }
    else if (type === amConsts.RADIUSFACTOR)
    {
      return amConsts.defaultRadiusFactor;
    }
    else if (type === amConsts.WAVELENGTH)
    {
      return amConsts.defaultWaveLength;
    }
    else if (type === amConsts.XROTMULTI)
    {
      return amConsts.defaultRotationMultiplier;
    }
    else if (type === amConsts.YROTMULTI)
    {
      return amConsts.defaultRotationMultiplier;
    }
    else if (type === amConsts.CIRCULARRADIUS)
    {
      return amConsts.defaultCircularRadius;
    }
    else if (type === amConsts.MOVESPEED)
    {
      return amConsts.defaultMoveSpeed;
    }
    else if (type === amConsts.ROTATESTAR)
    {
      return amConsts.defaultRotateStar;
    }
    else if (type === amConsts.STARPOINT)
    {
      return amConsts.defaultStarPoints;
    }
    else if (type === amConsts.STARBORDER)
    {
      return amConsts.defaultBorder;
    }
    else if (type === amConsts.CIRCLEBORDER)
    {
      return amConsts.defaultBorder;
    }
  }

  /**
  * Determines and returns the value for the step prop based on the graph type.
  */
  determineStepValue = (type) =>
  {
    if (type === amConsts.SINCOSWAVEHEIGHT)
    {
      return amConsts.sinCosWaveHeightStep;
    }
    else if (type === amConsts.TANWAVEHEIGHT)
    {
      return amConsts.tanWaveHeightStep;
    }
    else if (type === amConsts.SINCOSWAVEFREQ)
    {
      return amConsts.sinCosWaveFreqStep;
    }
    else if (type === amConsts.TANWAVEFREQ)
    {
      return amConsts.tanWaveFreqStep;
    }
    else if (type === amConsts.XSTARTPOINT)
    {
      return amConsts.xStartPointStep;
    }
    else if (type === amConsts.YSTARTPOINT)
    {
      return amConsts.yStartPointStep;
    }
    else if (type === amConsts.WAVEINTERVALSPEED)
    {
      return amConsts.waveIntervalSpeedStep;
    }
    else if (type === amConsts.RADIUSFACTOR)
    {
      return amConsts.radiusFactorStep;
    }
    else if (type === amConsts.WAVELENGTH)
    {
      return amConsts.waveLengthStep;
    }
    else if (type === amConsts.XROTMULTI)
    {
      return amConsts.rotMultiStep;
    }
    else if (type === amConsts.YROTMULTI)
    {
      return amConsts.rotMultiStep;
    }
    else if (type === amConsts.CIRCULARRADIUS)
    {
      return amConsts.circularRadiusStep;
    }
    else if (type === amConsts.MOVESPEED)
    {
      return amConsts.moveSpeedStep;
    }
    else if (type === amConsts.ROTATESTAR)
    {
      return amConsts.rotateStarStep;
    }
    else if (type === amConsts.STARPOINT)
    {
      return amConsts.starPointStep;
    }
    else if (type === amConsts.STARBORDER)
    {
      return amConsts.borderStep;
    }
    else if (type === amConsts.CIRCLEBORDER)
    {
      return amConsts.borderStep;
    }
  }

  /**
  * Generates a material-ui styled slider and is called within the constructor
  * to create a object that will be used during the render function call.
  */
  generateMySlider = () =>
  {
    return withStyles({
      root: {
        position: 'relative',
        right: '20px',
        color: '#A50000',
        height: 2,
        padding: '15px 0',
      },
      thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#393939',
        boxShadow: this.boxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: this.boxShadow,
          },
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 11px)',
        top: -22,
        '& *': {
          background: 'transparent',
          color: 'white',
        },
      },
      track: {
        height: 2,
      },
      rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#575757',
      },
      mark: {
        backgroundColor: '#575757',
        height: 8,
        width: 1,
        marginTop: -3,
      },
      markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    })(Slider);
  }

} // end of GraphicsSlider

export default GraphicsSlider;
