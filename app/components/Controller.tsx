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

  componentDidMount() {
    const loadedSrm = localStorage.getItem('srm');
    if (loadedSrm) {
      this.changeSrm(loadedSrm);
    }
  }

  handleChange = srm => event => {
    this.changeSrm(event.target.value);
  };

  changeSrm(value) {
    console.log('ControllerClass changeSrm: ', value);

    this.props.handleChange(value);

    this.setState({
      srm: value,
    });

    localStorage.setItem('srm', value);
  }

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
