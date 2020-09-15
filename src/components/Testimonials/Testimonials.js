import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const useStyles = makeStyles((theme) => ({
    screensContainer: {
        height: '460px',
        [theme.breakpoints.down("sm")]: {
            height: '620px'
        }
    },
    screenheight: {
        height: '100%',
    }
}));
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Testimonials = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h1 id="testimonials" style={{ color: '#4e6073', textAlign: 'center' }} className="sm:text-3xl mt-24 text-3xl md:text-4xl md:mt-16 font-extrabold title-font mb-4 text-gray-900">TESTI<span class="text-indigo-600">MONIALS</span></h1>
            <div class="text-center">
                <h3 class="text-3xl sm:text-5xl md:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
                    What our <span class="text-indigo-600">Clients say?</span>
                </h3>

            </div>
            <AutoplaySlider
                organicArrows={false}
                className={classes.screensContainer}
                play={true}
                bullets={false}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
            >
                {/* <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p class="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                </section> */}


                {/* <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p class="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                </section> */}


                {/* <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p class="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                </section> */}


                <div class="py-0 md:py-24 bg-white">
                    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">



                        <div class="mt-8 md:mt-2">

                            <div class="sm:flex items-center">
                                <img style={{ margin: '0 auto' }} class=" sm:w-48 sm:h-48 w-34 h-34 md:w-48 md:h-48 rounded-full sm:ml-10" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" alt="Avatar of Jonathan Reinink" />

                                <div class="text-left">
                                    <div class="mb-4 text-gray-500  md:ml-24">
                                        <svg height="35px" class="mb-2" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 32 32" >
                                            <g>
                                                <g id="right_x5F_quote">
                                                    <g>
                                                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                                                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p class="mt-2 text-base leading-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                        <div class="text-sm mt-5">
                                            <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Jonathan Reinink</a>
                                            <p>CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-0 md:py-24 bg-white">
                    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">



                        <div class="mt-8 md:mt-2">

                            <div class="sm:flex items-center">
                                <img style={{ margin: '0 auto' }} class=" sm:w-48 sm:h-48 w-34 h-34 md:w-48 md:h-48 rounded-full sm:ml-10" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" alt="Avatar of Jonathan Reinink" />

                                <div class="text-left">
                                    <div class="mb-4 text-gray-500  md:ml-24">
                                        <svg height="35px" class="mb-2" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 32 32" >
                                            <g>
                                                <g id="right_x5F_quote">
                                                    <g>
                                                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                                                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p class="mt-2 text-base leading-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                        <div class="text-sm mt-5">
                                            <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Jonathan Reinink</a>
                                            <p>CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="py-0 md:py-24 bg-white">
                    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">



                        <div class="mt-8 md:mt-2">

                            <div class="sm:flex items-center">
                                <img style={{ margin: '0 auto' }} class=" sm:w-48 sm:h-48 w-34 h-34 md:w-48 md:h-48 rounded-full sm:ml-10" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" alt="Avatar of Jonathan Reinink" />

                                <div class="text-left">
                                    <div class="mb-4 text-gray-500  md:ml-24">
                                        <svg height="35px" class="mb-2" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 32 32" >
                                            <g>
                                                <g id="right_x5F_quote">
                                                    <g>
                                                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                                                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p class="mt-2 text-base leading-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                        <div class="text-sm mt-5">
                                            <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Jonathan Reinink</a>
                                            <p>CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </AutoplaySlider>
        </React.Fragment>
    )
}

export default Testimonials;

