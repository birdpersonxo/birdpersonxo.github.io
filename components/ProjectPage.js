import Head from 'next/head';
import Footer from '../components/Footer';

const ProjectPage = ({page_title,title, year_type=[], desc, img_src,banner_height="none", children }) => {
    let banner_final_height = "100%";
    if(banner_height !='none'){
        banner_final_height = banner_height;
    }
    return (
        <>
        <Head>
            <title>{page_title}</title>
        </Head>
        <div className='content-item'>

        <div className = "work-header-wrapper">
            <div className='work-header'>
                <div className="work-title">
                    {title}
                </div>
                <div className="year">
                    {year_type.map((item, index)=>(
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <div className='desc'>
                    {desc}
                </div>
            </div>
        </div>
        <img className='poster' 
            src={img_src}
            style={{height: banner_final_height}}
        />
        {/* <div className='work-content-wrapper'> */}
            <div className='work-main-content-wrapper'>
                {children}
            </div>
        {/* </div> */}
        </div>
        <Footer/>
        </>
    )
}

export default ProjectPage;