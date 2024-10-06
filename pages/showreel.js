import Head from 'next/head';
import VimeoEmbed from '../components/Viemo';

const ShowreelPage = () => {
    return  (
        <>
            <Head>
                <title>Deepak Rajan — Showreel</title>
            </Head>
            <VimeoEmbed videoId={1013929752}/>
            <div>
            </div>
        </>
    )
}


export default ShowreelPage;