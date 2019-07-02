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
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handelAction: PropTypes.func.isRequired,
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

// Se tiene que ver la manito al pasar por boton de eliminar
const ListOfElements = ({ rows, handelAction }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {rows.map((task, index) => (
              <TableRow key={`${index}${task}`}>
                <TableCell align="left">{task.name}</TableCell>
                <TableCell align="right">
                  <button
                    className={classes.button}
                    type="button"
                    data-test={`removeElement-${index}`}
                    onClick={() => handelAction(task.key)}
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

ListOfElements.propTypes = propTypes;

export default ListOfElements;
