import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
		[theme.breakpoints.down("sm")]: {
			height: '535px'
		}
	},
	screenheight: {
		height: '100%',
	}
}));
const AutoplaySlider = withAutoplay(AwesomeSlider);

const SimpleSlider = () => {
	const classes = useStyles();
	return (
		<AutoplaySlider
			organicArrows={false}
			className={classes.screensContainer}
			play={true}
			bullets={false}
			cancelOnInteraction={false} // should stop playing on user interaction
			interval={4000}
		>
			<section class="text-gray-700 body-font" >
				<div class="container mx-auto flex px-0 py-4 md:mt-8 mt-0 md:flex-row flex-col items-center">
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-6 md:mb-0">
						<img class="object-cover object-center rounded" alt="hero" src={image1} />
					</div>
					<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 class="title-font sm:text-4xl md:text-2xl text-2xl mb-4 font-medium text-gray-900">Our Special Journeys</h1>
						<p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
						<div class="flex w-full md:justify-start justify-center">
							<button id="ourwork" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								<Link to="/startjourney" className={classes.dropdownLink}>
									Start Your Journey
                                    </Link>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section class="text-gray-700 body-font">
				<div class="container mx-auto flex px-0 py-4 md:mt-8 mt-0 md:flex-row flex-col items-center">
					<div class="lg:flex-grow md:w-1/2 lg:pl-8 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 class="title-font sm:text-4xl md:text-2xl text-2xl mb-4 font-medium text-gray-900">Our Special Journeys</h1>
						<p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
						<div class="flex w-full md:justify-start justify-center">
							<button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								<Link to="/startjourney" className={classes.dropdownLink}>
									Start Your Journey
                                    </Link>
							</button>
						</div>
					</div>
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-6 md:mb-0">
						<img class="object-cover object-center rounded" alt="hero" src={image1} />
					</div>
				</div>
			</section>


			<section class="text-gray-700 body-font">
				<div class="container mx-auto flex px-0 py-4 md:mt-8 mt-0 md:flex-row flex-col items-center">
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6 mb-6 md:mb-0">
						<img class="object-cover object-center rounded" alt="hero" src={image1} />
					</div>
					<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 class="title-font sm:text-4xl md:text-2xl text-2xl mb-4 font-medium text-gray-900">Our Special Journeys</h1>
						<p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
						<div class="flex w-full md:justify-start justify-center">
							<button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								<Link to="/startjourney" className={classes.dropdownLink}>
									Start Your Journey
                                    </Link>
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* <div className='screenheight' data-src={image1} /> */}
			{/* <div className='screenheight' data-src={image2} /> */}
			{/* <div className='screenheight' data-src={image3} /> */}
		</AutoplaySlider>
	)
}

export default SimpleSlider;

