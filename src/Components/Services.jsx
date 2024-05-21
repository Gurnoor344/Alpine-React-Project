import React from 'react'

const Services = () => {
  return (
    <>
    <h1 style={{textAlign: "center"}}>
      Nursery & landscaping Services
  </h1>
  <h5 ><b>At Alpine we not only provid a vibrant selection of nutured plants but also offer expert landscaping services to trnsform your Outdoor spaces into lush,personilized gardens</b></h5>


     <div className="mains">
      <ul className="kards">
        <li className="kards_item">
          <div className="kard">
            <div className="kard_image"><img src="PHOTO-2024-03-07-14-16-38.jpg" alt="mixed vegetable salad in a mason jar. "/></div>
            <div className="kard_content">
              <h2 className="kard_title">Our Nursery:Nurture Your Space With Our Beautiful Plants</h2>
              <div className="kard_text">
                <p>Our plant collection encompasses an exciting range of greenary. Whether you're seeking flowering plants 
                  
                  to add a splash of color to your garden, indoor plants to purify your air. Our passion
                  
                   for plants is reflected in the diversity and health of our stock . </p>
              </div>
            </div>
          </div>
        </li>
    
        <li className="kards_item">
          <div className="kard">
            <div className="kard_image"><img src="PHOTO-2024-03-07-14-16-38.jpg" alt="a Reuben sandwich on wax paper. "/></div>
            <div className="kard_content">
              <h2 className="kard_title">Landscaping Services: Landscaping Masterpieces Crafted with Passion</h2>
              <div className="kard_text">
                <p>Our plant collection encompasses an exciting range of greenary. Whether you're seeking flowering plants 
                  
                  to add a splash of color to your garden, indoor plants to purify your air. Our passion
                  
                   for plants is reflected in the diversity and health of our stock .   </p>
              </div>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
    </>
  )
}

export default Services;