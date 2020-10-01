import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Alert, AlertTitle } from '@material-ui/lab';
const useStyles = makeStyles({
  root: {
    width: '100%',       
  },
  container: {
    maxHeight: 440,
  },
  table_row: {
    background: "#f1f1f1",
    '&:hover': {
      background: "#000",
    },
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('table data',props.SerwayDetails)
  },[props])

  return (
    <Paper className={classes.root}>
      <TableContainer   component={Paper} className="md:mt-8">
        <Table stickyHeader className={classes.table} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
            <TableCell align="right">Sr.No</TableCell>
            <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Activity</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Goal</TableCell>
              <TableCell align="right">Eat Habbit</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (props.SerwayDetails)?
                props.SerwayDetails.map((row,index) => (
                  <TableRow key={row._id} hover={true} className={classes.table_row}>
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.activity}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.goal}</TableCell>
                    <TableCell align="right">{row.eatinghabbit}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                  </TableRow>
                )) : ""
              } 
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
