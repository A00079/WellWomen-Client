import React, { Component } from 'react';
import downloads from '../../assets/img/downloads.png';
import awards from '../../assets/img/awards.png';
import likes from '../../assets/img/likes.png';
import Recomended from '../../assets/img/Recomended.png';


class AppInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-16 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">WE NEVER STOP IMPROVING</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div class="flex flex-wrap -m-4 text-center">
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg> */}
                                    <img src={downloads} class="text-indigo-500 w-12 h-12 mb-3 inline-block" />

                                    <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p class="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                    </svg> */}
                                    <img src={awards} class="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                    <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                    <p class="leading-relaxed">Awards</p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <img src={likes} class="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                    <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
                                    <p class="leading-relaxed">Likes</p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg> */}
                                    <img src={Recomended} class="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                    <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                                    <p class="leading-relaxed">Recomended</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AppInfo;