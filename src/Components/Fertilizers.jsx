// Import necessary dependencies
import React from 'react';
import './Gardening.css'; // Assuming you have a Gardening.css file for styles

// Define your functional component
const Fertilizers = () =>{
    const handleCart = (e) => {
        e.preventDefault();

        const logged = localStorage.getItem('logged');
        if (!logged) {
            alert('Please login to add items to cart');
            navigate('/Login');
            return;
        }
        
        const parent = e.target.parentNode;
        const val = Number(parent.children[1].textContent.slice(3));
        const head = parent.children[2].textContent;
        const image = parent.children[0].src;
        const obj = {
            name: head,
            price: val,
            image: image,
            quantity: 1
        }
        let cart = [];
        if (localStorage.getItem('cart') === null) {
            cart.push(obj);
        } else {
            cart = JSON.parse(localStorage.getItem('cart'));
            let itemIndex = cart.findIndex(item => item.name === head);
            if (itemIndex !== -1) {
                cart[itemIndex].price += val;
                cart[itemIndex].quantity += 1;
            } else {
                cart.push(obj);
            }
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
        alert('Added to cart');
    }

    return (
        <div className='Gardening'>
           

            <div className="images_container">
                {/* Your images_container content */}
                <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-best-seller-soil-and-fertilizer-collection-image-443278_231x231.jpg?v=1681381830"/>
            <h5>Best Seller Soil and Fertilizer</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-organic-fertilizer_231x231.jpg?v=1681381806"/>
            <h5>Organic Fertilizer</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-potting-soil-collection-image_231x231.jpg?v=1681381799"/>
            <h5>Potting Soil</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-coco-peat-collection-image_231x231.jpg?v=1681381872"/>
            <h5>Cocopeat</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-soil-additives-collection-image_231x231.jpg?v=1681381849"/>
            <h5>Soil Additives</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/3deea72de3e1251177beb61e9648481d_279x279.jpg?v=1681381553"/>
            <h5>Easy To grow Seeds</h5>
        </div>
        
            </div>

            <div className="gallery">
                {/* Your gallery content */}
                
                <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-vermicompost-1-kg-set-of-2-995020_305x305.jpg?v=1680589608"/>
            <h4>Rs.299</h4>
            <p>Vermicompost(1Kg)</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-fertilizer-jeevamrut-plant-growth-tonic-500-ml-for-garden-1_jpg-195731_229x305.jpg?v=1680591235"/>
            <h4>Rs.349</h4>
            <p>Nutrient Rich soil</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-5-kg-16969046065292_305x305.jpg?v=1634224984"/>
            <h4>Rs.399</h4>
            <p>JeevaMrut(Plant-growth tonic)</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-coco-peat-block-5-kg-16968789917836_305x305.jpg?v=1634216404"/>
            <h4>Rs.169</h4>
            <p>Cocopeat</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-general-purpose-garden-potting-soil-mix-5-kg-16968874131596_305x305.jpg?v=1634220120"/>
            <h4>Rs.199</h4>
            <p>General Purpose Garden Mixer</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-plant-o-boost-overall-growth-booster-10-g-16969206300812_305x305.jpg?v=1634226254"/>
            <h4>Rs.299</h4>
            <p>Plant of Boost</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-inoprom-soil-special-all-purpose-organic-manure-1-kg-set-of-2-179073_305x305.jpg?v=1680591148"/>
            <h4>Rs.149</h4>
            <p>INOPROM(Set of 2)</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-g-soil-and-fertilizers-neem-cake-1-kg-1-952723_229x305.jpg?v=1679750683"/>
            <h4>Rs.359</h4>
            <p>Neem Cake(500gm)-Set of 2</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-perlite-500-g-1_229x305.jpg?v=1634225763"/>
            <h4>Rs.199</h4>
            <p>Perlite-500gm</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-neem-raksha-pure-neem-oil-for-insect-pest-control-100-ml-image-2_305x305.jpg?v=1634224748"/>
            <h4>Rs.110</h4>
            <p>Neem-Raksha-100ml</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-rose-blooster-50-ml-set-of-2-1-603469_229x305.jpg?v=1679751052"/>
            <h4>Rs.409</h4>
            <p>Rose-Booster -50ml</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-fertilizer-bone-meal-powder-250-gm-for-garden_305x305.jpg?v=1634214743"/>
            <h4>Rs.499</h4>
            <p>Bone-Meal Powder</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-10-kg-16969045966988_305x305.jpg?v=1634224988"/>
            <h4>Rs.649</h4>
            <p></p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
       
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-potting-soil-mix-for-flowering-plants-5-kg-16969330393228_305x305.jpg?v=1634226777"/>
            <h4>Rs.459</h4>
            <p>Potting Soil for Flowering Plants</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-potting-soil-mix-for-flowering-plants-5-kg-16969330393228_305x305.jpg?v=1634226777"/>
            <h4>Rs.549</h4>
            <p>Potting Soil for Mix Seeds and Gardening</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
            </div>

            <h1>Imported Winter Supply's </h1>
            <div className="images_container2">
                {/* Your images_container2 content */}
    
        <div className="images">
            <img src="https://m.media-amazon.com/images/I/81lSBuN8Y9L.AC_UF1000,1000_QL80.jpg"/>
            <h5>Fertilizer</h5>
        </div>
        <div className="images">
            <img src="https://www.bhg.com/thmb/ADjkI_aSqiiM0Ht3KHBFNIvxsQo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bhg-tier-3-primary-best-fertilizer-indoor-plants-ebrockob-001-91872346dcb1442290da582d33119240.jpeg"/>
            <h5>Spray</h5>
        </div>
        <div className="images">
            <img src="https://livingcolorgardencenter.net/wp-content/uploads/2022/01/LIVING3-1024x512.jpg"/>
            <h5>White Fertilizer</h5>
        </div>
        <div className="images">
            <img src="https://rukminim2.flixcart.com/image/850/1000/kfzq8i80/soil-manure/c/c/u/50-bloomstix-essential-nutrition-for-flowering-plants-plants-original-imafwbzytqufagsf.jpeg?q=20&crop=false"/>
            <h5>Nutritional stick</h5>
        </div>
        <div className="images">
            <img src="https://www.farmersalmanac.com/wp-content/uploads/2016/04/Natural-fertilizers-for-gardening.jpg"/>
            <h5>Natural Manure</h5>
        </div>

            </div>

            <h2>About Soil and Fertilizers</h2>
        <p className="q">If you are a gardening novice or an enthusiast looking to grow your own flower or vegetable garden, then these are the most convenient and cost-effective methods to ensure your plants are growing well.
        </p>

        <p className="q">The fertilizers are rich in nitrogen, phosphorus and potassium that help your garden thrive. Our nutrient-rich soil encourages regular flowering and healthy foliage.
        </p>

        <p className="q">A little decor never hurt anybody. Along with our soil and fertilizers, you can also check our range of miniature toys to keep your plants looking pretty while looking healthy.
        </p>

        
        <h2>Vermicompost</h2>
        <p className="q">
            Vermicompost is a type of compost that is made with the help of worms. It is high in nutrients and is a great option for organic gardening.
        </p>

        <h2>Perlite</h2>
        <p className="q">
            
          Perlite is a lightweight volcanic material that is often added to soil to improve drainage and aeration.
        </p>
        <h2>Bone Meal</h2>
        <p className="q">
            Bone meal is a natural fertilizer made from ground animal bones. It is high in phosphorus and is often used for flowering plants.
            Herb seeds grow into plants such as basil, parsley, and thyme. These plants can be used in cooking or for medicinal purposes.
        </p>

            {/* More content here */}

            

        </div>
    );
}

export default Fertilizers;