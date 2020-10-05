import React, { useEffect, useState } from 'react';
import SignUpModal from '../../components/SignUpModal/SignUpModal.js';
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
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
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        {

                            <div class="sm:w-1/2 mb-10 px-4">
                                <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src={useBlogsOne.imageurl} />
                                </div>
                                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Paytone One' }}>{useBlogsOne.title}</h2>
                                <p style={{ width: '461px', fontFamily: 'Open Sans', whiteSpace: 'break-spaces', overflow: 'hidden', textOverflow: 'ellipsis' }} class="leading-relaxed text-base">{useBlogsOne.shortdiscription}</p>
                                <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="flex mx-auto mt-6 text-white  border-0 py-2 px-5  rounded">
                                    <Link to={{
                                        pathname: "/blog/" + useBlogsOne._id,
                                        state: useBlogsOne
                                    }}>
                                        View Blog
                                                </Link>
                                </button>
                            </div>
                        }
                        {

                            <div class="sm:w-1/2 mb-10 px-4">
                                <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src={useBlogsTwo.imageurl} />
                                </div>
                                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Paytone One' }}>{useBlogsTwo.title}</h2>
                                <p style={{ width: '461px', fontFamily: 'Open Sans', whiteSpace: 'break-spaces', overflow: 'hidden', textOverflow: 'ellipsis' }} class="leading-relaxed text-base">{useBlogsTwo.shortdiscription}</p>
                                <button style={{ backgroundColor: '#D00F7F', fontFamily: 'Open Sans', color: '#FFF' }} class="flex mx-auto mt-6 text-white  border-0 py-2 px-5  rounded">
                                    <Link to={{
                                        pathname: "/blog/" + useBlogsTwo._id,
                                        state: useBlogsTwo
                                    }}>
                                        View Blog
                                            </Link>
                                </button>
                            </div>

                        }
                    </div>
                </div>
            </section>


        </React.Fragment>
    );
}

export default TrialBlog;