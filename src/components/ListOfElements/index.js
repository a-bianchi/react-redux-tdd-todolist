import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  removeElement: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
  button: {
    backgroundColor: '#fff',
    border: 'none',
  },
}));

const ListOfElements = ({ rows, removeElement }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table} data-test="table-task">
          <TableBody>
            {rows.map((task, index) => (
              <TableRow data-test={`task-${index}`} key={`${index}${task.key}`}>
                <TableCell align="left">{task.name}</TableCell>
                <TableCell align="right">
                  <button
                    className={classes.button}
                    type="button"
                    data-test={`removeElement-${index}`}
                    onClick={() => removeElement(task.key)}
                  >
                    <DeleteIcon className={classes.icon} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

ListOfElements.defaultProps = {
  rows: [{ key: 12345, name: 'First task' }],
  removeElement: (id) => {},
};

ListOfElements.propTypes = propTypes;

export default ListOfElements;
