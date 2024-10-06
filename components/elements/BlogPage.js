import BlogHeading from "./BlogHeading";
import Head from "next/head";

const BlogPage = ({children, title, head}) => {
    return (
        <>
        <Head>
            <title>{head}</title>
        </Head>
        <div className="blog-page">
            <div className="content">
                <BlogHeading>
                    {title}
                </BlogHeading>
                {children}
            </div>
        </div>
        </>
    )
}

export default BlogPage;