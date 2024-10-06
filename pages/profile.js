import Head from 'next/head';
import Link from 'next/link';
import { GoUnread } from "react-icons/go";
import { GoLinkExternal } from "react-icons/go";
import Footer from '@/components/Footer';

const Profile = () => {
    return (
        <>
        <Head>
            <title>Deepak Rajan — Profile</title>
        </Head>
        <div className="content-item">
            <div className='profile-wrapper'>
                <div className='profile-item-wrapper'>
                    <div className='profile-item bold'>Visual Effects Artist</div>
                    <div className='profile-item'>Filmmaker & Animator</div>
                    <div className='profile-item'>Architect</div>
                    <Link href="mailto:birdperson.me@gmail.com">
                        <div className='profile-item email'>Email
                        </div>
                        <GoUnread />
                    </Link>

                    <Link href='/resume'>
                        <div className='profile-item email'>Resume
                        </div>
                        <GoLinkExternal />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}


export default Profile;