const BuyNow = ({name, link, margin="0px"}) => {
    return(
        <a href={link}>
            <button className='buy-now-button' style={{marginTop: margin}}>{name}</button>
        </a>
    )
}

export default BuyNow;  