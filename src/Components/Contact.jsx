import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    
    <>
    <div className="logo">
            <a href="code.html">
                <i className="ri-arrow-left-circle-fill"></i>
			
			</a>
        </div>
		

	
	<section className="banner">
		<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png"
			alt="Welcome to our Contact Us page"/>
		<h1>Get in Touch With Us</h1>
		<p>
		We're here to answer any questions you may have.
		</p>
	</section>

	
	<div  className="contact-form">
		<div className="form-container">
			<h2>Your Details</h2>
			<form action="/" method="POST">

				<label for="name">Name: </label>
				<input type="text" id="name" name="name" required />

				<label for="email">Email: </label>
				<input type="email" id="email" name="email" required />

				<label for="phone">Phone: </label>
				<input type="tel" id="phone" name="phone" />

				<label for="message">Message: </label>
				<textarea id="message" name="message" rows="4" required></textarea>

				<button type="submit" className="submit-button">Submit</button>
			</form>
		</div>
	</div>

	<footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">Alpine</h1>
    <br />
    <h2>Contact</h2>
    <address>
      Chitkara University, Rajpura, Punjab, 140401
      <br />
      <br />
      <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  <ul className="footer__nav">
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title" style={{ marginRight: '35%' }}>My Account</h2>
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#">Order History</a>
        </li>
        <li>
          <a href="#">Wish List</a>
        </li>
        <li>
          <a href="#">News Letter</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
        <li>
          <a href="#">Gift Vouchers</a>
        </li>
        <li>
          <a href="#">Returns</a>
        </li>
      </ul>
    </li>
    <li className="nav__item">
      <h2 className="nav__title" style={{ marginRight: '35%' }}>Legal</h2>
      <ul className="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a href="#">Shipping Policy</a>
        </li>
        <li>
          <a href="#">Refund Policy</a>
        </li>
      </ul>
    </li>
    <li>
      <h2 className="nav__title">Media</h2>
      <div className='media-buttons'>
      <a href="#" className="fa fa-facebook"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="#" className="fa fa-instagram"></a>
      </div>
    </li>
  </ul>
  <br />
  <br />
  <div className="legal">
    <p>&copy; 2024 March. All rights reserved.</p>
    <div className="legal__links">
      <span>
        Made with <span className="heart">♥</span> by <b> team Alpine</b> <br />
        Harjot -- 2210990362<br />
        Gurnoor -- 2210990344<br />
        Harman -- 2210990372<br />
        Akshit -- 2210990091
      </span>
    </div>
  </div>
</footer>
	
    </>
  )
}

export default Contact;