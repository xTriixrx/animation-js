import React, {PureComponent} from 'react';
import * as amConsts from './animationConstants.js';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 3/28/20
*
* The AnimationDropDown class renders a drop down menu within the tool menu bar
* at all times and is used to change the graph type during runtime. The list of
* graph options is pulled from the animationConstants.js file and is an array named
* ANIMATION_TYPES.
*/
class PageDropDown extends PureComponent
{
  /**
  *  Constructor for the Animation Drop Down menu. Will receive the default graph
  *  type from the Animation component after a render call. This component will
  *  trigger the Animation component to re-render when a new menu item is selected.
  */
  constructor(props)
  {
    super(props);
    this.state =
    {
      pageType: this.props.pageType,
    }

  }

  /**
  * The AnimationDropDown render method calls its generateAnimationOptions method
  * to retrieve all the different graph options and then wraps the array of html
  * options with a <select> element. This <select> element utilizes a prop
  * argument called 'callback' to forward the graphType change to the Animation
  * component which will trigger a re-render.
  */
  render = () =>
  {
    var options = this.generatePageOptgroups();

    var html = (
      <>
        <label>
          Page:
          <select onChange={this.props.callback} id="pageList">
             {options}
           </select>
        </label>
      </>
    );

    return html;
  }

  /**
  * The generateShapeOptgroups method iterates over each shape type defined in
  * the ANIMATION_SETS array and wraps the shape type into an <optgroup> HTML
  * element which contains the set of options for that shape type. This will be
  * called during the render function and wrap the options array around a select
  * drop down menu.
  */
  generatePageOptgroups = () =>
  {
    var setOptions = this.generateShapeOptions(1);

      var label = (
        <optgroup key={1} id="pageGroup"
          label={"Pages"}>
          {setOptions}
        </optgroup>
      );

    return label;
  }

  /**
  * Generates each graph option element for the current optgroup iteration that
  * describes the entire shape classification.
  */
  generateShapeOptions = (iter) =>
  {
    var setOptions = [];
    for (let i in amConsts.PAGE_TYPES)
    {
      var setOption = (
        <option key={i} id="graphOption"
          value={amConsts.PAGE_TYPES[i]}>
          {amConsts.PAGE_TYPES[i]}
        </option>
      );
      setOptions.push(setOption);
    }
    return setOptions;
  }

}

export default PageDropDown;
