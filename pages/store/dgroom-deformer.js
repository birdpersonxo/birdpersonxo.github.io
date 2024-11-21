import ProductCard from "../../components/elements/Store/ProductCard";
import Link from "next/link";
import PurchaseButton from "../../components/elements/Buttons/PurchaseButton";
import Footer from "../../components/Footer";
import Head from "next/head";

const StoreDgroomDeformer = ()=>{
    return(
        <>
        <Head>
            <title>Deepak Rajan — dGroom Deformer — Store</title>
        </Head>
        <div className="product-detail-wrapper">
            <div className="product-content">
            <img className="product-banner" src="/images/deformer.webp" alt="dGroom Deformer Banner"/>
            <div className="product-title-wrapper">
                
                <div className="product-title">dGroom Deformer 
                </div>
                <Link className="product-documentation-link" href="/dgroom-deformer"> 
                        View Documentation
                </Link>
                 </div>
            <div className="product-description-wrapper">
                <div className="product-description">
                    <p>
                        This dGroom Deformer tool allows you to easily deform grooms with generated or existing guides, making your workflow smoother and more efficient.
                    </p>
                    <b>Key Features :</b>
                    <ul>
                        <li>Guide Generation : Generate guides from the groom with varying density based on your requirements.</li>
                        <li>Level of Details (LOD) Switch: Create multiple LODs and switch them dynamically based on the distance from the camera.</li>
                        <li>Style Blending : Allows you to blend different style grooms without having to deform each style individually.</li>
                        <li>Three Deformation Modes</li>
                    </ul>
                        <b>Deformation Mode :</b>  
                    <ul>
                        <li>Deform by Guides : Perfect for cases where the skin is not stretching. This mode is very fast and ideal for quick adjustments without compromising quality.</li>
                        <li>Deform by Guides and Skin : Can be used when there is stretching in the underlying skin but also has the ability to hold the clump even during stretching.</li>

                        <li>Deform by Skin : Wrap&apos;s your groom to the skin.</li>
                    </ul>
                    <b>Included Content :</b>
                    <ul>

                        <li>16 HDA</li>
                    <ul>
                        <li>dGroom Capture</li>
                        <li>dGroom Deform</li>

                        <li>Guide Generate</li>
                        <li>dGroom Simple Capture</li>
                        <li>Define Clumps</li>

                        <li>dGroom Visualize</li>
                        <li>dGroom LOD Generate</li>
                        <li>dGroom LOD Switch</li>
                        <li>dGroom LOD Switch</li>



                        <li>dGroom Capture Pack</li>
                        <li>dGroom Capture Unpack</li>
                        <li>Guide Orient</li>
                        <li>Add Groom Style</li>
                        <li>Guide Stretch Fix</li>
                        <li>Guide Group</li>
                        <li>Define Guide Count</li>


                        <li>Guide Group</li>


                        <li>Define Guide Count</li>
                        <li>dGroom Deform Template</li>
                        </ul>
                    </ul>

                    <ul>
                        <li>Furry : A demo character with a hip file showcasing the workflow of generating guides and the deformation process with style blending.</li>
                        <li>Example File : A detailed file demonstrating different workflows and the usage of tools.</li>
                    </ul>
                    <hr/>

                <p className="highlight">Further updates are free!</p>
                <p className="status">In development</p>

                <ul>
                    <li>dGroom Houdini Procedural</li>
                    <li>dGroom OpenCL Implementation</li>
                </ul>

                <p>Email: <a href="mailto:birdperson.me@gmail.com">birdperson.me@gmail.com</a></p>
                <p className="share-message">
                    If you create anything with it, I would love to see your work. 
                    Please share your creations with me! :)
                </p>

                <div className="documentation-link">
                        <a href="/LICENSE.txt" target="_blank" rel="noopener noreferrer">
                        Read LICENSE - End User License Agreement
                        </a>
                    </div>
                </div>
                <div className="product-purchase-wrapper">
                    <div className="product-purchase-title">
                        Purchase
                    </div>
                    <div className="product-purchase-description">
                        Contains 16 HDA, with Furry and Example File
                    </div>
                    <PurchaseButton name=" $60 - dGroom Deformer - Indie"
                    link="https://buy.stripe.com/fZecOs1yg6AHdRm6os"
                     />
                     <br/>
                     <br/>

                    <div className="product-purchase-description">
                        Contains 16 HDA, with Furry and Example File. Along with deformer source code
                    </div>
                    <PurchaseButton name=" $1000 - dGroom Deformer - Small Studio"
                    link="https://buy.stripe.com/cN2eWAb8Q0cjeVq8ww"
                    />
                     <br/>
                     <br/>

                    <div className="product-purchase-description">
                        Contains 16 HDA, with Furry and Example File. Along with deformer source code
                    </div>
                    <PurchaseButton name=" $1300 - dGroom Deformer - Large Studio"
                    link="https://buy.stripe.com/00g15KccU2kr7sY149"
                    />
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default StoreDgroomDeformer;