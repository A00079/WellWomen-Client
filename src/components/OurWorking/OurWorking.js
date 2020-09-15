import React, { Component } from 'react';
import './OurWorking.css';
import ReactCardCarousel from "react-card-carousel";
import ReactCard from "../../components/Card/ReactCard.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    onmobileviewhead: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        }
    },
    hideonmobile:{
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    }
}));
const OurWorking = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.onmobileviewhead}>
                <h3 class="text-3xl sm:text-5xl md:text-4xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-24 sm:mb-16">
                    OUR <span class="text-indigo-600"> WORK</span>
                </h3>
            </div>
            <div className="container mx-auto flex px-5 md:py-16  py-0 md:flex-row flex-col items-center">
                <div className={classes.hideonmobile}>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:ml-16 md:mr-12  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        {/* <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} /> */}
                        <h3 class="text-3xl sm:text-5xl md:mt-32 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
                            OUR <span class="text-indigo-600"> WORK</span>
                        </h3>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:ml-4 md:w-1/2 w-5/6">
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
                                <ReactCard />
                                <ReactCard />
                                <ReactCard />
                            </ ReactCardCarousel>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}


export default OurWorking;