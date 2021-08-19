import React, { useState } from 'react';

const MediaLinks = () => {
    const [mediaLinks, setMediaLinks] = useState([
        'https://www.latestly.com/lifestyle/dr-snehal-adsule-working-to-combat-dietary-deficiency-for-women-in-india-2524919.html',
        'https://www.hindustantimes.com/brand-post/dr-snehal-adsule-creating-healthier-relationship-between-you-and-your-body-101623152854123.html',
        'https://www.zee5.com/zee5news/dr-snehal-adsule-working-to-combat-dietary-deficiency-for-women-in-india',
        'https://www.openthenews.com/fall-for-health-take-your-first-step-towards-a-healthy-life-with-dr-snehal-adsule/',
        'https://www.mid-day.com/lifestyle/infotainment/article/unlock-your-potential-through-good-nutrition-with-dr-snehal-adsule-23177591',
        'https://disruptmagazine.com/eat-desi-lose-weight-easy-life-mantra-of-dr-snehal-adsule-a-well-recognized-dietitian/',
        'https://timebusinessnews.com/a-new-tradition-is-a-great-nutrition-acquire-it-from-dr-snehal-adsule/',
        'https://www.timebulletin.com/eat-well-be-nourished-and-affluent-with-an-eminent-dietitian-dr-snehal-adsule/',
        'https://www.influencive.com/dr-snehal-adsule-a-recognized-dietitian-promoting-healthy-lifestyle-for-women-in-india/',
        'https://www.youthkiawaaz.com/2021/06/dr-snehal-adsule-a-dietitian-with-the-mission-to-improve-the-health-conditions-of-women',
        'http://dhunt.in/hk9mF'
    ]);

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Media Link</h1>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        {
                            mediaLinks.map((el, index) => {
                                return (
                                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <div  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"><p className='text-center text-pink-600 font-bold text-lg mt-4'>{index + 1}</p></div>
                                            <div class="flex-grow">
                                                <a href={el} class="text-blue-500 text-xs cursor-pointer">{el}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MediaLinks;