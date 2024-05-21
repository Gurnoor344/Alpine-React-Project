import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='products-body'>
    <ul className="cards">
    <li>
      <Link to="/Gardening" className="card">
        <img src="https://assets.wfcdn.com/im/29185591/resize-h755-w755%5Ecompr-r85/1084/108412659/Jean+Pierre+Planter+Urn+Planter.jpg" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <h2 className="card__title">Gardening</h2>            
              <span className="card__status">1 hour ago</span>
            </div>
          </div>
          <p className="card__description">A beautiful plant is like having a friend around the house</p>
        </div>
      </Link>      
    </li>
    <li>
      <Link  to="/Seed" className="card">
        <img src="https://popshopamerica.com/wp-content/uploads/2015/05/seed-packets-1.jpg" className="card__image" alt="" />
        <div className="card__overlay">        
          <div className="card__header">
            <div className="card__header-text">
              <h2 className="card__title">Seeds</h2>
              <span className="card__status">3 hours ago</span>
            </div>
          </div>
          <p className="card__description">Every seed you so plant, will grow into bountiful crops for great harvest.</p>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/Pots" className="card">
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-container-set/p/p/4/05-inkul-flowerpots-multicolor-05-inkulture-original-imagm4eerjje3smq.jpeg?q=90&crop=false" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <h2 className="card__title">Pots</h2>
              <span className="card__status">1 hour ago</span>
            </div>
          </div>
          <p className="card__description">Wherever life plants you, bloom with grace.</p>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/Fertilizers" className="card">
        <img src="https://images.thdstatic.com/productImages/5f0c1127-da34-42aa-8c54-04fe529278e1/svn/vermont-organics-reclamation-soil-organic-plant-food-ntri441-c3_600.jpg" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <h2 className="card__title">Fertilizers</h2>
              <span className="card__status">3 hours ago</span>
            </div>          
          </div>
          <p className="card__description">Fertilizer does no good in a heap, but a little spread around works miracles all over.</p>
        </div>
      </Link>
    </li>    
    <li>
      <Link to="/Acessories" className="card">
        <img src="https://image.made-in-china.com/2f0j00bGQkERTMuBze/3-Piece-Set-Mini-Gardening-Potting-Tools-Wooden-Handle-Shovel-Rake-Shovel-Multifunctional-Household-Plant-Bonsai-Tools.webp" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <h3 className="card__title">Accessories</h3>
              <span className="card__status">1 hour ago</span>
            </div>
          </div>
          <p className="card__description">The true meaning of life is to plant trees, under whose shade you do not expect to sit.</p>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/Pebbles" className="card">
        <img src="https://i5.walmartimages.com/asr/dd77780a-6107-4abe-9c88-33a7a9e478f1.8263de2b5a2c4eac3e510b1922a5a7eb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <h2 className="card__title">Pebbles</h2>
              <span className="card__status">1 hour ago</span>
            </div>
          </div>
          <p className="card__description">There are no gardening mistakes, only experiments.</p>
        </div>
      </Link>
    </li>
  </ul>
  </div>
  )
}

export default Products