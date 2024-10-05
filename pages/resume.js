import Head from 'next/head';
import Link from 'next/link';
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";


const Resume = () => {
    return (
        <>
    <Head>
      <title>Deepak Rajan — Resume</title>
    </Head>
        <div className="resume-wrapper">
            <div className="resume-content">
            <div className='title'>
                RESUME - 2024
            </div>
            <div className="name">
                <b>Deepak</b> Rajan
            </div>
            <div className="about">
                Hello! 
                As an architect and visual effects artist, 
                I have honed my skills in blending design,
                technology, and storytelling.
                My journey across these fields has given me a unique 
                perspective on spatial aesthetics and visual narratives.
                Now, driven by a passion for directing,
                I aim to merge my architectural precision and 
                creative visual expertise to craft compelling stories on 
                screen, exploring the limitless possibilities of film and visual storytelling.
            </div>


            <div className="heading">
                Work Experiences
            </div>
            <div className="item-wrapper">
                <GoHorizontalRule />
                <div className='wrapper'>
                    <p className='item-title'>Rising Sun Pictures - Adelaide</p>
                    <p className='item-sub-title'>Character Fx TD - 2024</p>
                <GoHorizontalRule />
                </div>

                <div className='wrapper'>
                    <p className='item-title'>Double Negative - Bangalore </p>
                    <p className='item-sub-title'>Character Fx TD - 2023</p>
                <GoHorizontalRule />
                </div>


                <div className='wrapper'>
                    <p className='item-title'>Motion Picture Company - Bangalore</p>
                    <p className='item-sub-title'> Creature Effects Artist - 2022</p>
                <GoHorizontalRule />
                </div>

                <div className='wrapper'>
                    <p className='item-title'>Wright Inspires - Bangalore</p> 
                    <p className='item-sub-title'>Architect - 2019</p>
                <GoHorizontalRule />
                </div>
            </div>


            <div className="heading">
                Artistic Skills
            </div>
            <div className="item-wrapper">
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Character Design - 2D & 3D</p>
                </div>
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Storyboard / Animatics</p>
                </div>
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Fine Arts</p>
                </div>
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Motion Graphics</p>
                </div>
            </div>


            <div className="heading">
                Technical Skills
            </div>
            <div className="item-wrapper">
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Visual Effects Softwares</p>
                </div>
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Design / CAD Softwares</p>
                </div>
                <div className='flex'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Programming</p>
                </div>
            </div>

            <div className="heading">
                Education
            </div>
            <div className="item-wrapper">
                <GoHorizontalRule />
                <p className="item-title">Bachelor of Architecture </p>
                <p className="item-sub-title"> McGan's Ooty School of Architecture</p>
                <GoHorizontalRule />
            </div>


            <div className="heading">
                Contact
            </div>
            <div className="wrapper">
                <div className='item-wrapper flex'>
                    <p className='item-sub-title'>EMAIL</p>
                    <GoHorizontalRule />
                    <p className='item-title text-transform-none'> birdperson.me@gmail.com</p>
                </div>

                <div className='item-wrapper flex'>
                    <p className='item-sub-title'>WEBSITE</p>
                    <GoHorizontalRule />
                    <p className='item-title text-transform-none'><Link href="https://wwww.birdperson.me">www.birdperson.me</Link></p>
                </div>

                <div className='item-wrapper flex'>
                    <p className='item-sub-title text-transform-none'>PHONE</p>
                    <GoHorizontalRule />
                    <p className='item-title'> +61 452491574</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default Resume;