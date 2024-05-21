import React from 'react'
import { Link } from 'react-router-dom'

const Combos = () => {
  return (
    <>
    <h2>GREAT COMBO's</h2>
    <div className="row">
        <Link to ="/Bless" className="column">
            <img src="https://www.heartyculturenursery.com/cdn/shop/files/blessings_844x469.jpg?v=1614391323" alt="" style={{width: "100% "}}/>
          
        </Link>
        <Link to="/Destined" className="column">
            <img src="https://www.heartyculturenursery.com/cdn/shop/files/delight1_844x469.jpg?v=1614391324" alt="" style={{width:" 100%"}}/>
        </Link>
       
      </div>
      <div className="row">
        <a href="" className="column">
            <img src="https://www.heartyculturenursery.com/cdn/shop/files/divine1_844x469.jpg?v=1614391511" alt="" style={{width: "100%"}}/>

        </a>
        <Link to="/Tranquil " className="column">
            <img src="https://www.heartyculturenursery.com/cdn/shop/files/tranquil_844x469.jpg?v=1614391323" alt="" style={{width: "100%"}}/>
        </Link>
        
      </div>
      </>
  )
}

export default Combos
