const BlogImage = ({src, content="" ,height='none'}) => {
    let final_height = "100%";
    if (height != 'none'){
        final_height = height;
    }
    return (
        <div className='blog-image-wrapper'>
            <img className="blog-image" src={src} style={{height: final_height}}/>
            <div className='blog-img-content'>{content}</div>
        </div>
    )
}

export default BlogImage;