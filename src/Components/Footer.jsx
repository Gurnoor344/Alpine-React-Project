import React from 'react'

const Footer = () => {
  return (
    <>
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

export default Footer