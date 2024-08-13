import '../style/index.scss';
import Header from "../components/Header";
import { GoArrowDown } from "react-icons/go";
import { ReactLenis, useLenis } from 'lenis/react';

export default function Home() {
  return (
    <>
    <Header/>
    <div className='content'>
      <VideoBanner/>
    </div>
    <HomePageContent/>
    </>
  );
}


const VideoBanner = () => {
  return (
    <>
      <video className='video' autoPlay loop muted>
        <source src="/videos/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='content-left'>
        <h1>VIEW the SHOWREEL</h1>
        <p>
          Ripley nominated for 13 EMMY awards - including for Visual Effects
        </p>
      </div>
      <div className='content-right'>SCROLL
        <GoArrowDown size={18}/>

      </div>
    </>
  );
};



const HomePageContent = () => {
  return (
    <>
    HELOOO 

Vimeo
Behance

Contact

-

If you have a scheduling inquiry for our creative services or wish to chat about an upcoming project need, please contact us at info@altcinc.com
    awadf
    </>
  )
}