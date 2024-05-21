// Import necessary dependencies
import React from 'react';
import './Gardening.css'; // Assuming you have a Gardening.css file for styles

// Define your functional component
const Pots = () =>{

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
            <img src="https://www.ugaoo.com/cdn/shop/files/1_d87323cc-bf70-4799-a66d-7ff965c8cb2b.jpg?v=1709701882&width=375"/>
            <h5>Sienna Terracotta Pots </h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/1_33b8bfaa-0a57-4586-bcc6-df156a6c694e.jpg?v=1709700211&width=375"/>
            <h5>Gradient Wooden Planter</h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/1_e8800a18-1b5b-4730-82ba-004f9ac8041b.jpg?v=1709643973&width=375"/>
            <h5>Meadow Planter</h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/1_2acf4756-e9fb-4bf2-b95c-affb211b1d50.jpg?v=1704721294&width=375"/>
            <h5>RidgeCraft Cylindrical Planter</h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/Aimagewithplant9.jpg?v=1703687888&width=375"/>
            <h5>Atlantis Self Watering Planter</h5>
        </div>
        
            </div>

            <div className="gallery">
                {/* Your gallery content */}
                
        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImageWithPlant_8bfdbebc-0bff-4faf-bf71-0702333795dc.jpg?v=1689239639&width=375"/>
            <h4>Rs.579</h4>
            <p>Dark Brown Pebbles & Garden Stones for Outdoor</p>
          
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImageWithPlant_be74feed-707d-4e89-8510-2ae7cfa85d1e.jpg?v=1689237264&width=375"/>
            <h4>Rs.1659</h4>
            <p>Zuri Vase Cylinder Retro</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/products/pot_redone598.png?v=1661284427&width=375"/>
            <h4>Rs.1039</h4>
            <p>Tulip Fantasy Bundle - White</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/products/pot_redone586.png?v=1661284466&width=375"/>
            <h4>Rs.1989</h4>
            <p>ulip Fantasy Bundle - Grey </p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/products/macrame-single-layer-hanger-31259262648452.png?v=1675599663&width=375"/>
            <h4>Rs.599</h4>
            <p>Macrame Single Layer Hanger</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/products/macrame-three-layer-hanger-31259272020100.png?v=1675599673&width=375"/>
            <h4>Rs.1119</h4>
            <p>Macrame Three Layer Hanger</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/products/microgreen-tray-set-of-3-31259567358084.png?v=1675600914&width=375"/>
            <h4>Rs.1789</h4>
            <p>Microgreen Tray - Set of 3</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://www.ugaoo.com/cdn/shop/products/pot_redone252_1.png?v=1661282890&width=375"/>
            <h4>Rs.499</h4>
            <p>Monsoon Medley Ceramic Pot</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
            </div>

            <h1>Trending</h1>
            <div className="images_container2">
                {/* Your images_container2 content */}
                 <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImagewithplant_d6b8637c-26e7-40d5-81ca-d49d06d8cd46.jpg?v=1689144729&width=375"/>
            <h5>Sabai Grass Planter</h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImagewithplant_f167b4ae-91df-4b42-8e34-faa0f2ec583f.jpg?v=1689144661&width=375"/>
            <h5>Square Cane Planter</h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImagewithplant_b258ea20-da51-4e0f-a401-55ca8a1adcec.jpg?v=1689144789&width=375"/>
            <h5>Sitalpati Planter</h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImagewithPlant_582a4f8b-6b32-4d62-931c-fe39352bbe01.jpg?v=1686311525&width=375"/>
            <h5> Hague Planter </h5>
        </div>
        <div className="images">
            <img src="https://www.ugaoo.com/cdn/shop/files/AImageWithPlant_cdc1b339-b553-491a-8236-3c3b35ae8919.jpg?v=1689226544&width=375"/>
            <h5>Heraldry Vase Ball</h5>
        </div>
            </div>


            <h2>How to Maintain life of plants in pots?</h2>
        <p className="q">
            Hanging plants and small pots may need watering twice a day (the best times are morning and evening); once a day is enough for large pots. Here are some tips for watering plants  </p>      
        <h2>🪴 1. Feeding🪴</h2>
        <p className="q">
            Plants growing in containers need more fertilizing than those in the ground. The more you water, the more quickly you flush the nutrients out of the soil.
        </p>
        <h2>🪴 2. Deadheading 🪴</h2>
        <p className="q">
            Some plants have so many tiny flowers and stems, it would be too time-consuming to snip or pick off individual flower heads. For those types, it's best to shear the whole plant back to about one-third of its size. It will look "whacked" for about a week, but you will soon be rewarded with a flush of new buds and blooms.        </p>
        <h2>🪴 3. Watering 🪴</h2>
        <p className="q">
            Our White Glossy Pebbles are good for potted plants. First, they protect the plants from weeds and other invasive plants. Second, they help the soil retain moisture. And lastly, they make your plants stand out!</p>

        
        

            {/* More content here */}

            

        </div>
    );
}

export default Pots;