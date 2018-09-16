import * as React from 'react';
import injectSheet from 'react-jss';
import Divider from '@material-ui/core/Divider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Title } from '../components/Title';
import { Controller } from '../components/Controller';
import { DayContents } from '../components/DayContents';
import { Footer } from '../components/Footer';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

/**
 * styles
 * @type {{}}
 */
const styles = {};

/**
 * theme
 * @type {Theme}
 */
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

/**
 * RoutineGeneratorProps
 */
export interface RoutineGeneratorProps {
  classes: any;
}

/**
 * RoutineGeneratorClass
 */
class RoutineGeneratorClass extends React.Component<RoutineGeneratorProps, {}> {
  state = {
    srm: '',
  };

  /**
   * Controller 内で callback してもらうための handler
   * @param srm
   */
  handleChange = srm => {
    console.log('RoutineGeneratorClass handleChange: ' + srm);

    this.setState({
      srm,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Title />
        <Divider />
        <Controller handleChange={this.handleChange} />
        <Divider />
        <DayContents srm={this.state.srm} />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

const RoutineGenerator = injectSheet(styles)(RoutineGeneratorClass);

export { RoutineGenerator };
