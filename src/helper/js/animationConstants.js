/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 5/7/20
*
* This file contains all constant values that are used within the AnimationEngine
* and does not require any dependancies. This file is used throughout the
* AnimationEngine and has multiple different definition sets.
*/

//  Definitinos of each type of Page
export const ANIMATIONS = "Animations";
export const FUNCTIONS = "Functions";

//  Definitions for each type of Graph
export const WAVE = "Wave";
export const SHAPE = "Shape";
export const STAR = "Star";
export const SINE = "Sine";
export const CIRCLE = "Circle";
export const COSINE = "Cosine";
export const TANGENT = "Tangent";

// Definitions for each type of GraphicsSlider
export const SINCOSWAVEHEIGHT = "sinCosWaveHeight";
export const TANWAVEHEIGHT = "tanWaveHeight";
export const SINCOSWAVEFREQ = "sinCosWaveFreq";
export const TANWAVEFREQ = "tanWaveFreq";
export const XSTARTPOINT = "xStartPoint";
export const YSTARTPOINT = "yStartPoint";
export const WAVEINTERVALSPEED = "waveIntervalSpeed";
export const RADIUSFACTOR = "radiusFactor";
export const WAVELENGTH = "waveLength";
export const XROTMULTI = "xRotMulti";
export const YROTMULTI = "yRotMulti";
export const CIRCULARRADIUS = "circularRadius";
export const ROTATESTAR = "rotateStar";
export const STARPOINT = "starPoint";
export const MOVESPEED = "moveSpeedX";

// Definitions for each GraphicsSlider step prop value
export const sinCosWaveHeightStep = .5;
export const tanWaveHeightStep = .5;
export const sinCosWaveFreqStep = .25;
export const tanWaveFreqStep = .25;
export const xStartPointStep = .5;
export const yStartPointStep = .5;
export const waveIntervalSpeedStep = .25;
export const radiusFactorStep = .25;
export const waveLengthStep = .5;
export const rotMultiStep = .25;
export const circularRadiusStep = .25;
export const moveSpeedStep = .25;
export const rotateStarStep = .5;
export const starPointStep = 1;

// Define the set of all page types
export const PAGE_TYPES = [
  ANIMATIONS, FUNCTIONS,
];

// Defines the set of all animation types
export const ANIMATION_TYPES = [
  SINE, COSINE, TANGENT, STAR, CIRCLE,
];

// Defines the set of all wave types
export const WAVE_TYPES = [
  SINE, COSINE, TANGENT,
];

// Defines the set of all shape types
export const SHAPE_TYPES = [
    STAR, CIRCLE,
];

// Defines the set of all animation types
export const ANIMATION_SETS = [
    WAVE_TYPES, SHAPE_TYPES,
];

// Defines the set of animation graph title types
export const ANIMATION_SET_TITLES = [
  "Wave Graphs", "Shape Graphs",
];

// Definitions for all the default values for GraphicsSliders
export const defaultPointTotal = 150;
export const defaultLineTotal = 1;
export const defaultInversion = false;
export const defaultStartPoint = 1;
export const defaultWaveIntervalSpeed = 1000;
export const defaultYStartHeightPoint = 2;
export const defaultWaveHeight = 4;
export const defaultWaveFreq = 5;
export const defaultRadiusFactor = 2;
export const defaultWaveLength = 1;
export const defaultFreqMultiplier = 2;
export const defaultRotationMultiplier = 1;
export const defaultCircularRadius = 50;
export const defaultMoveSpeed = 1;
export const defaultShapeCount = 1;
export const defaultRanColor = false;
export const defaultRotateStar = 60;
export const defaultStarPoints = 5;

// Definitions for all min and max values for GraphicsSliders
export const xStartPointMin = -22300;
export const xStartPointMax = 22300;
export const waveIntervalSpeedMin = 1;
export const waveIntervalSpeedMax = 5000;
export const yStartHeightPointMin = -10;
export const yStartHeightPointMax = 10;
export const waveHeightMin = .5;
export const ySinCosWaveHeightMax = 500;
export const yTangentWaveHeightMax = 1500;
export const waveFreqMin = .1;
export const sinCosWaveFreqMax = 500;
export const tangentWaveFreqMax = 1000;
export const radiusFactorMin = .5;
export const radiusFactorMax = 20;
export const waveLengthMin = .05;
export const waveLengthMax = 10;
export const rotationMultiplierMin = -500;
export const rotationMultiplierMax = 500;
export const circularRadiusMin = 10;
export const circularRadiusMax = 200;
export const moveSpeedMin = 0;
export const moveSpeedMax = 100;
export const rotateStarMin = -1080;
export const rotateStarMax = 1080;
export const starPointsMin = 2;
export const starPointsMax = 25;

// Mark values for circularRadius GraphicsSlider
export const moveSpeedMarks = [
  { value: moveSpeedMin, },
  { value: 20, },
  { value: 35, },
  { value: 50, },
  { value: 65, },
  { value: 80, },
  { value: moveSpeedMax, },
];

// Mark values for circularRadius GraphicsSlider
export const circularRadiusMarks = [
  { value: circularRadiusMin, },
  { value: -125, },
  { value: -75,  },
  { value: -25,  },
  { value: 0,    },
  { value: 25,   },
  { value: 75,   },
  { value: 125,  },
  { value: circularRadiusMax, },
];

// Mark values for xStartPoint GraphicsSlider
export const xStartPointMarks = [
  { value: xStartPointMin, },
  { value: -15000, },
  { value: -10000, },
  { value: -5000,  },
  { value: 0,      },
  { value: 5000,   },
  { value: 10000,  },
  { value: 15000,  },
  { value: xStartPointMax, },
];

// Mark values for waveIntervalSpeed GraphicsSlider
export const waveIntervalSpeedMarks = [
  { value: waveIntervalSpeedMin, },
  { value: 500,  },
  { value: 1000, },
  { value: 1500, },
  { value: 2000, },
  { value: 2500, },
  { value: 3000, },
  { value: 3500, },
  { value: 4000, },
  { value: 4500, },
  {value: waveIntervalSpeedMax, },
];

// Mark values for radiusFactor GraphicsSlider
export const radiusFactorMarks = [
  { value: radiusFactorMin, },
  { value: 5,  },
  { value: 10, },
  { value: 15, },
  { value: radiusFactorMax, },
];

// Mark values for waveLength GraphicsSlider
export const waveLengthMarks = [
  { value: waveLengthMin, },
  { value: .1, },
  { value: .3, },
  { value: .5, },
  { value: 1,  },
  { value: 3,  },
  { value: 5,  },
  { value: 7,  },
  { value: waveLengthMax, },
];

// Mark values for yStartHeightPoint GraphicsSlider
export const yStartHeightPointMarks = [
  { value: yStartHeightPointMin, },
  { value: -5, },
  { value: 0,  },
  { value: 5,  },
  { value: yStartHeightPointMax, },
];

// Mark values for sinCosWaveHeight GraphicsSlider
export const sinCosWaveHeightMarks = [
  { value: waveHeightMin, },
  { value: 50,  },
  { value: 100, },
  { value: 150, },
  { value: 200, },
  { value: 250, },
  { value: 300, },
  { value: 350, },
  { value: 400, },
  { value: 450, },
  { value: ySinCosWaveHeightMax, },
];

// Mark values for tangentWaveHeight GraphicsSlider
export const tangentWaveHeightMarks = [
  { value: waveHeightMin, },
  { value: 150,  },
  { value: 300,  },
  { value: 450,  },
  { value: 600,  },
  { value: 750,  },
  { value: 900,  },
  { value: 1050, },
  { value: 1200, },
  { value: 1350, },
  { value: yTangentWaveHeightMax, },
];

// Mark values for sinCosWaveFreq GraphicsSlider
export const sinCosWaveFreqMarks = [
  { value: waveFreqMin, },
  { value: 50, },
  { value: 100, },
  { value: 150, },
  { value: 200, },
  { value: 250, },
  { value: 300, },
  { value: 350, },
  { value: 400, },
  { value: 450, },
  { value: sinCosWaveFreqMax, },
];

// Mark values for tangentWaveFreq GraphicsSlider
export const tangentWaveFreqMarks = [
  { value: waveFreqMin, },
  { value: 100, },
  { value: 200, },
  { value: 300, },
  { value: 400, },
  { value: 500, },
  { value: 600, },
  { value: 700, },
  { value: 800, },
  { value: 900, },
  { value: tangentWaveFreqMax, },
];

// Mark values for rotationMultiplier GraphicsSlider
export const rotationMultiplierMarks = [
  { value: rotationMultiplierMin, },
  { value: -350, },
  { value: -225, },
  { value: -150, },
  { value: 0,    },
  { value: 150,  },
  { value: 225,  },
  { value: 350,  },
  { value: rotationMultiplierMax, },
];

// Mark values for rotateStar GraphicsSlider
export const rotateStarMarks = [
  { value: rotateStarMin, },
  { value: -720, },
  { value: -540, },
  { value: -360, },
  { value: 0, },
  { value: 360, },
  { value: 540, },
  { value: 720, },
  { value: rotateStarMax, },
];

// Mark values for starPoint GraphicsSlider
export const starPointsMarks = [
  { value: starPointsMin, },
  { value: -3, },
  { value: defaultStarPoints, },
  { value: 7, },
  { value: 10, },
  { value: 15, },
  { value: starPointsMax, },
];
