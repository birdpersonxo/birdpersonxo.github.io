import Link from 'next/link';
const Header = () => {
    return (
        <>
        <div className="header-wrapper">
            <div className="header">

                <Link href="/" className="logo">
                    <b>DEEPAK</b> RAJAN ~ 2024
                </Link>
                <div className="menu-wrapper">
                    <Link href="works" className="menu">
                        WORKS
                    </Link>
                    <Link href="art" className="menu">
                        ART
                    </Link>
                    <Link href="https://imbirdperson.gumroad.com/" className="menu">
                        STORE
                    </Link>
                    <Link href="blog" className="menu">
                        BLOG
                    </Link>
                    <Link href="profile" className="menu profile">
                        PROFILE
                    </Link>
                </div>

            </div>
        </div>
        </>
    )
}

export default Header;