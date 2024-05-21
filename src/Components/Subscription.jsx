import React from 'react'

const Subscription = () => {
  return (
    <div className="subscribe">
        <h2 className="subscribe__title">Let's keep in touch</h2>
        <p className="subscribe__copy">Subscribe to keep your garden fresh and updated. We promise not to spam you!</p>
        <div className="form">
            <input type="email" className="form__email" placeholder="Enter your email addreclassName" />
            <button className="form__button">Send</button>
        </div>
        <div className="notice">
            <input type="checkbox"/>
            <span className="notice__copy">I agree to my email addreclassName being stored and uses to recieve monthly updates.</span>
        </div>
    </div>

  )
}

export default Subscription