import React, { Component,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostSerway from '../../REST/SubmitSerway.js';

const useStyles = makeStyles((theme) => ({
    appbarroot: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    dropdownLink: {
        marginLeft: '20px'
    },
    title: {
        flexGrow: 1,
    },
    cardroot: {
        maxWidth: 345,
    },
    cardcenter: {
        textAlign: '-webkit-center'
    },
    root: {
        width: '100%'
    },
    footer: {
        textAlign: 'center'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
const ServeForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState(0);

    const handelFormSubmit = () =>{
        console.log('name',name)
        console.log('email',email)
        console.log('phone',phone)

        let api_url = "api/user/submitserway/create";
        let data = {
            'name': name,
            'email': email,
            'phone': phone
        }
        PostSerway
            .postSerway(api_url, data)
            .then(response => {
                console.log("Response Data...", response);
                setName('')
                setemail('')
                setphone(0)
            });
    }
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} md={6} sm={12} lg={6} className={classes.cardcenter}>
                        <h1 className="text-center  text-3xl mt-8 tracking-wide relative">ALMOST FINISHED!</h1>
                        <h1 className="text-center  text-1xl mt-8 tracking-wide relative">
                            The next page will take you to the optimal program designed according to your answers.
                        </h1>

                        <div class="w-full max-w-xs" style={{ textAlign: 'left' }}>
                            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Name
      </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={event =>{setName(event.target.value)}} id="username" type="text" placeholder="Name" />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                        Email
      </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={event =>{setemail(event.target.value)}} id="email" type="email" placeholder="Email" />
                                </div>
                                <div class="mb-6">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                                        Phone
      </label>
                                    <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={event =>{setphone(event.target.value)}} id="phone" type="number" placeholder="91..." />
                                </div>
                                <div class="flex items-center justify-between">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handelFormSubmit} type="button">
                                        Submit
      </button>
                                </div>
                            </form>
                            <p class="text-center text-gray-500 text-xs">
                                &copy;2020 Acme Corp. All rights reserved.
  </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default ServeForm;