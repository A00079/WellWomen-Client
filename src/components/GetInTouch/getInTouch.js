import React, { Component } from 'react';

class getIntouch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ color: '#4e6073', textAlign: 'center', fontFamily: 'Paytone One' }} className="sm:text-3xl text-3xl md:text-4xl md:mt-16 font-extrabold title-font mb-4 text-gray-900">GET IN  <span class="text-indigo-600" style={{ color: '#D00F7F' }}>TOUCH WITH US</span></h1>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 md:px-0 py-8 lg:py-2 md:py-24 mx-auto" id="contactus">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 style={{ textAlign: 'center', fontFamily: 'Open Sans' }} className="flex-grow sm:pr-16 mb-8 md:mb-0 text-2xl font-medium title-font text-gray-900">
                                Still confuse Get a FREE Suggetion from our Health Expert on WhatsApp
                            </h1>
                            <button style={{ width: '60%', background: '#D00F7F', color: '#fff', margin: '0 auto', fontFamily: 'Open Sans' }} className="flex-shrink-0 text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-10 sm:mt-0">Click Here To Chat</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default getIntouch;