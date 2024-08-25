const ImageData = [
    {img: "https://freight.cargo.site/w/250/i/fe8a9b6d3dbc5cd6eb4c26653ae2c7c95e2790b0d2778a03c090d9efb72eed1f/153-l-1103566430_o.jpg",
        aspect_ratio: 16/9,
        name:'jack the rabit speaks',
    },
    {img: "https://freight.cargo.site/w/400/i/b7117077121e5c5bc597c468d53cce864a9d3528d3baac6d0807daec1cacfb3d/BDIF-Basil-Wolverton-6.jpg",
        aspect_ratio: 4/3,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/450/i/4464cd79d68541762da032940aa89df9a73f91e8eacdb1389b4ff9b2e82ac3e3/1670813845WJ6U8930_o.jpg",
        aspect_ratio: 1/1,
        name:"hello my dear",
    },
    {img: "https://cdnb.artstation.com/p/assets/images/images/079/294/431/20240824102617/smaller_square/daria-tusheva-furgonchik-render-fin.jpg",
        aspect_ratio: 16/9,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/400/i/b7117077121e5c5bc597c468d53cce864a9d3528d3baac6d0807daec1cacfb3d/BDIF-Basil-Wolverton-6.jpg", 
        aspect_ratio: 4/3,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/400/i/b7117077121e5c5bc597c468d53cce864a9d3528d3baac6d0807daec1cacfb3d/BDIF-Basil-Wolverton-6.jpg", 
        aspect_ratio: 4/3,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/400/i/b7117077121e5c5bc597c468d53cce864a9d3528d3baac6d0807daec1cacfb3d/BDIF-Basil-Wolverton-6.jpg", 
        aspect_ratio: 4/3,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/400/i/b7117077121e5c5bc597c468d53cce864a9d3528d3baac6d0807daec1cacfb3d/BDIF-Basil-Wolverton-6.jpg",
        aspect_ratio: 4/3,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/450/i/4464cd79d68541762da032940aa89df9a73f91e8eacdb1389b4ff9b2e82ac3e3/1670813845WJ6U8930_o.jpg",
        aspect_ratio: 1/1,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/450/i/4464cd79d68541762da032940aa89df9a73f91e8eacdb1389b4ff9b2e82ac3e3/1670813845WJ6U8930_o.jpg",
        aspect_ratio: 1/1,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/450/i/4464cd79d68541762da032940aa89df9a73f91e8eacdb1389b4ff9b2e82ac3e3/1670813845WJ6U8930_o.jpg",
        aspect_ratio: 1/1,
        name:"hello my dear",
    },
    {img: "https://freight.cargo.site/w/450/i/4464cd79d68541762da032940aa89df9a73f91e8eacdb1389b4ff9b2e82ac3e3/1670813845WJ6U8930_o.jpg",
        aspect_ratio: 1/1,
        name:"hello my dear",
    },
]
const ArtPage = () => {
    return(
        <div className="content-item">
            <div className="art-grid">
                <div className='art-image-wrapper'>
                    {ImageData.map((item, index)=>(
                        <Image key={index}
                        url={item.img}
                        aspect_ratio={item.aspect_ratio}
                        name={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArtPage;


const Image = ({url, aspect_ratio, name}) => {
    return (
        <div className="image-wrapper" style={{flex: `${aspect_ratio} 1 0%`}}>
            <img src={url} className="image"/>
            <div className="title">
                {name}
            </div>
        </div>
    )
}