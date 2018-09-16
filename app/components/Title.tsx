import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

/**
 * styles
 * @type {{}}
 */
const styles = {
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {},
  bigAvatar: {
    width: 40,
    height: 40,
  },
};

/**
 * TitleElement
 * @param {any} classes
 * @param {any} children
 * @returns {any}
 * @constructor
 */
const TitleElement = ({ classes, children }) => (
  <div className={classes.title}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.grow}>
          5x5 Routine Generator
        </Typography>
        <a href="https://github.com/hisasann">
          <Avatar
            alt="hisasann"
            src="https://hisasann.github.io//public/images/hisasann.jpg"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </a>
      </Toolbar>
    </AppBar>
  </div>
);

const StyledTitleElement = injectSheet(styles)(TitleElement);

/**
 * TitleProps
 */
export interface TitleProps {
  classes?: any;
}

/**
 * Title
 */
export class Title extends React.Component<TitleProps, {}> {
  render() {
    return <StyledTitleElement />;
  }
}
