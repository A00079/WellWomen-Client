import React, { Component } from 'react';
import './reactslider.css'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../../assets/img/bg.jpg';
import image2 from '../../assets/img/bg2.jpg';
import image3 from '../../assets/img/bg3.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class SimpleSlider extends Component {
	render() {
		return (
			<AutoplaySlider
				organicArrows={false}
				className='screensContainer'
				play={true}
				bullets={false}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={1000}
			>
				<div className='screenheight' data-src={image1} />
				<div className='screenheight' data-src={image2} />
				<div className='screenheight' data-src={image3} />
			</AutoplaySlider>
		);
	}
}
