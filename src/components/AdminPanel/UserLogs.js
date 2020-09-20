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
});

export default function StickyHeadTable(props) {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('table data',props.getBlogs)
  },[props])

  return (
    <Paper className={classes.root}>
      <TableContainer   component={Paper} className="md:mt-8">
        <Table stickyHeader className={classes.table} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
            <TableCell align="right">Sr.No</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Tag</TableCell>
              <TableCell align="right">Short Discription</TableCell>
              <TableCell align="right">Discription</TableCell>
              <TableCell align="right">Youtube Link</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (props.getBlogs)?
                props.getBlogs.map((row,index) => (
                  <TableRow key={row._id}>
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.anytag}</TableCell>
                    <TableCell align="right">{row.shortdiscription}</TableCell>
                    <TableCell align="right">{row.discription}</TableCell>
                    <TableCell align="right">{row.youtubelink}</TableCell>
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
