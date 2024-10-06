import { useEffect, useState } from "react";
import ImageData from '../data/art_data';
import Head from 'next/head';
import Footer from '../components/Footer';

const ArtPage = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        console.log(image);
        setSelectedImage(image);
        setIsFullScreen(true);
    };

    useEffect(() => {
        // ImageRowCalculate(ImageData);
    }, []);
    return(
        <>
        <Head>
            <title>Deepak Rajan — Art</title>
        </Head>
        <div className="content-item">
            <div className="art-grid">
                {ImageData.map((list, index)=>(
                    <div className="image-row" key={index}>
                        {list.map((item, itemIndex)=>(
                            <Image key={itemIndex} url={item.img} 
                                aspect_ratio={item.aspect_ratio}
                                name={item.name}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <Footer mode="black"/>
        </>
    )
}

export default ArtPage;


const Image = ({url, aspect_ratio, name}) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const div_style = {
        aspectRatio: aspect_ratio,
        flexGrow: aspect_ratio
    }

    const handleImageClick = () => {
        console.log('clicked');
        setIsFullScreen(true);
    };

    const handleClose = () => {
        setIsFullScreen(false);
    }
    return (
        <>
            <div className="image-wrapper" style={div_style} onClick={handleImageClick}>
                <img src={url} className="img-display"/>
                <div className="title">{name}</div>
            </div>

            {/* full screen mode */}
            {isFullScreen && (
                <div className="fullscreen-overlay" onClick={handleClose}>
                    <div className="fullscreen-image-wrapper">
                        <img src={url} className="fullscreen-img-display" alt={name}/>
                        <div className="fullscreen-title">{name}</div>
                    </div>
                </div>
            )}
        </>
    )
}

const ImageRowCalculate = (ImageData) => {
    const total_length = ImageData.length;
    const finalArray = [];
    const threshold_value = 3.0;
    const chunk = [];

    for(let i=0; i < total_length; i += 5){
        let currentChunk = ImageData.slice(i, i + 5);
        console.log(currentChunk);
        // i = i+1;
    }
    console.log(total_length);
}
