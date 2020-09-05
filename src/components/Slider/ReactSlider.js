import React, { Component } from 'react';
import {  withStyles,makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../../assets/img/bg.jpg';
import image2 from '../../assets/img/bg2.jpg';
import image3 from '../../assets/img/bg3.jpg';
import './reactslider.css';

const useStyles = makeStyles((theme) => ({
	screensContainer: {
		height: '460px',
		borderBottomLeftRadius: '0% 0% !important',
    	borderBottomRightRadius: '0% 0% !important',
		[theme.breakpoints.down("sm")]: {
			height: '320px'
		}
	},
	screenheight:{
		height: '100%',
	}
}));
const AutoplaySlider = withAutoplay(AwesomeSlider);

const SimpleSlider = () =>{
	const classes = useStyles();
	return(
		<AutoplaySlider
				organicArrows={false}
				className={classes.screensContainer}
				play={true}
				bullets={false}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={1000}
			>
				{/* <div className='screenheight' data-src={image1} /> */}
				{/* <div className='screenheight' data-src={image2} /> */}
				<div className='screenheight' data-src={image3} />
			</AutoplaySlider>
	)
}

export default SimpleSlider;

