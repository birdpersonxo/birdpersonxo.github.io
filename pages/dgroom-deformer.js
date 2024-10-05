import Head from 'next/head';
import Footer from '../components/Footer';
import Paragraph from '../components/elements/Paragraph';
import Snippet from '../components/elements/Snippet';

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
                        This is where the content goes ,
                        This deformer and cannot be done in the same directon,
                        the problem is not your own problembatic.
                        This is where the content goes ,
                        This is where the content goes ,
                        This deformer and cannot be done in the same directon,
                        the problem is not your own problembatic.
                        This deformer and cannot be done in the same directon,
                        the problem is not your own problembatic.
                        <a href="hello">Hello</a>
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
                <div className='title'>
                    dGroom Deformer
                </div>
                <div className='year'>
                    <p>2024</p> 
                    <p>DEVELOPEMENT</p> 
                </div>
                <div className='desc'>
                    This is a test project that i ahve delopemed to maintain the groom.
                    This is a test project that i ahve delopemed to maintain the groom.
                </div>
            </div>
        </div>
        <img className='poster' src="/images/adya.png"/>
        </>
    )
}
