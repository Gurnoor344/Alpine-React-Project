// Import necessary dependencies
import React from 'react';
import './Gardening.css'; // Assuming you have a Gardening.css file for styles

// Define your functional component
const Acessories = () =>{

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
            <img src="https://cdn.shopify.com/s/files/1/1489/8850/files/self_watering_plant_banner_for_website2.jpg?v=1706956743"/>
            <h5>Trending In Gardening</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/White_sand_for_aquarium-_400_g.jpg?v=1709810152&width=360"/>
            <h5>Aquarium Sand</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/baboo2.jpg?v=1708077658&width=360"/>
            <h5>Fountain For Indoor Plants</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/products/71XovqM295L._AC_SL1500.jpg?v=1617695691&width=360"/>
            <h5>Air black Pot</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/81ocMcH2dxL._SL1500.jpg?v=1703072804&width=360"/>
            <h5>Printed Pot</h5>
        </div>
        <div className="images">
            <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-plants-packs-by-location-collection-image_234x234.jpg?v=1681381846"/>
            <h5>Gardening Plants</h5>
        </div>
        
            </div>

            <div className="gallery">
                {/* Your gallery content */}
                
                <div className="content">
            <img src="https://nurserylive.com/cdn/shop/collections/61ee7e1bd53cc58828079f3e2a3be9bd-647845_600x600.jpg?v=1681381453"/>
            <h4>Rs.876</h4>
            <p>Tool Kit</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/products/716JD0ETSdL._SL1500.jpg?v=1694412530&width=360"/>
            <h4>Rs.1147</h4>
            <p>Cultivator</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoc2NqdzJsP40nRSk7NIx2-YaeBauQ-NJ8hk7Jd7dhKJWGCzm7"/>
            <h4>Rs.1099</h4>
            <p>Watering Can</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        
        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/2-garden-gloves-with-claws-for-digging-planting-krenz-original-imagagubjbfbavh5.jpg?v=1694458612&width=360"/>
            <h4>Rs.579</h4>
            <p>Digging And Planting Gloves</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/gardeningtools_94b060ff-fb3b-403d-abe2-16b15d4d2cff.jpg?v=1699529212&width=360 "/>
            <h4>Rs.1659</h4>
            <p>Wooden Handled Digger</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/gardeningplastictools.jpg?v=1694412448&width=360"/>
            <h4>Rs.1039</h4>
            <p>Cultivator And Trowel</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/61PK9cX6ePL._SL1000.jpg?v=1694416139&width=360"/>
            <h4>Rs.1989</h4>
            <p>Twist Tie Wire</p>
           
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>
        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/2image_1500x1500_crop_center_775bf0da-d192-4e61-8d44-943433437d00.jpg?v=1694458883&width=360"/>
            <h4>Rs.599</h4>
            <p>Pruning Shear Cutter</p>
        
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>


        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/31Rbz-P4-dL.jpg?v=1702713886&width=360"/>
            <h4>Rs.1119</h4>
            <p>Plastic Spray Water Bottle</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

        <div className="content">
            <img src="https://casadeamor.in/cdn/shop/files/1261-1.jpg?v=1707812969&width=360"/>
            <h4>Rs.1789</h4>
            <p>Plants Stand (Multi)</p>
            
            <button className="buy-1" onClick={(e) => {handleCart(e)}}>Buy Now</button>
        </div>

       
        
        
            </div>

            <h1>Imported Winter Supply's </h1>
            <div className="images_container2">
                {/* Your images_container2 content */}
    
                <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/71KxLEzq0IL._SL1500.jpg?v=1694458488&width=360"/>
            <h5>Natural Bird Nest</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/drip-4_ed701955-18c7-47d5-a564-ea6169be2267.jpg?v=1694412839&width=360"/>
            <h5>Small Irrigation Kit</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/products/casadeamorplanthangerhooksetof2new.jpg?v=1654241592&width=360"/>
            <h5>Plant Hanger</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/smalShook-2_66854c7a-bcba-4386-9cc2-49b3be8261c0.jpg?v=1701859253&width=360"/>
            <h5>Iron Hooks</h5>
        </div>
        <div className="images">
            <img src="https://casadeamor.in/cdn/shop/files/bamboo-2.jpg?v=1708074818&width=360"/>
            <h5>Bamboo fountain</h5>
        </div>

            </div>

            <h2>About Accesories</h2>
        <p className="q">
        The world of gardening revolves around flowering plants, sacred trees, greens, and even vegetables. Differing needs dictate the kind of gardening plants and tools.
        </p>
        
        <h2>  Mist & Stream</h2>
        <p className="q">
            Easily adjust the sprayer from a fine mist to a solid stream to suit your specific needs. Tackle any task with a simple twist of the nozzle.
        </p>
        <h2>🌱 Material, BPA Free</h2>
        <p className="q">
            Crafted from ABS Plastic (BPA Free & Lead Free), our spray bottles are safe, eco-friendly, and have a 500 ml capacity, eliminating the need for constant refills.
        </p>
        <h2>🛡 Chemical Resistant</h2>
        <p className="q">
            Our spray bottles are designed to resist harsh chemicals and solvents, including waxes, carpet cleaners, dressings, window cleaners, and degreasers.
        </p>
        <h2>🌺 Better Trigger Design</h2>
        <p className="q">
            The unique ergonomic trigger design allows your fingers to rest comfortably, reducing hand fatigue, while the bottle fits snugly in your hand.</p>
            {/* More content here */}

            

        </div>
    );
}

export default Acessories;