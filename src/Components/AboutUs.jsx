import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
    <div className="about-section">
  <h1>ABOUT Us</h1>
  <p>IN ALPINE , Our homegrown plants get utmost care and attention. A place where plants are propagated and grown to a desired
    </p>
  <p>Our Mission
    Dedicated to growing an excellent assortment of superior plants and provide our customers with the best service possible. Create for our employees a stimulating, safe, challenging and rewarding environment.
    
    Our Vision
    To enrich and transform our clients’ environment, health and well being with plants through the principles of biophilic design and inclusion of nature in the built environment, including green roofs, living walls, moss walls, and plantscaping.............</p>
</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="harjot.png" alt="Harjot Kaur" style={{width:"100%"}}/>
      <div className="container">
        <h2>Harjot Kaur</h2>
        <p className="title">CEO & Founder</p>
        <p>Harjot ia a backbone, which is responsible for overseeing the overall operations and strategic direction of the alpine.</p>
        <p><i>harjot362.be22@chitkara.edu.in</i></p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="gurnoor.png" alt="Gurnoor Dhaliwal" style={{width:"100%"}}/>
      <div className="container">
        <h2>Gurnoor Dhaliwal</h2>
        <p className="title">Chief Operating Officer</p>
        <p>Gurnoor is a high-ranking executive which a pivotal role in ensuring the efficient and effective operation of the apline.</p>
        <p><i>gurnoor344.be22@chitkara.edu.in</i></p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="harman.png" alt="Harmanjeet Singh" style={{width:"100%"}}/>
      <div className="container">
        <h2>Harmanjeet Singh</h2>
        <p className="title">Product Manager</p>
        <p> Harman involves overseeing the development, marketing, and management of the nursery's products and services. </p>
        <p><i>harmanjeet372.be22@chitkara.edu.in</i></p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="Akshit.png" alt="Akshit Garg" style={{width:"100%"}}/>
      <div className="container">
        <h2>Akshit Garg</h2>
        <p className="title">Accountant</p>
        <p>Akshit manages financial operations, ensuring compliance with regulations, and providing accurate financial information. </p>
        <p><i>akshit091.be22@chitkara.edu.in</i></p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>



 
<footer className="footer" >
    <div className="footer__addr">


      <h1 className="footer__logo">Alpine</h1>

      
          

      <h2>Contact</h2>
      <address>
        Chitkara University, Rajpura, Punjab, 140401

        <a className="footer__btn" href="mailto:example@gmail.com">Email Us :
          alpine@.com 
        </a>
      </address>
    </div>
    

    <ul className="footer__nav ">  
      <li className="nav_item nav_item--extra">


        <h2 className="nav__title" style={{marginRight: "35%"}}>My Account</h2>
        
        <ul className="nav_ul nav_ul--extra">
          <li>
            <a href="/">Order History</a>
          </li>
          
          <li>
            <a href="/">Wish List</a>
          </li>
          
          <li>
            <a href="/">News Letter</a>
          </li>
          
          <li>
            <a href="login.html">Login</a>
          </li>
          
          <li>
            <a href="/">Gift Vouchers</a>
          </li>
          
          <li>
            <a href="/">Returns</a>
          </li>
        </ul>
      </li> 


      <li className="nav__item">
        <h2 className="nav__title" style={{marginRright: "35%;"}}>Legal</h2>
        
        <ul className="nav__ul">
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          
          <li>
            <a href="/">Terms of Service</a>
          </li>
          
          <li>
            <a href="/">Shiping Policy</a>
          </li>

          <li>
            <a href="/">Refund Policy</a>
          </li>
        </ul>
      </li>


      <li>

        <h2 className="nav__title" >Media</h2>
      
            <a href="/" className="fa fa-facebook" ></a>
            <a href="/" className="fa fa-twitter" ></a>
            <a href="/" className="fa fa-instagram" ></a>

      </li>
    </ul>

    
    

    <div className="legal">
      
      <p>&copy; 2024 March. All rights reserved.</p>
      
      <div className="legal__links" >
        <span>Made with <span className="heart">♥️</span> by <b> team Alpine</b>  Harjot -- 2210990362 Gurnoor -- 2210990344 Harman -- 2210990372 Akshit -- 2210990091</span>
      </div>
    </div>
  </footer>
  </>
  )
}

export default AboutUs;