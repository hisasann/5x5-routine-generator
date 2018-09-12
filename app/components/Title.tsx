import * as React from 'react';
import injectSheet from 'react-jss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    flexGrow: 1,
  },
};

const TitleElement = ({ classes, children }) => (
  <div className={classes.title}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          5x5 Routine Generator
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

const StyledTitleElement = injectSheet(styles)(TitleElement);

export interface TitleProps {}

export class Title extends React.Component<TitleProps, {}> {
  render() {
    return <StyledTitleElement />;
  }
}
