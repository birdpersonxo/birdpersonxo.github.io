import { GoKebabHorizontal } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { GoX } from "react-icons/go";
import {useState} from "react";

import Link from 'next/link';
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <div className="header-wrapper">
            <div className="header">

                <Link href="/" className="logo">
                    <b>DEEPAK</b> RAJAN 
                </Link>
                <div className="menu-wrapper">
                    <Link href="/" className="menu">
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
                    <Link href="#" onClick={toggleMenu}>
                        <FiAlignJustify size={28}/>
                    </Link>
                </div>

            </div>
        </div>
        {menuOpen && (
            <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
                <Link href="#" className="close-btn" onClick={toggleMenu}>
                    <GoX />
                </Link>
                <Link href="/" className="menu-item">
                    WORKS
                </Link>
                <Link href="art" className="menu-item">
                    ART
                </Link>
                <Link href="https://imbirdperson.gumroad.com/" className="menu-item">
                    STORE
                </Link>
                <Link href="blog" className="menu-item">
                    BLOG
                </Link>
                <Link href="profile" className="menu-item profile">
                    PROFILE
                </Link>

            </div>
        )}
        </>
    )
}

export default Header;