// Import necessary dependencies
import React from 'react';
import './Gardening.css'; // Assuming you have a Gardening.css file for styles

// Define your functional component
const Seed = () =>{
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
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-trending-seeds-collection-image_231x231.jpg?v=1681381855"/>
            <h5>Trending Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-tree-forestry-seeds-category-images-466263_231x231.jpg?v=1681381876"/>
            <h5>Tree and Forestory Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-other-seeds-category-image-522374_231x231.png?v=1681381877"/>
            <h5>Other Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-rainy-sowing-seeds-category-image_231x231.jpg?v=1681381704"/>
            <h5>Rainy Sowing Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-seeds-to-sow-in-all-seasons-category-image_231x231.jpg?v=1681381757"/>
            <h5>All Seasoner Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-easy-to-grow-seeds-category-image-855438_231x231.jpg?v=1681381702"/>
            <h5>Easy To grow Seeds</h5>
        </div>
        
            </div>

            <div className="gallery">
                {/* Your gallery content */}
                <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-pack-of-75-native-tree-seeds-of-india_3d8ebeb6-8ee7-41ce-a20a-8e6f3a84b850-272194_305x305.jpg?v=1679750745"/>
            <h4>Rs.299</h4>
            <p>Pack of 75 native Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-sorrel-herb-herb-seeds-16969338486924_305x305.jpg?v=1634204865"/>
            <h4>Rs.349</h4>
            <p>Sorrel-Herb Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-borage-herb-seeds-16969056583820_305x305.jpg?v=1634203011"/>
            <h4>Rs.399</h4>
            <p>Borage Herbs</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-salvia-salsa-white-flower-seeds-16969119400076_305x305.jpg?v=1634204822"/>
            <h4>Rs.169</h4>
            <p>Salvia-Salsa-White Flower Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src=" https://nurserylive.com/cdn/shop/products/nurserylive-seeds-nelumbo-nucifera-lotus-mix-colors-0-5-kg-seeds-16969043935372_305x305.jpg?v=1634224789 "/>
            <h4>Rs.299</h4>
            <p>Nelumba ,Lotus Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-ornamental-cabbage-kale-fringed-leaves-foliage-plant-seeds-16969149513868_305x305.jpg?v=1634204423"/>
            <h4>Rs.149</h4>
            <p>Ornamental Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-sandal-wood-white-chandan-white-0-5-kg-seeds-16969293791372_305x305.jpg?v=1634227971"/>
            <h4>Rs.359</h4>
            <p>Sandal-Wood Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-kadamba-anthocephalus-cadamba-seeds-1_305x305.jpg?v=1634222709"/>
            <h4>Rs.299</h4>
            <p>Kadamba Seeds</p>
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-sterculia-foetida-jungli-badam-0-5-kg-seeds-16969350086796_305x305.jpg?v=1634229289"/>
            <h4>Rs.1119</h4>
            <p>Sterculis -Foetida Seeds</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-michelia-champaca-son-champa-0-5-kg-seeds-16969026928780_305x305.jpg?v=1634223969"/>
            <h4>Rs.409</h4>
            <p>Michelia-Champka Seeds</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-guava-amrud-allahabadi-seeds_305x305.jpg?v=1634220911"/>
            <h4>Rs.499</h4>
            <p>Guava Seeds</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-crotalaria-juncea-indian-hemp-seeds_305x305.jpg?v=1634217080"/>
            <h4>Rs.649</h4>
            <p>Crotalaria-juneca, Indian-hemp(0.5Kg Seeds)</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-durana-white-clover-seeds_305x305.jpg?v=1634218289"/>
            <h4>Rs.399</h4>
            <p>Durana-White-Clover (0.5Kg)</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-terminalia-arjuna-arjun-tree-1-kg-seeds_305x305.jpg?v=1634202649"/>
            <h4>Rs.459</h4>
            <p>Terminilia-Arjuna , Arjuna Seeds</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-prunus-persica-peach-0-5-kg-seeds-16969229402252_305x305.jpg?v=1634226940"/>
            <h4>Rs.549</h4>
            <p>Prunus Persica,Peach - 0.5Kg</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

            </div>

            <h1>Trending</h1>
            <div className="images_container2">
                {/* Your images_container2 content */}
                <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-flowering-seeds-category-image-292277_341x341.jpg?v=1681381653"/>
            <h5>Flower Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-hybrid-flowering-seeds-category-image-130227_341x341.jpg?v=1681381655"/>
            <h5>Hybrid Flowering Seeds</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/208243ea2a5605e9943058a60a3cf1e7-917441_341x341.jpg?v=1681381739"/>
            <h5> Bulbs</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/8357c7245d7d7e207ea248759b0dbfc0_279x279.jpg?v=1681381548"/>
            <h5>Iris Flower Bulbs</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-grass-seeds-category-image-327304_341x341.jpg?v=1681381696"/>
            <h5>Grass Seeds</h5>
        </div>
            </div>

            <h2>About Seeds</h2>
            <p className="q">
            Gardening has become an essential part of a healthy lifestyle and hence most modern families have adapted to the culture of home gardens.</p>

        <p className="q">But to have a garden, one needs plants, and to grow healthy plants, one definitely needs healthy seeds. </p>

        <p className="q">Seeds are an essential constituent in addition to soil and pots when we talk about gardening.</p>

        
        <h2>Vegetable seeds</h2>
        <p className="q">
            These are seeds that grow into vegetables, such as tomatoes, carrots, and beans. Planting vegetable seeds is a great way to ensure you have fresh produce in your garden.
        </p>

        <h2>Flower Seeds</h2>
        <p className="q">
            These seeds grow into beautiful flowers, such as roses, sunflowers, and lilies. Flower seeds can add a pop of color to any garden.
        </p>
        <h2>Herb seeds</h2>
        <p className="q">
            Herb seeds grow into plants such as basil, parsley, and thyme. These plants can be used in cooking or for medicinal purposes.
        </p>

            {/* More content here */}

            

        </div>
    );
}

export default Seed;