import React, { Component,useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import oldWomen from '../../assets/img/old women.png';


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
        textAlign: '-webkit-center',
        '&:hover': {
            background: "rebeccapurple",
            transition: '1s'
        },
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

const AgeGroup = () => {
    const classes = useStyles();
    const [userage, setUserage] = useState(null);

    const handelAge = (age) =>{
        setUserage(age)
        console.log('Age',userage)
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <h1 className="text-center  text-3xl mt-8 mb-8 tracking-wide relative">WHAT'S YOUR AGE GROUP?</h1>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    {/* <Grid item xs={12} md={3} sm={12} lg={3} className={classes.cardcenter}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={ () => handelAge(20)}>
                            <img className="w-full" style={{ width: '150px' }} src={oldWomen} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-700">20's</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} sm={12} lg={3} className={classes.cardcenter}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={ () => handelAge(30)}>
                            <img className="w-full" style={{ width: '150px' }} src={oldWomen} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-700">30's</div>
                            </div>
                        </div>
                    </Grid> */}
                    <Grid item xs={12} md={3} sm={12} lg={3} className={classes.cardcenter}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={ () => handelAge(40)}>
                            <img className="w-full" style={{ width: '150px' }} src={oldWomen} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-700">40's</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} sm={12} lg={3} className={classes.cardcenter}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={ () => handelAge(50)}>
                            <img className="w-full" style={{ width: '150px' }} src={oldWomen} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-700">50's</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} md={3} sm={12} lg={3} className={classes.cardcenter}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={ () => handelAge(40)}>
                            <img className="w-full" style={{ width: '150px' }} src={oldWomen} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-700">40's</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} sm={12} lg={3} className={classes.cardcenter}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={ () => handelAge(50)}>
                            <img className="w-full" style={{ width: '150px' }} src={oldWomen} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-700">50's</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default AgeGroup;