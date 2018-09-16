import * as React from 'react';
import injectSheet from 'react-jss';
import TextField from '@material-ui/core/TextField';

/**
 * styles
 * @type {{}}
 */
const styles = {
  textField: {
    width: 300,
  },
};

/**
 * ControllerProps
 */
export interface ControllerProps {
  classes: any;
  handleChange: (srm: string) => {};
}

/**
 * ControllerClass
 */
class ControllerClass extends React.Component<ControllerProps, {}> {
  state = {
    srm: '',
  };

  componentDidMount() {
    // ローカルストレージに SRM がある場合は、イベントを fire する
    const loadedSrm = localStorage.getItem('srm');
    if (loadedSrm) {
      this.changeSrm(loadedSrm);
    }
  }

  /**
   * SRM を入力する TextField の change handler
   * @param srm
   * @returns {(event) => void}
   */
  handleChange = srm => event => {
    this.changeSrm(event.target.value);
  };

  /**
   * SRM 変更処理
   * @param value
   */
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
          label=" Enter your current Single Rep Max (SRM)"
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
