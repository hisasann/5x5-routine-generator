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

/**
 * CustomTableCell
 * @type {}
 */
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#f50057',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

/**
 * styles
 * @type {{}}}
 */
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

/**
 * DayContentsProps
 */
export interface DayContentsProps {
  classes: any;
  srm: string;
}

/**
 * DayContentsClass
 */
class DayContentsClass extends React.Component<DayContentsProps, {}> {
  state = {
    rowId: undefined,
    rows: [],
  };

  componentDidMount() {
    this.setState({
      rowId: parseInt(localStorage.getItem('rowId'), 10)
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('DayContentsClass componentWillReceiveProps: ', nextProps);

    const srm = nextProps.srm;

    if (srm && srm !== '0' && validationNumberFormat(srm)) {
      // srm の値が、数値（0以外）の場合だけ計算する
      this.createData(srm);
    } else {
      this.initializeData();
    }
  }

  /**
   * state の初期化
   */
  initializeData() {
    this.setState({
      rowId: undefined,
      rows: [],
    });
  }

  /**
   * 画面に表示する 5x5 データを作成する
   * @param srm
   */
  createData(srm) {
    const rows = [];

    let id = 0;
    for (let i = 0; i < C.calcData.length; i++) {
      const data = {
        id: i,
        day: i + 1,
        setCount: [],
      };

      for (let j = 0; j < C.calcDataRowCount; j++) {
        data.setCount.push(this.calculateRoutineData(srm, C.calcData[i][j]));
      }

      rows.push(data);
      id++;
    }

    this.setState({
      rows,
    });
  }

  /**
   * ルーティンの値を計算する
   * @param srm
   * @param data
   * @returns {string}
   */
  calculateRoutineData(srm, data) {
    let weight = Math.ceil((parseInt(srm, 10) / 100) * data);
    weight = weight - (weight % 2.5);
    return weight + ' x 5';
  }

  /**
   * TableRow の click handler
   * @param rowId
   */
  handleRowClick = (rowId) => {
    console.log('handleRowClick', rowId);

    localStorage.setItem('rowId', rowId);
    this.setState({
      rowId: parseInt(localStorage.getItem('rowId'), 10)
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.head}>
            <TableRow>
              <CustomTableCell padding='checkbox'>Day</CustomTableCell>
              <CustomTableCell padding='none'>Set 1</CustomTableCell>
              <CustomTableCell padding='none'>Set 2</CustomTableCell>
              <CustomTableCell padding='none'>Set 3</CustomTableCell>
              <CustomTableCell padding='none'>Set 4</CustomTableCell>
              <CustomTableCell padding='none'>Set 5</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {this.state.rows.map(row => {
              // state の rowId と同じ id の場合は着色する
              let rowClassName;
              if (this.state.rowId === row.id) {
                rowClassName = classes.rowSelected;
              } else {
                rowClassName = classes.rowDefault;
              }

              return (
                <TableRow key={row.id} className={rowClassName} onClick={this.handleRowClick.bind(this, row.id)}>
                  <TableCell component="th" scope="row" padding='checkbox'>
                    Day {row.day}
                  </TableCell>
                  <TableCell padding='none'>{row.setCount[0]}</TableCell>
                  <TableCell padding='none'>{row.setCount[1]}</TableCell>
                  <TableCell padding='none'>{row.setCount[2]}</TableCell>
                  <TableCell padding='none'>{row.setCount[3]}</TableCell>
                  <TableCell padding='none'>{row.setCount[4]}</TableCell>
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
