import '../style/index.scss';
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <VideoBanner/>
    </>
  );
}


const VideoBanner = () => {
  return (
    <div className='video-banner-wrapper'>
      <video className='video-banner' autoPlay loop muted>
        <source src="/videos/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-content">
        <h1>SHOWREEL</h1>
      </div>
    </div>
  );
};
