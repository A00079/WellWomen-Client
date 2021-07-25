
import React, { useState, useEffect } from 'react';
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
import PostSerway from '../../REST/SubmitSerway.js';
import { StartJourney } from "../../actions/StartYourJourney.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Notifications, { notify } from 'react-notify-toast'
import Spinner from '../../components/Spinner/Spinner.js';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './SerwayForm.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                @Team Pratham
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

const SubmitForm = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState(0);
    const [issubmited, setissubmited] = useState(false);


    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [userName, setUserName] = useState(0);
    const [userAge, setUserAge] = useState(0);
    const [userWeight, setUserWeight] = useState(0);
    const [userCity, setUserCity] = useState(0);
    const [userEmail, setUserEmail] = useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const whatsappSubmit = () => {
        window.location = `https://api.whatsapp.com/send?phone=9109137617952&text=Hello I want to lose ${userWeight}kg. Name: ${userName} Age:${userAge} Email ID: ${userEmail} City: ${userCity}.`;
    }


    useEffect(() => {
        console.log('serway details', props.journeydata)
    }, [props])

    const handelFormSubmit = () => {
        setissubmited(true)

        console.log('name', name)
        console.log('email', email)
        console.log('phone', phone)

        let api_url = "api/user/submitserway/create";
        let data = {
            'name': name,
            'email': email,
            'phone': phone,
            'activity': props.journeydata.user_activity,
            'age': props.journeydata.user_age,
            'eatinghabbit': props.journeydata.user_eatinghabbit,
            'goal': props.journeydata.user_goal
        }
        PostSerway
            .postSerway(api_url, data)
            .then(response => {
                notify.show(response.msg, "custom", 4000, { background: '#0E1717', text: "#FFFFFF" })
                if (response.msg !== 'Email already exists') {
                    document.getElementById('firstName').value = '';
                    document.getElementById('phoneno').value = '';
                    document.getElementById('email').value = '';
                }
                props.history.push('/singleaboutus')
                console.log("Response Data...", response);
                setissubmited(false)
            }).catch(err => setissubmited(false))
    }

    return (
        <Container component="main" maxWidth="xs">
            <Notifications options={{ zIndex: 9999, top: '0px' }} />
            <CssBaseline />
            <div className={classes.paper} style={{ marginTop: '0px' }}>
                <h1 style={{ fontFamily: 'Paytone One' }} className="text-center  text-3xl mt-8 tracking-wide relative">ALMOST <span style={{ color: '#D00F7F' }}>FINISHED!</span></h1>
                <h1 style={{ fontFamily: 'Open Sans', color: '#D00F7F' }} className="text-center font-bold  text-2xl mt-8 tracking-wide relative">
                    <h1 className='text-blue-700'>5, 10, 20, 30</h1> No matter how much weight you want to lose..
                    You are at right place.
                </h1>
                {/* <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={event => { setName(event.target.value) }}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={event => { setphone(event.target.value) }}
                                variant="outlined"
                                required
                                fullWidth
                                type="number"
                                id="phoneno"
                                label="Phone Number"
                                name="phoneno"
                                autoComplete="phoneno"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={event => { setemail(event.target.value) }}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }}
                        onClick={handelFormSubmit}
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {
                            issubmited ? <Spinner size='lg' spinning='spinning' />
                                : 'Start Journey'
                        }

                    </Button>
                </form> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h4 className='font-bold cursor-pointer  mt-10'>
                            <span className='text-3xl'><span style={{ color: '#D00F7F' }}>Our</span> Programs:</span>
                            <a href="https://www.drsnehaladsule.com/services-1" target="_blank">
                                <p className='text-blue-700 text-1xl'>
                                    https://www.drsnehaladsule.com/services-1
                                </p>
                            </a>
                        </h4>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h4 className='font-bold'>
                            Not sure?
                            Talk to us on whats app
                        </h4>
                    </Grid>
                </Grid>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            <a onClick={handleClickOpen} class="float pulse-button" target="_blank">
                <WhatsAppIcon className='my-float' />
            </a>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Basic Details"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className='space-y-2'>
                            <div className='flex flex-row justify-between space-x-4'>
                                <TextField id="outlined-basic" label="Name" onChange={(e) => setUserName(e.target.value)} variant="outlined" />
                                <TextField id="outlined-basic" label="Age" onChange={(e) => setUserAge(e.target.value)} variant="outlined" />
                            </div>
                            <div className='w-full'>
                                <TextField className='w-full' id="outlined-basic" label="Email" onChange={(e) => setUserEmail(e.target.value)} variant="outlined" />
                            </div>
                            <div className='flex flex-row justify-between space-x-4'>
                                <TextField id="outlined-basic" label="Weight" onChange={(e) => setUserWeight(e.target.value)} variant="outlined" />
                                <TextField id="outlined-basic" label="City" onChange={(e) => setUserCity(e.target.value)} variant="outlined" />
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => whatsappSubmit()} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

SubmitForm.propTypes = {
    journeydata: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    journeydata: state.startjourney
});

export default connect(
    mapStateToProps,
    {}
)(withRouter(SubmitForm));