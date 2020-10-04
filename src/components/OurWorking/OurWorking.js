import React, { Component } from 'react';
import './OurWorking.css';
import ReactCardCarousel from "react-card-carousel";
import ReactCard from "../../components/Card/ReactCard.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import ourwork from '../../assets/img/ourwork.png';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        [theme.breakpoints.down("sm")]: {
            width: '246px'
        }
    },
    media: {
        height: '19rem',
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    onmobileviewhead: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        }
    },
    hideonmobile: {
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    }
}));
const OurWorking = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <React.Fragment>
            <div className={classes.onmobileviewhead}>
                <h3 style={{fontFamily: 'Paytone One'}} class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-16 sm:mb-10">
                    OUR <span class="text-indigo-600" style={{color:'#D00F7F'}}> WORK</span>
                </h3>
            </div>
            <div className="container mx-auto flex px-5 md:py-0  py-0 md:flex-row flex-col items-center bg-img-css" style={{
                borderRadius: '8px', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
            }}>
                <div className={classes.hideonmobile}>
                    <div className="lg:flex-grow lg:ml-16 md:w-1/2 lg:pr-4 md:ml-16 md:mr-12  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        {/* <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} /> */}
                        <h3 style={{fontFamily: 'Paytone One'}} class="text-3xl md:text-5xl sm:text-5xl md:mt-4 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                            OUR <span class="text-indigo-600" style={{color:'#D00F7F'}}> WORK</span>
                        </h3>
                        <p className='text-1xl lg:mr-0 font-black' style={{color: 'white'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full lg:mr-32 md:ml-4 md:w-1/2 w-5/6">
                    <div style={{
                        position: "relative",
                        height: "80vh",
                        width: "100%",
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "middle"
                    }} className="mt-4 md:mt-8">
                        <div style={{
                            width: '90%', height: '100%',
                            margin: '0px',
                            padding: '0px'
                        }}>
                            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans1.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '10px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography style={{ fontFamily: 'Open Sans'}} className='font-black' variant="body2" color="textSecondary" component="p">
                                            <i className='font-black'>This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.</i>
                                        </Typography>
                                    </CardContent>
                                </Card>


                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans2.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans3.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans4.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans5.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>


                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans6.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans7.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>


                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans8.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>


                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans9.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>


                                <Card className={classes.root} style={{
                                    position: 'relative', left: '0', border: '10px solid #fff',
                                    borderBottom: 'none'
                                }}>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../../assets/img/trans10.jpg')}
                                        title="Paella dish"
                                    />
                                    <CardContent style={{
                                        border: '1px solid #fff',
                                        borderTop: 'none', borderBottom: '3px solid #fff'
                                    }}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                {/* <ReactCard imgpath='../../assets/img/trans2.jpg' /> */}
                                {/* <ReactCard imgpath='../../assets/img/trans3.jpg' /> */}
                                {/* <ReactCard imgpath='../../assets/img/trans4.jpg' /> */}
                            </ ReactCardCarousel>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}


export default OurWorking;