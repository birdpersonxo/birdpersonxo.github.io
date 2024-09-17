import { useEffect } from "react";
import ImageData from '../data/art_data';

const ArtPage = () => {
    useEffect(() => {
        // ImageRowCalculate(ImageData);
    }, []);
    return(
        <div className="content-item">
            <div className="art-grid">
                {/* <ImageRow/>
                <ImageRow2/> */}
                {ImageData.map((list, index)=>(
                    <div className="image-row" key={index}>
                        {list.map((item, itemIndex)=>(
                            <div key={itemIndex} className="image-wrapper"
                            style={{
                                aspectRatio: item.aspect_ratio,
                                flexGrow: item.aspect_ratio,
                                // height:300,
                            }}
                            >
                                <img src={item.img} className="img-display"/>
                                <div className="title">{item.name}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArtPage;


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

const Image = ({url, aspect_ratio, name}) => {
    const div_style = {
        aspectRatio: aspect_ratio,
        flexGrow: aspect_ratio
    }
    return (
        <div className="image-wrapper" style={div_style}>
            {name}
        </div>
    )
}