import Link from 'next/link';
import Head from 'next/head';
import Footer from '../../components/Footer';
const BlogPostData = [
    {
    name:"Simple Lambert Ray Tracing in OpenCL",
    image:"/images/adya.png",
    desc:"Writing a simple lambert shader in OpenCL using Houdini's Copernicus.",
    url:"blog/lambert-in-opencl-houdini",
    date: "01 Oct 2024",
    },
    {
    name:"Bending branches using Math",
    image:"/images/adya.png",
    desc:"Vegetation branch logic using math and some non-linear transformation to shape them.",
    url:"blog/bending-branches",
    date: "20 Sep 2024",
    },
]
const BlogPage = () => {
   return(
        <>
        <Head>
            <title>Deepak Rajan — Blogs</title>
        </Head>
        <div className='blogs-wrapper'>
            <div className='blogs'>
            <div className='page-title'>BLOGS</div>
                {BlogPostData.map((item, index) => (
                    <BlogPost key={index} 
                    name={item.name}
                    image={item.image}
                    desc={item.desc}
                    url={item.url}
                    date={item.date}

                    />
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}

const BlogPost = ({name, image, desc, url, date}) =>{
    return (
        <Link href={url}>
        <div className='blog-post-wrapper'>
            <div className="blog-content">
                <div className="title">
                    {name}
                    <div className="date">
                        {date}
                    </div>
                </div> 
                <div className="desc">
                    {desc}
                </div>
            </div>
            <img src={image} className="image"/>
        </div>
        </Link>
    )
}

export default BlogPage;