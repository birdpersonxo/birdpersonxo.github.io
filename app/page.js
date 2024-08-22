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
        <span className="text-item heading">Showreel 24</span>
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