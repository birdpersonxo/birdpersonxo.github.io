import Link from 'next/link';
import Head from 'next/head';
const BlogPostData = [
    {
    name:"OpenCL Ray Tracing in One weekend",
    image:"/images/adya.png",
    desc:"Jimmy Donaldson is an internet personality, businessman, and philanthropist. He operates several popular YouTube channels, a delivery based fast food restaurant, MrBeast Burger, and two philanthropic programs:",
    },
    {
    name:"OpenCL",
    image:"/images/adya.png",
    desc:"Jimmy Donaldson is an internet personality, businessman, and philanthropist. He operates several popular YouTube channels, a delivery based fast food restaurant, MrBeast Burger, and two philanthropic programs:",
    },
]
const BlogPage = () => {
    return(
        <>
        <Head>
            <title>Deepak Rajan — Blogs</title>
        </Head>
        <div className='content-item'>
            <div className='blogs-wrapper'>
            <div className='page-title'>BLOGS</div>
                {BlogPostData.map((item, index) => (
                    <BlogPost key={index} 
                    name={item.name}
                    image={item.image}
                    desc={item.desc}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

const BlogPost = ({name, image, desc}) =>{
    return (
        <Link href="#">
        <div className='blog-post-wrapper'>
            <img src={image} className="image"/>
            <div className="content">
                <div className="title">
                    {name}
                    <div className="date">
                        26 SEP 1996
                    </div>
                </div> 
                <div className="desc">
                    {desc}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BlogPage;