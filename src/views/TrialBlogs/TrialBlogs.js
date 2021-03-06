import React, { useEffect, useState } from 'react';
import SignUpModal from '../../components/SignUpModal/SignUpModal.js';
import Header from "./TrialHeader.js";
import HeaderLinks from './TrialHeaderLinks.js';
import Blogs from '../../REST/Blogs.js';
import { Link } from "react-router-dom";

const TrialBlog = () => {

    const [showModal, setShowModal] = useState(false)
    const [useBlogsOne, setBlogOne] = useState([]);
    const [useBlogsTwo, setBlogTwo] = useState([]);

    useEffect(() => {
        let api_url = "api/admin/getBlog/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                setBlogOne(res.data[0])
                setBlogTwo(res.data[1])
            })
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <React.Fragment>
            {
                showModal ? <SignUpModal showModal={showModal} /> : ""
            }
            <div className="mb-32">
                <Header
                    brand="Well Woman"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                />
            </div>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-4 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        {

                            <section class="text-gray-700 body-font overflow-hidden">
                                <div class="container px-5 py-24 mx-auto">
                                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={useBlogsOne.imageurl} />
                                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                            <h2 class="text-sm title-font text-gray-500 tracking-widest">Dr. Snehal Adsule</h2>
                                            <h1  style={{fontFamily: 'Paytone One'}} class="text-gray-900 text-3xl title-font font-medium mb-1">{useBlogsOne.title}</h1>
                                            {/* <div class="flex mb-4">
                                                <span class="flex items-center">
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                </span>
                                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                                    <a class="text-gray-500">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a class="ml-2 text-gray-500">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a class="ml-2 text-gray-500">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div> */}
                                            <p class="leading-relaxed">{useBlogsOne.shortdiscription}</p>
                                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                            </div>
                                            <div class="flex">
                                                <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link to={{
                                                    pathname: "/blog/" + useBlogsOne._id,
                                                    state: useBlogsOne
                                                }}>
                                                    View Blog
                                            </Link></button>
                                                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        }
                        {

                            <section class="text-gray-700 body-font overflow-hidden">
                                <div class="container px-5 py-4 mx-auto">
                                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={useBlogsTwo.imageurl} />
                                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                            <h2 class="text-sm title-font text-gray-500 tracking-widest">Dr. Snehal Adsule</h2>
                                            <h1  style={{fontFamily: 'Paytone One'}} class="text-gray-900 text-3xl title-font font-medium mb-1">{useBlogsTwo.title}</h1>
                                            {/* <div class="flex mb-4">
                                                <span class="flex items-center">
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                </span>
                                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                                    <a class="text-gray-500">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a class="ml-2 text-gray-500">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a class="ml-2 text-gray-500">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div> */}
                                            <p class="leading-relaxed">{useBlogsTwo.shortdiscription}</p>
                                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                            </div>
                                            <div class="flex">
                                                <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link to={{
                                                    pathname: "/blog/" + useBlogsTwo._id,
                                                    state: useBlogsTwo
                                                }}>
                                                    View Blog
                                                </Link></button>
                                                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        }
                    </div>
                </div>
            </section>


        </React.Fragment>
    );
}

export default TrialBlog;