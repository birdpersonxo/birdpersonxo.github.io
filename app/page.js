"use client"; // Add this line at the top
import '../style/index.scss';

import { GoArrowDown } from "react-icons/go";
import { GoKebabHorizontal } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Wabalaba from '@/components/Wabalaba';
import Lenis from '@studio-freight/lenis';
import { useEffect , useState} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
// import { ScrollContainer, Animator, batch, FadeIn , Sticky, FadeOut} from 'react-scroll-motion';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set an interval to update the time every minute
    const timerId = setInterval(() => setTime(new Date()), 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []);

  // Format the time for Adelaide (Australia/Adelaide timezone) - Only hours and minutes
  const formattedTime = time.toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Adelaide',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // For 12-hour format, remove or set to false for 24-hour format
  });

  return <div>AUS : {formattedTime}</div>;
};


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical', // Can be 'vertical' or 'horizontal'
      gestureDirection: 'vertical', // Can be 'vertical' or 'horizontal'
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);
  return (
    <>
    <Head>
      <title>birdperson</title>
    </Head>
    <Header/>
    {/* <Link href="/showreel"> */}
      <Banner/>
    {/* </Link> */}
    <Content/>
    </>
  );
}


const Banner = () => {
  const [opacity, setOpacity] = useState(1);
   const handleScroll = () => {
    // Adjust the divisor to control the scroll distance to opacity mapping
    const scrollTop = window.scrollY;
    const maxScroll = 800; // Maximum scroll distance at which opacity becomes 0
    const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='banner-wrapper' style={{opacity}}>
      {/* <Animator animation={batch(Sticky(), FadeOut())}> */}
      <Link href="/showreel">
        <video className='video' autoPlay loop muted>
          <source src="/videos/bannerVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='text-overlay'>
          <span className="text-item heading">Showreel &apos;24</span>
          <span className="text-item side">
            <p>Visual Effects</p>
            <p>Development</p>
            <p>Storyboard</p>
          </span>
        </div>
      </Link>
      <div className='scroll'>
        <div className="time-zone">
            <Clock/>
        </div>
        <div>
          Scroll
          <GoArrowDown size={18}/>
        </div>
        <div></div>
      </div>
      {/* </Animator> */}
    </div>
  )
}

const Content = () => {

  const [isClickableContent, setIsClickableContent] = useState(false);

   const handleScrollContent = () => {
    // Adjust the divisor to control the scroll distance to opacity mapping
    const scrollTop = window.scrollY;
    const maxScroll = 800; // Maximum scroll distance at which opacity becomes 0
    const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);

    if(newOpacity < 0.5){
      setIsClickableContent(true);
    }else{
      setIsClickableContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollContent);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScrollContent);
    };
  }, []);

  return(

    <div className='content'
    style={{pointerEvents: isClickableContent ? 'auto' : 'none'}}
    >
      <div className='home-content'>
        <HomeContent/>
    <div className='home-content-heading'>
      <div className='left heading-small'>
        FILMOGRAPHY
      </div>
    </div>
    <Flimography/>
    <Footer/>
      </div>
      <Wabalaba/>
    </div>
  )
}

const WorksData = [
    {title:"ANIMATED SHORT", link:"anim-short", role:['Art', 'Development'], year: '2023', 
      desc:"Some tidbits from my ongoing animated short film.",
      image:"images/adya.png",
    },
    {title:"dGROOM DEFORMER", link:"dgroom-deformer", role:['Development', 'Tools'], year: '2023', 
      desc:"Custom Houdini groom deformer built to tackle complex guide-to-groom deformations.",
      image:"images/art.png",
    },
    {title:"STORYBOARD - ANIMATICS", link:"story-board", role:['Art', 'Viz Dev'], year: '2023', 
      desc:"Some stuff I enjoy learning and exploring...",
      image:"images/adya_paint.png",
    },
    {title:"NYX", link:"nyx", role:['Development', 'Tools'], year: '2023', 
      desc:"Nyx is a visual effects pipeline tools built around Universal Scene Description.",
      image:"images/yazhi.png",
    }
]




const HomeContent = () => {
  return (
    <>
    <div className='home-content-mid'>
      <div className='left'>
        WORKS
      </div>
      <div className='mid'>
        Here you’ll find the progress of my ongoing animated short film and development projects, showcasing my passion for art and technology
      </div>
      <div className='right'>
        <p>SOCIALS</p>
        <Link href="https://www.instagram.com/deepak_rajan_/">Instagram</Link>
        <Link href="https://youtube.com/@DeepakRajan">YOUTUBE</Link>
        <Link href="#"></Link>
      </div>
    </div>
      {WorksData.map((work, index)=>(
        <WorkItem 
        link={work.link}
        title={work.title}
        image={work.image}
        role={work.role}
        desc={work.desc}
        key={index}
        />
      ))}
    </>
  )
}

const WorkItem = ({link, title, image, role, desc}) => {
  return (
    <>
    <motion.div
      className="work-item"
      initial={{ opacity: 0, y: 80 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.1 }} // Trigger when 30% of the item is in view
    >
    <Link href={link} className='work-item-wrapper'>
        <div className='text'>
          <div className='heading'>
            {title}
          </div>
          {/* <div className='view-project'>
            view project
          </div> */}
          <div className='desc'>
            {desc}
          </div>
            <div className='sub-heading'>
              {role.map((item, index) => (
                  <p key={index}>{item}</p>
              ))}
              <div href="#" className='view-project'>
                View project
                <GoArrowUpRight />
              </div>
            </div>
        </div>
        <img className='image' src={image}/>
        {/* <div className='desc'>
          {desc}
        </div> */}
    </Link>
    </motion.div>
    </>
  )
}



const FilmData = [
    {name: "Sonic 3",studio:"paramount",  year: '2024', studio: "RSP - ADELAIDE", role:"Creature TD", 
      link:"", image:"/images/film/sonic3.png"},
    {name: "The Knuckles", studio:"Paramount", year: '2024', studio: "RSP - ADELAIDE", role:"Creature TD", 
      link:"", image:"/images/film/knuckles.png"},
    {name: "Monarch: Legacy of Monsters", studio:"Paramount",year: '2023', studio: "RSP - ADELAIDE", role:"Creature TD",
       link:"", image:"/images/film/monsters.png"},
    {name: "The Marvels", studio:"Paramount",year: '2023', studio: "RSP - ADELAIDE" , role: "Creature TD", 
      link:"" , image:"/images/film/marvels.png"},
    {name: "antman and the wasp quantumania", studio:"Paramount",year: '2022', studio: "RSP - ADELAIDE" , role:"Creature TD", 
      link:"", image:"/images/film/antman.png"},
    {name: "Harold and the Purple Crayon", studio:"Paramount",year: '2022', studio: "RSP - ADELAIDE", role:"Creature TD", 
      link:"", image:"/images/film/harold.png"},
    {name: "The Flash", studio:"Paramount", year: '2022', studio: "DNEG - BANGALORE", role:"Creature TD", 
      link:"", image:"/images/film/flash.png"},
    {name: "Chupa", studio:"Paramount", year: '2021', studio: "MPC - BANGALORE", role:"Creature TD", 
      link:"", image:"/images/film/chupa.png"},
    {name: "La Brea", studio:"Paramount", year: '2021', studio: "MPC - BANGALORE", role:"Creature EFECTS", 
      link:"", image:"/images/film/labrea.png"},
  ]

const Flimography = () => {
  return (
    <div className='filmography-wrapper'>
      <div className='filmography-grid'>
        {FilmData.map((item, index) => (
          <Film key={index} 
          name={item.name}
          image={item.image}
          role={item.role}
          studio={item.studio}
          />
        ))}
      </div>
    </div>
  )
}

  const Film = ({name, image, role, studio}) => {
    return( 
    <div className='movie-item'>
      <img src={image} className='image'/>
      <div className='content'>
        <div className='title'>
          {name}
        </div>
        <div className='role'>
          {role}
        </div>
        <div className='role'>
          {studio}
        </div>
      </div>
    </div>
    )
  }
  