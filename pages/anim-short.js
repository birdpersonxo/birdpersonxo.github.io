import ProjectPage from '../components/ProjectPage';
import Paragraph from '../components/elements/Paragraph';
import BlogImage from '../components/elements/BlogImage';

const AnimShort = () => {
    const year_type = [
        "2024",
        "ART",
        "DEVELOPMENT"
    ]

    const desc = `
    This short film is in the early stage of production.
    If you are willing to join and work with me, please reach out! 
    `
    return (
        <ProjectPage
            page_title="Animation Short Film — Deepak Rajan"
            title="Animated Short Film"
            year_type={year_type}
            desc={desc}
            img_src="/images/adya.png"
            banner_height='700px'
        >
        
        <div className="work-main-content">

            <h2>
                Pre-production
            </h2>
            <p>
                These are some of the concept arts and inital 3d tests I have been doing.
            </p>
            <BlogImage
            src="https://cdna.artstation.com/p/assets/images/images/080/665/830/large/deepak-rajan-img-0230.jpg?1728202000"
            content='Adya - Concept art'
            />
            <BlogImage
            src="https://cdna.artstation.com/p/assets/images/images/080/667/664/large/deepak-rajan-clipboard-2024-10-06-20-25-50.jpg?1728208606"
            content='Procedural Tree generation for environment.'
            />
        </div>
        

        </ProjectPage>
    )
}

export default AnimShort;