import React from 'react';
import logo from '../../src/assets/img/logo.png';
import Pricing from "../views/UserPricing.js";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Link to='/'><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={logo} /></Link>
                        <div class="text-center lg:w-2/3 w-full">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Know More About Us</h1>
                            <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                            <Pricing />
                            <div class="flex justify-center">
                                <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans',color:'#FFF' }} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                            </div>
                        </div>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default AboutUs;