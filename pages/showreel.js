import Head from 'next/head';
import VimeoEmbed from '../components/Viemo';

const ShowreelPage = () => {
    return  (
        <>
            <Head>
                <title>Deepak Rajan — Showreel</title>
            </Head>
            <div className='content-item'>
                <VimeoEmbed videoId={1013929752}/>
            </div>
        </>
    )
}


export default ShowreelPage;