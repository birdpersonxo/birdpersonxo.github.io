import Link from 'next/link';
const Footer = () => {
    return (
        <>
        <div className='footer-wrapper'>
            <div className='left'>
                <Link href="https://github.com/imbirdperson">GITHUB</Link>
                <Link href="https://youtube.com/@DeepakRajan">LINKEDIN</Link>
            </div>
            <div className='mid'>
                <Link href="https://www.instagram.com/deepak_rajan_/">Instagram</Link>
                <Link href="https://youtube.com/@DeepakRajan">YOUTUBE</Link>
            </div>
            <div className='right'>
                <Link href="https://www.instagram.com/deepak_rajan_/">EMAIL</Link>
                <Link href="https://youtube.com/@DeepakRajan">CONTACT</Link>
            </div>
        </div>
        </>
    )
}

export default Footer;