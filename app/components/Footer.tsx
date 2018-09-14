import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  footer: {
    marginTop: 10,
  },
};

const FooterElement = ({ classes, children }) => (
  <div className={classes.footer}>
    github: <a href="https://github.com/hisasann/5x5-routine-generator" target="_blank">
      hisasann/5x5-routine-generator
    </a>
  </div>
);

const StyledFooterElement = injectSheet(styles)(FooterElement);

export interface FooterProps {
  classes?: any;
}

export class Footer extends React.Component<FooterProps, {}> {
  render() {
    return <StyledFooterElement />;
  }
}
