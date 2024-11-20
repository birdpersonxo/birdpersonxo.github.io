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
                    link="/store/copernicus-led"
                    />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default StoreIndex;