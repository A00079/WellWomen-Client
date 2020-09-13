import React, { Component } from 'react';

class getIntouch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ color: '#4e6073',textAlign: 'center' }} className="sm:text-3xl text-3xl md:text-5xl md:mt-16 font-extrabold title-font mb-4 text-gray-900">GET IN  <span class="text-indigo-600">TOUCH WITH US</span></h1>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-8  md:py-24 mx-auto" id="contactus">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 style={{textAlign:'center'}} className="flex-grow sm:pr-16 mb-8 md:mb-0 text-2xl font-medium title-font text-gray-900">
                            Still confuse Get a FREE Suggetion from our Health Expert on WhatsApp
                            </h1>
                            <button style={{width: '60%',margin: '0 auto'}} className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Click Here To Chat</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default getIntouch;