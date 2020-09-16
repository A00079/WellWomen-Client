import React, { useEffect, useState } from 'react';
import ReadMore from './Accordian.js';
import Blogs from '../../REST/Blogs.js';
const UserBlog = () => {

    const [useBlogs, setBloga] = useState([]);
    useEffect(() => {
        let api_url = "api/admin/getBlog/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                setBloga(res.data)
                console.log('All Announcements', res)
            })
    }, [])

    return (
        <React.Fragment>

            {
                useBlogs.map((item,index) => {
                    return (
                        <div key={index} class="max-w-full px-6 my-4 md:ml-0 py-6 bg-white rounded-lg">
                            <div class="flex justify-between items-center">
                                <span class="font-light text-gray-600">{item.date}</span>
                                <a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{item.anytag}</a>
                            </div>
                            <div class="mt-2">
                                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">{item.shortdiscription}</a>
                                <p class="mt-2 text-gray-600">{item.discription}</p>
                            </div>
                            <div class="flex justify-between items-center mt-4">
                                <a class="text-blue-600 hover:underline" href="#">{item.youtubelink}</a>
                                <div>
                                    <a class="flex items-center" href="#">
                                        <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" />
                                        <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                                    </a>
                                </div>
                            </div>
                            <ReadMore disscription={item.discription} />
                        </div>
                    )
                })
            }
        </React.Fragment>
    );
}

export default UserBlog;