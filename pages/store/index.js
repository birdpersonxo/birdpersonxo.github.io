import Lik from "next/link";
import Head from "next/head";
import ProductCard from "../../components/elements/Store/ProductCard";
import Footer from "../../components/Footer";

const StoreIndex = ()=> {
    return(
        <>
        <Head>
            <title>Deepak Rajan — Store</title>
        </Head>
        <div className="store-wrapper">
            <div className="store-title">STORE</div>
            <div className="store-products-grid">
                <ProductCard title="dGroom Deformer" 
                    desc="Custom Houdini groom deformer built to tackle complex guide-to-groom deformations." 
                    price="$60"
                    link="/store/dgroom-deformer"
                    src="/images/defomer_thumb.webp"
                    />
                <ProductCard title="Copernicus - LED" 
                    desc="Some random copernicus workfiles." 
                    price="$0"
                    link="https://www.dropbox.com/scl/fo/hnewr2p9ppg3fz1663920/ALmhR7BkOqBGsK4n0-VPo-A?rlkey=qpfgmpk55dobhzw8ch3wfqqqh&st=g7xb54ef&dl=0"
                    src="/images/copernicus_thumb.webp"
                    />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default StoreIndex;