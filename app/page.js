"use client"; // Add this line at the top
import '../style/index.scss';
import { GoArrowDown } from "react-icons/go";
import Header from '../components/Header';
import Lenis from '@studio-freight/lenis';
import { useEffect , useState} from 'react';
// import { ScrollContainer, Animator, batch, FadeIn , Sticky, FadeOut} from 'react-scroll-motion';

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
    <Header/>
    <Banner/>
    <div className='content'>
      <div className='home-content'>
        <HomeContent/>
      </div>
    </div>
    </>
  );
}


const Banner = () => {
  const [opacity, setOpacity] = useState(1);
   const handleScroll = () => {
    // Adjust the divisor to control the scroll distance to opacity mapping
    const scrollTop = window.scrollY;
    const maxScroll = 600; // Maximum scroll distance at which opacity becomes 0
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
      <div className='scroll'>
        <div className="time-zone">
            AUS : 234: 3435
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

const WorksData = [
    {title:"ANIMATION SHORT", link:"anim-short", role:['Development', 'Design'], year: '2023', 
      desc:"My first animation short that i'm currently working on.",
      image:"images/adya.png",
    },
    {title:"dGROOM DEFORMER", link:"dgroom-deformer", role:['Development', 'Tools'], year: '2023', 
      desc:"Custom houdini groom deformer built with opencl and render time procedural integration.",
      image:"images/art.png",
    },
    {title:"STORYBOARD | ANIMATICS", link:"story-board", role:['Art', 'Viz Dev'], year: '2023', 
      desc:"Custom houdini groom deformer built with opencl and render time procedural integration.",
      image:"images/adya_paint.png",
    },
    {title:"NYX", link:"nyx", role:['Development', 'Tools'], year: '2023', 
      desc:"Nyx is a pipeline tool to maintain visual effect assets and native USD support to create scene assembly file.",
      image:"images/yazhi.png",
    },
    {title:"YAZHI", link:"yazhi", role:['Development', 'Tools'], year: '2023', 
      desc:"Nyx is a pipeline tool to maintain visual effect assets and native USD support to create scene assembly file.",
      image:"images/piolet.png",
    },
  ]


const HomeContent = () => {
  return (
    <>
    {WorksData.map((work, index)=>(
      <WorkItem 
      title={work.title}
      image={work.image}
      role={work.role}
      desc={work.desc}
      />
    ))}
    </>
  )
}

const WorkItem = ({title, image, role, desc}) => {
  return (
    <>
    <div className='work-item-wrapper'>
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
            <p>Short Film</p>
            <p>Direction</p>
            <p>Art</p>
          </div>
        </div>
        <img className='image' src={image}/>
        {/* <div className='desc'>
          {desc}
        </div> */}
    </div>
    </>
  )
}