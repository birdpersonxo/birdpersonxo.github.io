import Head from 'next/head';
const DGroomDeformer = () => {
    return(
        <div className='content-item'>
            <WorkHeader/>
            hello
            <br></br>
            asdfeawrewr
        </div>
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
        <img className='poster' src="/images/adya.png"/>
        </>
    )
}