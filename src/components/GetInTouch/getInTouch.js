import React, { Component } from 'react';

class getIntouch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 class="sm:text-3xl  text-2xl font-medium title-font mt-4 text-gray-900" align="center">GET IN TOUCH WITH US</h1>

                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                            Still confuse Get a FREE Suggetion from our Health Expert on WhatsApp
                            </h1>
                            <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Click Here To Chat</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default getIntouch;