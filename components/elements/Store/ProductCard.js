const ProductCard = ({title, desc, link, price="$0" , src="/images/yazhi.png"})=>{
    return(
        <a href={link}>
        <div className="product-card-wrapper">
            <img className="product-card-image" src={src} alt={title}/>
            <div className="product-card-title">{title}</div>
            <div className="product-card-desc">{desc}</div>
            <div className="product-price">{price}</div>
        </div>
        </a>
    )
}

export default ProductCard;