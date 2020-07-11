import React, {PureComponent} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

/**
* Author: Vincent Nigro
* Version: 0.0.1
* Last Updated: 3/27/20
*
* The GraphicsCheckbox component creates a checkbox component based off of the
* material-ui checkbox component.
*/
class GraphicsCheckbox extends PureComponent
{
  /**
  * Generates the material-ui base checkbox to be rendered with a custom callback
  * prop value in the render method.
  */
  constructor(props)
  {
    super(props);

    this.myCheckbox = this.generateMyCheckbox();
  }

  /**
  * Renders the material-ui checkbox with a custom callback that originates from
  * the component that had rendered this component.
  */
  render = () =>
  {
    var html = (
      <>
      <this.myCheckbox id="invertorBox" color="primary"
        onChange={this.props.callback}
        inputProps={{ 'aria-label': 'primary checkbox' }} />
      </>
    );

    return html;
  }

  /**
  * Generates a custom material-ui checkbox to be used as the base of the
  * GraphicsCheckbox component. This will be called in the constructor.
  */
  generateMyCheckbox = () =>
  {
    return withStyles({
      root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    })(Checkbox);
  }

} // end of GraphicsCheckbox

export default GraphicsCheckbox;
