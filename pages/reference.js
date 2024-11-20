import Head from 'next/head';
import Footer from '../../components/Footer';
import Paragraph from '../../components/elements/Paragraph';
import Snippet from '../../components/elements/Snippet';
import VimeoEmbed from '../../components/Viemo';

const DGroomDeformer = () => {
    const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`
    const about = 'This is a test content';
    return(
        <>
        <div className='content-item'>
            <WorkHeader/>
            <div className='work-content-wrapper'>
                <div className='work-content'>
                    <Paragraph>
                    This dGroom Deformer tool allows you to easily deform grooms with generated or existing guides, making your workflow smoother and more efficient. 16 hda's with with open source code. Features: Guide Generation , Level of detail and Style Blending
                        {/* <a href="hello">Hello</a> */}
                    </Paragraph>
                    <Snippet codeBlock={codeBlock}/>
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
                </div>
                <div className='desc'>
                This dGroom Deformer tool allows you to easily deform grooms with generated or existing guides, making your workflow smoother and more efficient. 16 hda's with with open source code. Features: Guide Generation , Level of detail and Style Blending
                </div>
            </div>
        </div>
        {/* <img className='poster' src="/images/adya.png"/> */}
        <VimeoEmbed className="poster" videoId="987950777"/>
        </>
    )
}
