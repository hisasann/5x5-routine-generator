import * as React from 'react';
import injectSheet from 'react-jss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  head: {
  },
  body: {
    fontSize: 14,
  },
  table: {
    minWidth: 700,
  },
};

const calcData = [
  [55, 60, 65, 70, 75],
  [60, 65, 70, 75, 80],
  [55, 60, 65, 70, 75],
  [60, 65, 70, 75, 80],
  [65, 70, 75, 80, 85],
  [60, 65, 70, 75, 80],
  [65, 70, 75, 80, 85],
  [70, 75, 80, 85, 90],
  [65, 70, 75, 80, 85],
  [70, 75, 80, 85, 90],
  [75, 80, 85, 90, 95],
  [70, 75, 80, 85, 90],
  [75, 80, 85, 90, 95],
  [80, 85, 90, 95, 100],
  [75, 80, 85, 90, 95],
  [80, 85, 90, 95, 100],
];

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

    if (nextProps.srm && nextProps.srm !== '0') {
      this.createData(nextProps.srm);
    } else {
      this.setState({
        rows: [],
      });
    }
  }

  createData(srm) {
    let rows = [];

    let id = 0;
    for (let i = 0; i < 16; i++) {
      let data = {
        id: i,
        day: i + 1,
        setCount: [],
      };

      for (let j = 0; j < 5; j++) {
        data.setCount.push(this.calculateRoutineData(srm, calcData[i][j]));
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
              <TableCell>Day</TableCell>
              <TableCell numeric>Set 1</TableCell>
              <TableCell numeric>Set 2</TableCell>
              <TableCell numeric>Set 3</TableCell>
              <TableCell numeric>Set 4</TableCell>
              <TableCell numeric>Set 5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id}>
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
