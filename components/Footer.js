import Link from 'next/link';
const Footer = ({mode=""}) => {
    return (
        <>
        <div className='footer-wrapper'>
            <div className='left'>
                <Link href="https://www.instagram.com/deepak_rajan_/" style={{color:mode}} >Instagram</Link>
                <Link href="https://youtube.com/@DeepakRajan" style={{color:mode}} >YOUTUBE</Link>
            </div>
            <div className='mid'>
                <Link href="https://github.com/imbirdperson" style={{color:mode}} >GITHUB</Link>
                <Link href="https://youtube.com/@DeepakRajan" style={{color:mode}} >LINKEDIN</Link>
            </div>
            <div className='right'>
                <Link href="mailto:example@example.com" style={{color:mode}} >EMAIL</Link>
                {/* <Link href="https://youtube.com/@DeepakRajan">CONTACT</Link> */}
            </div>
        </div>
        </>
    )
}

export default Footer;