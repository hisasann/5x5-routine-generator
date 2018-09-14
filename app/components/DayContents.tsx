import * as React from 'react';
import injectSheet from 'react-jss';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { validationNumberFormat } from '../validator/validation-number-format';
import C from '../common/constants';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#f50057',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  head: {},
  body: {
    fontSize: 14,
  },
  table: {
    minWidth: 700,
  },
  rowDefault: {
    backgroundColor: 'white',
  },
  rowSelected: {
    backgroundColor: 'pink',
  },
};

export interface DayContentsProps {
  classes: any;
  srm: string;
}

class DayContentsClass extends React.Component<DayContentsProps, {}> {
  state = {
    rows: [],
  };

  componentWillReceiveProps(nextProps) {
    console.log('DayContentsClass componentWillReceiveProps: ', nextProps);

    const srm = nextProps.srm;

    if (srm && srm !== '0' && validationNumberFormat(srm)) {
      this.createData(srm);
    } else {
      this.initializeData();
    }
  }

  initializeData() {
    this.setState({
      rows: [],
    });
  }

  createData(srm) {
    const rows = [];

    let id = 0;
    for (let i = 0; i < C.calcData.length; i++) {
      const data = {
        id: i,
        day: i + 1,
        setCount: [],
      };

      for (let j = 0; j < 5; j++) {
        data.setCount.push(this.calculateRoutineData(srm, C.calcData[i][j]));
      }

      rows.push(data);
      id++;
    }

    this.setState({
      rows,
    });
  }

  calculateRoutineData(srm, data) {
    let weight = Math.ceil((parseInt(srm, 10) / 100) * data);
    weight = weight - (weight % 2.5);
    return weight + ' x 5';
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.head}>
            <TableRow>
              <CustomTableCell>Day</CustomTableCell>
              <CustomTableCell numeric>Set 1</CustomTableCell>
              <CustomTableCell numeric>Set 2</CustomTableCell>
              <CustomTableCell numeric>Set 3</CustomTableCell>
              <CustomTableCell numeric>Set 4</CustomTableCell>
              <CustomTableCell numeric>Set 5</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id} className={classes.rowDefault}>
                  <TableCell component="th" scope="row">
                    Day {row.day}
                  </TableCell>
                  <TableCell numeric>{row.setCount[0]}</TableCell>
                  <TableCell numeric>{row.setCount[1]}</TableCell>
                  <TableCell numeric>{row.setCount[2]}</TableCell>
                  <TableCell numeric>{row.setCount[3]}</TableCell>
                  <TableCell numeric>{row.setCount[4]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const DayContents = injectSheet(styles)(DayContentsClass);

export { DayContents };
