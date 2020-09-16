import React, {useState,useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BlogsREST from '../../../REST/Blogs.js';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [postDiscription, setDiscription] = useState('');
    const [postTitle, setpostTitle] = useState('');
    const [postShortDiscription, setpostName] = useState('');
    const [postAnyTags, setpostAnyTags] = useState('');
    const [postYoutubelink, setpostYoutubelink] = useState('');
    const [isdisable, setisdisable] = useState(true);


    const handlePostDiscription = (e) =>{
        if(e.target.value){
            console.log('Announcement', e.target.value)
            setisdisable(false)
        }
        setDiscription(e.target.value)
    }
    const handlePostTitle = (e) =>{
        console.log('Announcement Title', e.target.value)
        setpostTitle(e.target.value)
    }
    const handlePostYoutubelink = (e) =>{
        console.log('Announcement Title', e.target.value)
        setpostYoutubelink(e.target.value)
    }
    const handlePostAnyTags = (e) =>{
        console.log('Announcement Title', e.target.value)
        setpostAnyTags(e.target.value)
    }
    const handlePostName = (e) =>{
        console.log('Announcement Name', e.target.value)
        setpostName(e.target.value)
    }
    const PostAnnouncement = () =>{
        let api_url = "api/admin/postBlog/create";
        let data = {
            'Title': postTitle,
            'ShortDiscription': postShortDiscription,
            'AnyTags': postAnyTags,
            'Youtubelink': postYoutubelink,
            'Discription': postDiscription,
            'Date': new Date()
        }
        if(data.Discription !== '' && data.Title !== ''){
            BlogsREST
            .postBlogdetails(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
            });
        }else{
            setisdisable(true)
            document.getElementById('Title').value = '';
            document.getElementById('ShortDiscription').value = ''
            document.getElementById('AnyTags').value = ''
            document.getElementById('YoutubeLink').value = ''
            document.getElementById('Discription').value = ''
        }
        console.log('save data',data)
    }

    return (
            <Container component="main" maxWidth="xs" className="md:mt-24">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Post Blog
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={e=>handlePostTitle(e)}
                                    autoComplete="Title"
                                    name="Title"
                                    variant="outlined"
                                    fullWidth
                                    id="Title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                    onChange={e=>handlePostName(e)}
                                    autoComplete="ShortDiscription"
                                    name="ShortDiscription"
                                    variant="outlined"
                                    fullWidth
                                    id="ShortDiscription"
                                    label="Short Discription"
                                    autoFocus
                                />
                            {/* <FormControl
                            id='Name'
                            onChange={e=>handleAnnounceName(e)}
                            fullWidth className={classes.margin} variant="outlined">
                                <InputLabel
                                
                                 htmlFor="outlined-adornment-amount"
                                 >Short Discription</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    labelWidth={60}
                                />
                            </FormControl> */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={e=>handlePostAnyTags(e)}
                                    autoComplete="AnyTags"
                                    name="AnyTags"
                                    variant="outlined"
                                    fullWidth
                                    id="AnyTags"
                                    label="Any Tags"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={e=>handlePostYoutubelink(e)}
                                    autoComplete="YoutubeLink"
                                    name="YoutubeLink"
                                    variant="outlined"
                                    fullWidth
                                    id="YoutubeLink"
                                    label="Youtube Link"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                onChange={e=>handlePostDiscription(e)}
                                id="Discription"
                                label="Discription"
                                required
                                multiline
                                rows={4}
                                fullWidth
                                name="Discription"
                                defaultValue=""
                                variant="outlined"
                                autoComplete="Discription"
                            />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={isdisable}
                            onClick={() => PostAnnouncement()}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Create Blog
                        </Button>
                    </form>
                </div>
                {/* <Box mt={5}>
                    <Copyright />
                </Box> */}
            </Container>
    );
}