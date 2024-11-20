const PurchaseButton = ({name, link, margin="0px"}) => {
    return(
        <a href={link}>
            <button className='purchase-button' style={{marginTop: margin}}>{name}</button>
        </a>
    )
}

export default PurchaseButton;  