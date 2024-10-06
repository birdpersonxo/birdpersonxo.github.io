import Head from 'next/head';
import Link from 'next/link';
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";


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
                Works
            </div>
            <div className='item-wrapper work-item-resume'>
                <Link href="https://www.birdperson.me/showreel">Visual Effect Showreel</Link>
                <GoArrowUpRight />
            </div>
            <div className='item-wrapper work-item-resume'>
                <Link href="https://www.birdperson.me/anim-short">Animated Short (Work in Progress)</Link>
                <GoArrowUpRight />
            </div>
            <div className='item-wrapper work-item-resume'>
                <Link href="https://www.birdperson.me/art">Art</Link>
                <GoArrowUpRight />
            </div>

            <div className="heading">
                Work Experiences
            </div>
            <div className="item-wrapper">
                <div className='wrapper'>
                    <Link className='link' href="https://www.rsp.com.au/">Rising Sun Pictures - Adelaide</Link>
                    <GoArrowUpRight />
                    <p className='item-sub-title'>Character Fx TD - 2024</p>
                <GoHorizontalRule />
                </div>

                <div className='wrapper'>
                    <Link className='link' href="https://www.dneg.com/">Double Negative - Bangalore </Link>
                    <GoArrowUpRight />
                    <p className='item-sub-title'>Character Fx TD - 2023</p>
                <GoHorizontalRule />
                </div>


                <div className='wrapper'>
                    <Link className='link' href="https://www.mpcvfx.com/en/">Motion Picture Company - Bangalore</Link>
                    <GoArrowUpRight />
                    <p className='item-sub-title'> Creature Effects Artist - 2022</p>
                <GoHorizontalRule />
                </div>

                <div className='wrapper'>
                    <Link className='link' href="https://www.wrightinspires.com/">Wright Inspires - Bangalore</Link> 
                    <GoArrowUpRight />
                    <p className='item-sub-title'>Architect - 2019</p>
                <GoHorizontalRule />
                </div>
            </div>


            <div className="heading">
                Artistic Skills
            </div>
            <div className="item-wrapper">
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Character Design - 2D & 3D</p>
                </div>
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Storyboard / Animatics</p>
                </div>
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Fine Arts</p>
                </div>
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Motion Graphics</p>
                </div>
            </div>


            <div className="heading">
                Technical Skills
            </div>
            <div className="item-wrapper">
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Visual Effects Softwares</p>
                </div>
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Design / CAD Softwares</p>
                </div>
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Programming</p>
                </div>
                <div className='flex pb4'>
                    <GoHorizontalRule />
                    <p className='item-title padding-left'>Web Development</p>
                </div>
            </div>

            <div className="heading">
                Education
            </div>
            <div className="item-wrapper">
                <GoHorizontalRule />
                <br/>
                <Link className="link" href="https://www.mcgansarch.com/">Bachelor of Architecture </Link>
                <GoArrowUpRight />
                <p className="item-sub-title"> McGan&apos;s Ooty School of Architecture</p>
                <GoHorizontalRule />
            </div>


            <div className="heading">
                Contact
            </div>
            <div className="wrapper">
                <div className='contact-wrapper flex'>
                    <p className='title'>EMAIL</p>
                    <GoHorizontalRule />
                    <p className='detail'> birdperson.me@gmail.com</p>
                </div>

                <div className='contact-wrapper flex'>
                    <p className='title'>WEBSITE</p>
                    <GoHorizontalRule />
                    <p className='detail'><Link href="https://wwww.birdperson.me">www.birdperson.me</Link></p>
                    <i>* under construction</i>
                </div>

                <div className='contact-wrapper flex'>
                    <p className='title'>PHONE</p>
                    <GoHorizontalRule />
                    <p className='detail'> +61 452491574</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default Resume;