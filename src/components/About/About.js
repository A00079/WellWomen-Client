import React, { Component } from 'react';
import hero from '../../assets/img/bg4.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 id="aboutus" style={{ color: '#4e6073', textAlign: 'center' }} className="sm:text-3xl text-3xl mt-24 md:text-5xl md:mt-24 font-medium title-font mb-4 text-gray-900">ABOUT US</h1>
                <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex px-5 md:py-16  py-4 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <img className="object-cover object-center rounded" style={{ width: '55rem' }} alt="hero" src={hero} />
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About
        <br className="hidden lg:inline-block" />Well Women
      </h1>
                            <p className="mb-8 leading-relaxed">While losing weight is tough for anyone, there are several factors that can make it extra challenging for women. We have our specialized Women diet program at Wellwoman which is designed by keeping their metabolism & Nutritional requirements in mind</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default About;