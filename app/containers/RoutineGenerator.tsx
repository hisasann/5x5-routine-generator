import * as React from 'react';
import injectSheet from 'react-jss';
import { Title } from '../components/Title';
import { Controller } from '../components/Controller';
import { DayContents } from '../components/DayContents';
import Divider from '@material-ui/core/Divider';

const styles = {};

export interface RoutineGeneratorProps {
  classes: any;
}

class RoutineGeneratorClass extends React.Component<RoutineGeneratorProps, {}> {
  state = {
    srm: '',
  };

  handleChange = srm => {
    console.log('RoutineGeneratorClass handleChange: ' + srm);

    this.setState({
      srm,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Title />
        <Divider />
        <Controller handleChange={this.handleChange} />
        <Divider />
        <DayContents srm={this.state.srm} />
      </div>
    );
  }
}

const RoutineGenerator = injectSheet(styles)(RoutineGeneratorClass);

export { RoutineGenerator };
