import React, { Component } from 'react';
import ReactCardCarousel from "react-card-carousel";
import ReactCard from "../../components/Card/ReactCard.js";
class OurWorking extends Component {
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "80vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="sm:text-3xl mb-0 md:mb-0 text-4xl mt-24 md:text-5xl font-medium title-font text-white-600" align="center">OUR WORK</h1>
                <div style={OurWorking.CONTAINER_STYLE} className="mt-4 md:mt-8">
                    <ReactCardCarousel autoplay={true} autoplay_speed={2500} style={{background:'#000'}}>

                        {/* <div className="max-w-md w-full lg:flex">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }} title="Woman holding a mug">
                            </div>
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-grey-dark flex items-center">
                                        <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
        Members only
      </p>
                                    <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                    <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                                    <div className="text-sm">
                                        <p className="text-black leading-none">Jonathan Reinink</p>
                                        <p className="text-grey-dark">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md w-full lg:flex">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }} title="Woman holding a mug">
                            </div>
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-grey-dark flex items-center">
                                        <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
        Members only
      </p>
                                    <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                    <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                                    <div className="text-sm">
                                        <p className="text-black leading-none">Jonathan Reinink</p>
                                        <p className="text-grey-dark">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md w-full lg:flex">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }} title="Woman holding a mug">
                            </div>
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <p className="text-sm text-grey-dark flex items-center">
                                        <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
        Members only
      </p>
                                    <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                    <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                                    <div className="text-sm">
                                        <p className="text-black leading-none">Jonathan Reinink</p>
                                        <p className="text-grey-dark">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="max-w-md w-full lg:flex">
                            <div class="h-full border-1 border-gray-200 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://tailwindcss.com/img/card-left.jpg" alt="blog" />
                                    <div class="p-6">
                                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex items-center flex-wrap">
                                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
              </span>
                                            <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
              </span>
                                        </div>
                                    </div>
        </div>
        </div> */}





            {/* <ReactCard /> */}
            {/* <ReactCard /> */}
            {/* <ReactCard /> */}
            <ReactCard />
            <ReactCard />
            <ReactCard />















                        {/* <div class="rounded overflow-hidden shadow-lg bg-white flex flex-col border">
                            <div class="flex items-center p-4">
                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                <div class="text-sm">
                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                    <p class="text-gray-600 text-xs">Aug 18 | in <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                            Recipe
</a></p>
                                </div>
                            </div>

                            <a href="#">
                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                            </a>
                            <div class="p-4 pb-6 bg-white">
                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                <p class="text-gray-500 text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
                            </div>
                        </div> */}

                        {/* <div class="rounded overflow-hidden shadow-lg bg-white flex flex-col border">
                            <div class="flex items-center p-4">
                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                <div class="text-sm">
                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                    <p class="text-gray-600 text-xs">Aug 18 | in <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                            Recipe
</a></p>
                                </div>
                            </div>

                            <a href="#">
                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                            </a>
                            <div class="p-4 pb-6 bg-white">
                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                <p class="text-gray-500 text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
                            </div>
                        </div>




                        <div class="rounded overflow-hidden shadow-lg bg-white flex flex-col border">
                            <div class="flex items-center p-4">
                                <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                <div class="text-sm">
                                    <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                    <p class="text-gray-600 text-xs">Aug 18 | in <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                        Cooking
</a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                            Recipe
</a></p>
                                </div>
                            </div>

                            <a href="#">
                                <img class="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                            </a>
                            <div class="p-4 pb-6 bg-white">
                                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest Salad Recipe ever</a>
                                <p class="text-gray-500 text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
                            </div>
                        </div> */}
                    </ ReactCardCarousel>

                </div>
            </React.Fragment >
        );
    }
}

export default OurWorking;