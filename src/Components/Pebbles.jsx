// Import necessary dependencies
import React from 'react';
import './Gardening.css'; // Assuming you have a Gardening.css file for styles

// Define your functional component
const Pebbles = () =>{
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
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-pebbles-gorgeous-garden-decoration-with-stone-16968898478220_600x600.jpg?v=1634220634"/>
            <h5>Decorative Pebbles</h5>
        </div>
        <div className="images">
            <img src="https://assets-global.website-files.com/5d2fb52b76aabef62647ed9a/61380de6a332e48110931b46_how-to-use-landscaping-rocks-in-your-gardening-hero.jpg"/>
            <h5>Landscaping Pebbles</h5>
        </div>
        <div className="images">
            <img src="https://m.media-amazon.com/images/I/41whZQ0cI7L.AC_UF1000,1000_QL80.jpg"/>
            <h5>White Aquarium Pebbles</h5>
        </div>
        <div className="images">
            <img src="https://image.made-in-china.com/202f0j00EDUYCOinHgoq/China-Nature-Garden-Nursery-Mexican-Beach-Pebbles-Unpolished-Black-Beach-Pebbles.webp"/>
            <h5>Mexican Beach Pebbles</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/products/nurserylive-pebbles-onex-pebbles-occur-yellow-medium-1-kg-16969360277644_250x250.jpg?v=1634225064"/>
            <h5>Yellow Pebbles</h5>
        </div>
        <div className="images">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8i6fRDqWaSz7QMh3F63vvsG662qZswP7U9O13lD1IQ&s"/>
            <h5>Purple Pebbles</h5>
        </div>
        
        
            </div>

            <div className="gallery">
                {/* Your gallery content */}
                
                <div className="content">
            <img src="https://m.media-amazon.com/images/I/411knMxUP0L.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.579</h4>
            <p>Dark Brown Pebbles & Garden Stones for Outdoor</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://m.media-amazon.com/images/I/81Q1+w647SL.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.1659</h4>
            <p>Black Polished Marble Stone Pebbles for Home & Garden</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://m.media-amazon.com/images/I/61PCvi1H6iL.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.1039</h4>
            <p> Round Marbles Mix Milky Decorative Stone</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://m.media-amazon.com/images/I/91i5iIw3UdL.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.1989</h4>
            <p>Pack of 5kg Pebbles Mystique Unpolished River Stone </p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://m.media-amazon.com/images/I/71oinojq1jL.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.599</h4>
            <p>950 Grams Multicolor Pebbles Stones for Plants Pots,</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://m.media-amazon.com/images/I/816fZ7EiD4L.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.1119</h4>
            <p>Fancy Pebbles for Decoration</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://m.media-amazon.com/images/I/81KDPaw3XUS.AC_UL480_FMwebp_QL65.jpg"/>
            <h4>Rs.1789</h4>
            <p>Anilus Pebbles for Decoration </p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://m.media-amazon.com/images/I/41JuaMRgGlL.AC_UL480_QL65.jpg"/>
            <h4>Rs.499</h4>
            <p>Decorative Pure Stones Pebbles</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        
        
            </div>

            <h1>Imported Winter Supply's </h1>
            <div className="images_container2">
                {/* Your images_container2 content */}
    
                <div className="images">
            <img src="https://m.media-amazon.com/images/I/61v8ivKcGuL.AC_UL480_QL65.jpg"/>
            <h5>Color Stone Decorative Glossy</h5>
        </div>
        <div className="images">
            <img src="https://m.media-amazon.com/images/I/816kMyslz3L.AC_UL480_QL65.jpg"/>
            <h5>Decorative for Garden/Lawn/Aquarium Decoration Glossy Stones </h5>
        </div>
        <div className="images">
            <img src="https://m.media-amazon.com/images/I/71S9BKPnb2L.AC_UL480_QL65.jpg"/>
            <h5>Pebbles Most Wanted</h5>
        </div>
        <div className="images">
            <img src="https://m.media-amazon.com/images/I/7151SSlbmnL.AC_UL480_QL65.jpg"/>
            <h5> Multi-Colour Mixed Decorative Dyed Pebbles </h5>
        </div>
        <div className="images">
            <img src="https://m.media-amazon.com/images/I/51gaedmDJOL.AC_UL480_QL65.jpg"/>
            <h5>Vase Fillers Pebbles </h5>
        </div>

            </div>

            <h2>How to decorate garden with pebbles?</h2>
        <p className="q">
            Pebbles are a perfect way to add visual and textural interest to your garden or outdoor area. By incorporating pebbles into your landscape design, you can make your garden or outdoor space appear stylish and luxurious. You can use pebbles to fill an empty area and give it character, as well as bring a natural feel to the place.        </p>
        
        <h2>🪴 1. Use for Pot Plants🪴</h2>
        <p className="q">
            Decorative Pebbles are the perfect finishing touch for pots, jars or troughs. You can use pebbles to cover soil on the surface of pot plants to add texture and colour. They also stop inquisitive household pets from digging up soil.
        </p>
        <h2>🪴 2. Use for Garden mulch 🪴</h2>
        <p className="q">
            Pebbles can be used as mulch in garden beds, where they can protect the soil from erosion, sunlight and weeds. What’s more, pebble mulch can last a lifetime! Pebble mulch is generally best suited for native and arid gardens where composted organics aren’t as high in demand.
        </p>
        <h2>🪴 3. Perfect for Succulents & Potted Plants 🪴</h2>
        <p className="q">
            Our White Glossy Pebbles are good for potted plants. First, they protect the plants from weeds and other invasive plants. Second, they help the soil retain moisture. And lastly, they make your plants stand out!


        </p>
        <h2>🪴 4. Use for Your Interior Design 🪴</h2>
        <p className="q">
            Commonly used in weddings and indoor decoration, these Pebbles are decorator's dream. Their bright white color means they are a blank slate for many different interior design applications, like centerpieces, indoor plants, and many other uses.

        </p>
        </div>
    );
}

export default Pebbles;