import Head from 'next/head';
import Footer from '../../components/Footer';
import Paragraph from '../../components/elements/Paragraph';
import Snippet from '../../components/elements/Snippet';
import VimeoEmbed from '../../components/Viemo';
import BuyNow from '../../components/elements/Buttons/BuyNow';
const DGroomDeformer = () => {
    const about = 'This is a test content';
    return(
        <>
        <div className='content-item'>
            <WorkHeader/>
            <div className='work-content-wrapper'>
                <div className='work-content'>
                    <Paragraph>
This dGroom Deformer tool allows you to easily deform grooms with generated or existing guides, making your workflow smoother and more efficient. 16 hda&apos;s with with open source code. Features: Guide Generation , Level of detail and Style Blending
                    </Paragraph>
                    <BuyNow name="Get Deformer" link="/dgroom-deformer/buy" margin="6px"/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default DGroomDeformer;


const WorkHeader = () => {
    return (
        <>
        <Head>
            <title>Deepak Rajan — dGroom Deformer</title>
        </Head>
        <div className='work-header-wrapper'>
            <div className='work-header'>
                <div className='work-title'>
                    dGroom Deformer
                </div>
                <div className='year'>
                    <p>2024</p> 
                    <p>DEVELOPEMENT</p> 
                    <p>
            <BuyNow name="Get Deformer" link="/store/dgroom-deformer" margin="6px"/>
                    </p>
                </div>
                <div className='desc'>
                This dGroom Deformer tool allows you to easily deform grooms with generated or existing guides, making your workflow smoother and more efficient. 16 hda&apos;s with with open source code. Features: Guide Generation , Level of detail and Style Blending
                </div>
            </div>
        </div>
        <VimeoEmbedNew className="poster" videoId="987950777"/>
        </>
    )
}
// components/VimeoEmbed.js
const VimeoEmbedNew = ({ videoId }) => {
    return (
      <div className="viemo-wrapper">
        <iframe className="viemo-iframe"
          src={`https://player.vimeo.com/video/${videoId}`}
          allow="autoplay;"
          allowFullScreen
        />
      </div>
    );
  };
  
