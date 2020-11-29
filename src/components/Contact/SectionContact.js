import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col text-center w-full mb-0">
                {/* <h3 style={{ fontFamily: 'Paytone One' }} className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CONTACT <span style={{ color: '#D00F7F' }}>US</span></h3> */}
                <h3 style={{ fontFamily: 'Paytone One' }} class="text-3xl sm:text-5xl md:text-4xl md:mt-2 leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-0 mt-0 sm:mb-10">
                    CONTACT <span class="text-indigo-600" style={{ color: '#D00F7F' }}> US</span>
                </h3>
            </div>
            <Link to='/contact'>
                <h1 className='sm:text-3xl text-2xl mt-10 font-medium title-font text-center text-gray-900 mb-10'>
                    <a href="https://api.whatsapp.com/send?phone=9109137617952&text=Hello." style={{ width: '20%', background: '#D00F7F', color: '#fff', margin: '0 auto', fontFamily: 'Open Sans' }} className="flex-shrink-0 text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-20 sm:mt-0">
                        Click to Contact
                    </a>
                </h1>
            </Link>
        </React.Fragment>
    );
}

export default Contact;