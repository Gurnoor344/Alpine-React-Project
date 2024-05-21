// Import necessary dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gardening.css'; // Assuming you have a Gardening.css file for styles

// Define your functional component
const Gardening = () =>{
    const navigate = useNavigate();

    const handleCart = (e) => {
        e.preventDefault();
        const logged = localStorage.getItem('logged');
        if (!logged) {
            alert('Please login to add items to cart');
            navigate('/Login');
            return;
        }

        const parent = e.target.parentNode;
        console.log(parent)
        console.log(parent.children)
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
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-trending-in-gardening-collection-image_234x234.jpg?v=1681381841"/>
            <h5>Trending In Gardening</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-plants-packs-by-features-collection-image_234x234.jpg?v=1681381843"/>
            <h5>Plants' Packs By Feature</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-miniature-gardens-_-kits-collection-image_234x234.jpg?v=1681381844"/>
            <h5>Miniature Gardens & Kits</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-plants-packs-by-occasions-collection-image_234x234.jpg?v=1681381847"/>
            <h5>Top Plants' Pack</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-top-plants-packs-collection-image_234x234.jpg?v=1681381844"/>
            <h5>Plants' Packs By Occasion</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-plants-packs-by-location-collection-image_234x234.jpg?v=1681381846"/>
            <h5>Gardening Plants</h5>
        </div>
        
            </div>

            <div className="gallery">
                {/* Your gallery content */}
                <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-top-3-plants-for-beautiful-flowers_320x320.jpg?v=1634230156"/>
            <h4>Rs.876</h4>
            <p>Top 3 Plants For Beautiful Flowers</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_320x320.jpg?v=1634209158"/>
            <h4>Rs.1147</h4>
            <p>5 Best Fragrant Plants</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-independence-day-special-4-plants-pack-16968950972556_320x320.jpg?v=1634222174"/>
            <h4>Rs.1099</h4>
            <p>Top 5 air purifier and oxygen enriching plant pack</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

       
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-set-of-5-enchanting-roses-16969319055500_320x320.jpg?v=1634228742"/>
            <h4>Rs.579</h4>
            <p>Best 3 Indoor Pollution Killer Plants Pack</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_320x320.jpg?v=1634225377  "/>
            <h4>Rs.1659</h4>
            <p>NASA Recommended Table Top / Office Desk Plants</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-independence-day-special-4-plants-pack-16968950972556_320x320.jpg?v=1634222174"/>
            <h4>Rs.1039</h4>
            <p>World Environment Day Special (5 Plants Pack)</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-top-5-indoor-garden-plants-to-remove-air-toxins_600x600.jpg?v=1634230327"/>
            <h4>Rs.1989</h4>
            <p>Low Maintenance Indoor Plants for Home Decoration</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-low-maintenance-indoor-plants-for-home-decoration-16969011888268_320x320.jpg?v=1634223449"/>
            <h4>Rs.599</h4>
            <p>Money Plant, Scindapsus( Pack of 3) - Plant</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_320x320.jpg?v=1634209158"/>
            <h4>Rs.1119</h4>
            <p>Natural Air Purifier Plants for Summer Cooling</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-independence-day-special-4-plants-pack-16968950972556_320x320.jpg?v=1634222174"/>
            <h4>Rs.1789</h4>
            <p>Top 5 Monsoon Special Foliage Plants for Home Decor</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-top-5-indoor-garden-plants-to-remove-air-toxins_600x600.jpg?v=1634230327"/>
            <h4>Rs.499</h4>
            <p>Top 5 Oxygen Bomb Plants Pack</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-g-3-best-plants-indoor-to-beat-the-air-pollution-943063_512x512.jpg?v=1679748173"/>
            <h4>Rs.399</h4>
            <p>Set of 3 Small Plants for Luck</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-top-5-multipurpose-flowering-plants-for-beauty-16969390882956_512x512.jpg?v=1634230354"/>
            <h4>Rs.999</h4>
            <p>Top 5 Multipurpose Flowering Plants For Beauty</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-best-3-table-top-office-desk-plants-to-bring-prosperity-1-493810_512x683.jpg?v=1679749249"/>
            <h4>Rs.679</h4>
            <p>Best 3 Table top / Office Desk Plants to Bring Prosperity</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        <div className="content">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-top-3-flowering-plants-to-enhance-garden-beauty-1_512x683.jpg?v=1634230112"/>
            <h4>Rs.899</h4>
            <p>Top 3 Flowering plants to Enhance Garden Beauty</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
            </div>

            <h1>Trending</h1>
            <div className="images_container2">
                {/* Your images_container2 content */}
                <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-indoor-plants-category-image_281x281.jpg?v=16813815101"/>
            <h5>Indoor Plants</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-lucky-bamboos-category-image_281x281.jpg?v=1681381465"/>
            <h5>Lucky Bamboo</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-cactus-and-succulents-collection-image_281x281.jpg?v=1681381872"/>
            <h5>Cactus And Succulents</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/3c2267783439b595a935f3fc06ed698d_281x281.jpg?v=1681381523"/>
            <h5>Bonsai Plants</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-plants-packs-by-occasions-collection-image_234x234.jpg?v=1681381847"/>
            <h5>Aromatic Plants</h5>
        </div>
            </div>

            <h2>About Gardening</h2>
            <p className="q">Gardening is not just an activity for some, it is a stress release. For others, it is an escape into a world filled with hope and joy.</p>

        <p className="q">While some people tend to their gardens just to prevent their plants from dying, others treat their gardens with care and love.</p>

        <p className="q">A variety of gardening tools and implements can make the job easier and more fun. Individual gardening essentials like pots, soil, and saplings can be selected as convenient. Alternatively, you may also opt for complete gardening set to get you going.</p>

        <p className="q">A well-maintained garden must have a handy pair of shears, rake, and sprinkler. Ensure you add these to your gardening kit. It is a novel way to add some glamour, color, and character to your garden. You can also use accessories like pebbles, toys, and birdhouses.</p>

        <p className="q">
            The world of gardening revolves around flowering plants, sacred trees, greens, and even vegetables. Differing needs dictate the kind of gardening plants and tools.
        </p>

            {/* More content here */}

            <h2>Garden design</h2>
            <p className="q">
            A well-designed garden is a thing of beauty, but designing one is no easy task. From choosing the right plants to deciding on the layout, there's a lot to consider. In this article, we'll give you some tips and tricks to create the perfect garden design.
        </p>
        <h2>Organic gardening</h2>
        <p className="q">
            If you're looking for a healthier and more eco-friendly way to garden, then organic gardening is the way to go. In this article, we'll show you how to get started with organic gardening, and why it's so important.
        </p>
        <h2>Container gardening</h2>
        <p className="q">
            If you don't have a lot of outdoor space, container gardening is the perfect solution. With just a few pots and some soil, you can create a beautiful garden right on your balcony or patio. In this article, we'll give you some tips on how to get started with container gardening.
        </p>

            {/* Additional sections */}

        </div>
    );
}

export default Gardening;