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
                This dGroom Deformer tool allows you to easily deform grooms with generated or existing guides, 
                making your workflow smoother and more efficient. 16 hda&apos;s. 
                Features: Guide Generation , Level of detail and Style Blending
                    </Paragraph>
                    <br/>
                    <StudioCustomers/>
                    <Documentation/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default DGroomDeformer;

const StudioCustomers = () => {
    return (
        <div className='studio-customers-wrapper'>
            <div className='studio-customers'>
                <h1>Studio Customers</h1>
                <div className='studio-customers-logos'> 
                    <a href="https://bardel.ca/" target="_blank">
                        <img src="https://bardel.ca/wp-content/uploads/2022/09/Bardel_logo_Reversed_Green.svg" alt="Bardel Studios"/>
                    </a>
                    <a href="https://blackkitestudios.com/" target="_blank">
                        <img src="/images/blackkit_logo.png" style={{width: '200px'}} alt="Blackkit Studios"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

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
                    Custom Houdini Groom Deformer - 
                    Generate guides from groom - 
                    Deform grooms created in any software seamlessly within Houdini
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
  

  const Documentation = () => {
    return (
            <div className='documentation-wrapper'>
                <div className="documentation-nav">
                    <div className="feature-buttons-container">
                        <FeatureButton text="Features" section="features"/>
                        <FeatureButton text="Workflow" section="workflow"/>
                        <FeatureButton text="Installation" section="installation"/>
                        <FeatureButton text="Examples" section="examples"/>
                    </div>
                </div>
               
                <div className='documentation'>
                    <section id="features">
                        <Features/>
                    </section>

                    <section id="workflow">
                        <Workflow/>
                    </section>

                    <section id="examples">
                        <Examples/>
                    </section>

                    <section id="installation">
                        <Installation/>
                    </section>

                    {/* Add more sections as needed */}
                </div>
        </div>
    )
}

const FeatureButton = ({text, section}) => {
    return (
        <a href={`#${section}`} className='feature-button'>
            <button className='feature-button-text'>{text}</button>
        </a>
    )
}

const Features = () => {
    return (
        <>
        <br/>
        <h1>Features</h1>
        <h2>
            Guide Generation
        </h2>
        <p>
            Procedurally generate guide from existing groom.
        </p>

        <br/><br/><br/>


        <h2>
            Define Clumps
        </h2>
        <p>
            Define clumps to deform.
        </p>
        <br/><br/><br/>


        <h2>
            Add Groom Style
        </h2>
        <p>
            Add groom style to the clumps.
        </p>
        <br/><br/><br/>


        <h2>
            Level of Detail
        </h2>
        <p>
            Define level of detail for clumps.
        </p>
        <br/><br/><br/>

        <h2>
            dGroom Capture
        </h2>
        <p>
            Capture groom from existing geometry.
        </p>
        <br/><br/><br/>

        <h2>
            dGroom Deform
        </h2>
        <p>
            Deform grooms created in any software seamlessly within Houdini.
        </p>
        <br/><br/><br/>

        <h2>
            Groom Capture Pack / Unpack
        </h2>
        <p>
            Pack / Unpack groom capture.
        </p>
        <br/><br/><br/>


        <h2>
            Guide Orient
        </h2>
        <p>
            Create orient attribute for deformation.
        </p>
        <br/><br/><br/>


        <h2>
            Groom LOD Generate
        </h2>
        <p>
            Create LODs from groom.
        </p>
        <br/><br/><br/>

        <h2>
            Groom LOD Switch
        </h2>
        <p>
            Dyanmically switch between LODs.
        </p>
        <br/><br/><br/>


        <h2>
            Guide Stretch Fix
        </h2>
        <p>
            Fix guide stretch.
        </p>
        <br/><br/><br/>


        <h2>
            Guide Group
        </h2>
        <p>
            Group guides.
        </p>
        <br/><br/><br/>


        <h2>
            Define Guide Count
        </h2>
        <p>
            Define guide count.
        </p>
        <br/><br/><br/>

        <hr/>
        </>
    )
}


const Installation = () => {
    return (
        <>
        <h1>Installation</h1>
        <hr/>
        </>
    )
}   

const Workflow = () => {
    return (
        <>
        <h1>Workflow</h1>
        <hr/>
        </>
    )
}


const Examples = () => {
    return (
        <>
        <h1>Examples</h1>
        <hr/>
        </>
    )
}

