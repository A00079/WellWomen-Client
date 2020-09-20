import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Blogs from '../../../REST/Blogs.js';

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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable() {
  const classes = useStyles();
  const [getBlogs, setBloga] = useState([]);
  const [EditBlog, setEditBlog] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [postDiscription, setDiscription] = useState('');
  const [postTitle, setpostTitle] = useState('');
  const [postShortDiscription, setpostName] = useState('');
  const [postAnyTags, setpostAnyTags] = useState('');
  const [postYoutubelink, setpostYoutubelink] = useState('');
  const [isdisable, setisdisable] = useState(true);
  const [openModal, setOpenModal] = React.useState(false);



  useEffect(() => {
    console.log('View all Announcements')
    fetchBlogs();
  }, [])
  const fetchBlogs = () =>{
    setOpen(!open)
    let api_url = "api/admin/getBlog/read";
    Blogs
      .getBlogList(api_url)
      .then((res) => {
        setBloga(res.data)
        console.log('All Announcements', res)
        setOpen(false)
      })
  }

  const handleClose = () => {
    setOpenModal(false);
  };
  const handlePostDiscription = (e) => {
    if (e.target.value) {
      console.log('Announcement', e.target.value)
      setisdisable(false)
    }
    setDiscription(e.target.value)
  }
  const handlePostTitle = (e) => {
    console.log('Announcement Title', e.target.value)
    setpostTitle(e.target.value)
  }
  const handlePostYoutubelink = (e) => {
    console.log('Announcement Title', e.target.value)
    setpostYoutubelink(e.target.value)
  }
  const handlePostAnyTags = (e) => {
    console.log('Announcement Title', e.target.value)
    setpostAnyTags(e.target.value)
  }
  const handlePostName = (e) => {
    console.log('Announcement Name', e.target.value)
    setpostName(e.target.value)
  }

  const editBlogpost = (editData) => {
    setOpenModal(true)
    console.log('Edit Data', editData);
    setEditBlog(editData)
  }
  const deleteConfirmation = (Post_id) =>{
    let flag = window.confirm("Are you sure you want to delete this post.");
    if(flag){
      deleteBlogpost(Post_id)
    }
  }

  const deleteBlogpost = (Post_id) => {
    setOpen(!open)
    let api_url = 'api/admin/deleteBlog/delete';
    let data = {
      'id': Post_id.toString()
    }
    Blogs
      .deleteBlog(api_url, data)
      .then(response => {
        console.log("Response Data...", response);
        fetchBlogs();
        setOpen(false);
      });
    console.log('Annonce_id', Post_id)
  }

  const PostAnnouncement = () => {
    let api_url = "api/admin/updateBlog/modify";
    let data = {
      'Title': (postTitle)?postTitle : EditBlog.title ,
      'ShortDiscription': (postShortDiscription)?postShortDiscription :EditBlog.shortdiscription  ,
      'AnyTags': (postAnyTags)? postAnyTags : EditBlog.anytag,
      'Youtubelink': (postYoutubelink)? postYoutubelink :  EditBlog.youtubelink,
      'Discription': (postDiscription)? postDiscription :  EditBlog.discription,
      'Date':new Date(),
      'id': EditBlog._id
    }
    console.log('data formed',data)
    if (data.Title !== '' && data.Discription !== '') {
      Blogs
        .updateBlogdetails(api_url, data)
        .then(response => {
          fetchBlogs();
          console.log("Response Data...", response);
          document.getElementById('Title').value = '';
          document.getElementById('ShortDiscription').value = ''
          document.getElementById('AnyTags').value = ''
          document.getElementById('YoutubeLink').value = ''
          document.getElementById('Discription').value = ''
          setOpenModal(false)
        });
    } else {
      console.log('Data not submitted...')      
    }

    console.log('save data', data)
  }

  return (
    <React.Fragment>
      <div className="md:mt-16">
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Notice — <strong>Once post deleted cannot be restored!</strong>
        </Alert>
      </div>
      <TableContainer component={Paper} className="md:mt-8">
        <Table className={classes.table} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Short Discription</TableCell>
              <TableCell align="right">Discription</TableCell>
              <TableCell align="right">Youtube Link</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getBlogs.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.anytag}</TableCell>
                <TableCell align="right">{row.shortdiscription}</TableCell>
                <TableCell align="right">{row.discription}</TableCell>
                <TableCell align="right">{row.youtubelink}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell title='Edit' className="cursor-pointer" align="right"><EditIcon onClick={() => editBlogpost(row)} /></TableCell>
                <TableCell title='Delete' className="cursor-pointer" align="right"><DeleteOutlinedIcon onClick={() => deleteConfirmation(row._id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </TableContainer>


      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Announcement</DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostTitle(e)}
                  autoComplete="Title"
                  name="Title"
                  variant="outlined"
                  fullWidth
                  id="Title"
                  label="Title"
                  autoFocus
                  defaultValue={(postTitle) ? postTitle : EditBlog.title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostName(e)}
                  autoComplete="ShortDiscription"
                  name="ShortDiscription"
                  variant="outlined"
                  fullWidth
                  id="ShortDiscription"
                  label="Short Discription"
                  autoFocus
                  defaultValue={(postShortDiscription) ? postShortDiscription : EditBlog.shortdiscription}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostAnyTags(e)}
                  autoComplete="AnyTags"
                  name="AnyTags"
                  variant="outlined"
                  fullWidth
                  id="AnyTags"
                  label="Any Tags"
                  autoFocus
                  defaultValue={(postAnyTags) ? postAnyTags : EditBlog.anytag}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => handlePostYoutubelink(e)}
                  autoComplete="YoutubeLink"
                  name="YoutubeLink"
                  variant="outlined"
                  fullWidth
                  id="YoutubeLink"
                  label="Youtube Link"
                  autoFocus
                  defaultValue={(postYoutubelink) ? postYoutubelink : EditBlog.youtubelink}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => handlePostDiscription(e)}
                  id="Discription"
                  label="Discription"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  name="Discription"
                  variant="outlined"
                  autoComplete="Discription"
                  defaultValue={(postDiscription) ? postDiscription : EditBlog.discription}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => PostAnnouncement()}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Post Announcement
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
