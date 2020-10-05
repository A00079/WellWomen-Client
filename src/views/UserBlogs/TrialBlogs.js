import React from 'react';
import recipeone from '../../assets/img/w2.jpg';
import recipetwo from '../../assets/img/w5.jpg';

const TrialBlog = () => {
    const [useBlogs, setBloga] = useState([]);
    useEffect(() => {
        let api_url = "api/admin/getBlog/read";
        Blogs
            .getBlogList(api_url)
            .then((res) => {
                setBloga(res.data)
            })
    }, [])
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        {
                            useBlogs.map((blog, index) => {
                                return (
                                    <div class="sm:w-1/2 mb-10 px-4">
                                        <div class="rounded-lg h-64 overflow-hidden">
                                            <img alt="content" class="object-cover object-center h-full w-full" src={blog.imageurl} />
                                        </div>
                                        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{blog.title}</h2>
                                        <p class="leading-relaxed text-base">{blog.shortdiscription}</p>
                                        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">View Blog</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default TrialBlog;