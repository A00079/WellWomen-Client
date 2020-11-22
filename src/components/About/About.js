import React, { Component } from 'react';
import { Link } from "react-router-dom";
import hero from '../../assets/img/drsnehal.webp';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 id="aboutus" style={{ color: '#4e6073', textAlign: 'center', fontFamily: 'Paytone One' }} className="sm:text-3xl text-3xl mt-24  md:text-4xl md:mt-24 font-medium title-font mb-4 font-extrabold text-gray-900">ABOUT   <span class="text-indigo-600" style={{ color: '#D00F7F' }}>US</span></h1>
                <section className="text-gray-700 body-font" style={{ background: '#D00F7F' }}>
                    <div className="container mx-auto flex px-5 md:py-16  py-4 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} />
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <h1 className="title-font sm:text-4xl md:text-2xl text-3xl mb-4 font-medium text-white">About
                                <br className="hidden lg:inline-block" />CurviCare
                            </h1>
                            <p className="mb-8 leading-relaxed text-white">Dr. Snehal Adsule (MD) is an enthusiastic, young Doctor & Nutritionist specialization in Women Weight Loss. She has a BHMS (Homeopathy) degree from Maharashtra University Of Health Sciences. She further certified herself with Nutrition & Dietetics from Tulip International with affiliation of GCTA (Australia). She is also a certified Personal Counselor & REBT Therapist. With all her medical knowledge, passion & ever positive attitude, she is successfully treating & giving complete personal attention to every woman whose unable to find weight loss solution by their own.</p>
                            <div className="flex justify-center">
                                <Link to='/singleaboutus'>
                                    <button style={{ background: '#fff', color: '#D00F7F' }} className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default About;