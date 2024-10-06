const BlogImage = ({src, content="" ,height='none'}) => {
    let final_height = "100%";
    if (height != 'none'){
        final_height = height;
    }
    return (
        <div className='image-wrapper'>
            <img className="image" src={src} style={{height: final_height}}/>
            <div className='img-content'>{content}</div>
        </div>
    )
}

export default BlogImage;