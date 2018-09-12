import * as React from 'react';
import injectSheet from 'react-jss';
import TextField from '@material-ui/core/TextField';

const styles = {
  textField: {
    width: 250,
  },
};

export interface ControllerProps {
  classes: any;
  handleChange: (srm: string) => {};
}

class ControllerClass extends React.Component<ControllerProps, {}> {
  state = {
    srm: '',
  };

  handleChange = srm => event => {
    console.log('ControllerClass handleChange: ', event.target.value);

    this.props.handleChange(event.target.value);

    this.setState({
      [srm]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="srm"
          label="Enter Your Current Maximum"
          placeholder="80"
          className={classes.textField}
          value={this.state.srm}
          onChange={this.handleChange('srm')}
          margin="normal"
        />
      </div>
    );
  }
}

const Controller = injectSheet(styles)(ControllerClass);

export { Controller };
