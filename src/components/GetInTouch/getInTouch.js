import React, { useState } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const GetInTouch = () =>{

    const [open, setOpen] = useState(false);
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
    return (
        <React.Fragment>
            <h1 style={{ color: '#4e6073', textAlign: 'center', fontFamily: 'Paytone One' }} className="sm:text-3xl text-3xl md:text-4xl md:mt-16 mt-24 lg:mt-16 font-extrabold title-font mb-4 text-gray-900">GET IN  <span class="text-indigo-600" style={{ color: '#D00F7F' }}>TOUCH WITH US</span></h1>

            <section className="text-gray-700 body-font">
                <div className="container px-5 md:px-0 py-8 lg:py-2 md:py-24 mx-auto" id="contactus">
                    <h1 style={{ fontFamily: 'Open Sans' }} class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">Still confuse Get a FREE Suggetion from our Health Expert on WhatsApp
                    </h1>
                    {/* <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10'>
                            <a href="https://api.whatsapp.com/send?phone=9109137617952&text=Hello." style={{ width: '20%', background: '#D00F7F', color: '#fff', margin: '0 auto', fontFamily: 'Open Sans' }} className="flex-shrink-0 text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-20 sm:mt-0">
                                Click Here To Chat</a>
                        </h1> */}
                    <a onClick={handleClickOpen} style={{ right: '40%', left: '40%', bottom: '0px' }} class="text-center float pulse-button md:hidden lg:hidden">
                        <WhatsAppIcon style={{ marginTop: '9px' }} />
                    </a>
                    {/* <a href="https://api.whatsapp.com/send?phone=9109137617952&text=Hello." style={{ right: '40%', left: '40%', bottom: '0px' }} class="text-center float pulse-button md:hidden lg:hidden" target="_blank">
                        <WhatsAppIcon style={{ marginTop: '9px' }} />
                    </a> */}
                    <div className="hidden md:block lg:block">
                        {/* <a href="https://api.whatsapp.com/send?phone=9109137617952&text=Hello." style={{ right: '60%', left: '48%', bottom: '-80px' }} class="text-center float pulse-button" target="_blank">
                            <WhatsAppIcon style={{ marginTop: '9px' }} />
                        </a> */}
                        <a onClick={handleClickOpen} style={{ right: '60%', left: '48%', bottom: '-80px' }} class="text-center float pulse-button">
                            <WhatsAppIcon style={{ marginTop: '9px' }} />
                        </a>
                    </div>
                </div>
            </section>
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
        </React.Fragment>
    )
}

export default GetInTouch;