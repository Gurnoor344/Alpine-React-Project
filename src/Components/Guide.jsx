import React from 'react'

const Guide = () => {
  return (
    <section className="guide12" >
      <h1 style={{textAlign: "center"}}>Plant care Tips & Guidance</h1>

    <div className="guide">
        
      <figure>
          <img src="https://us.123rf.com/450wm/haritonoff/haritonoff2002/haritonoff200200259/141087119-interior-of-an-industrial-greenhouse-in-which-indoor-flowers-and-ampelous-plants-are-grown.jpg?ver=6"alt=""/> 
      <figcaption>
      <h3 className="h3">
          <a className="card title" style={{color: "purple"}}>Container Gardening</a>
          <p style={{color: "darkcyan"}} > Container Gardening is a soothing,practical and fun way to build opportunities and relationships with the plant kingdom.Bright and colorful points of interest are easy to create with planned spacing. A handy location near the kitchen can be a ... </p>
      </h3>
      <button className="butt butt1">Know More</button>
  </figcaption>
  </figure>
      
  <figure>
      <img src="https://media.istockphoto.com/id/520545842/photo/making-a-list-of-plants.jpg?s=612x612&w=0&k=20&c=QFJx_d0hAItFhJZi1f5avjKfJIL9HzFihwGV4sABi8w=" alt=""/>
      
  <figcaption>
  <h3 className="h3">
      <a className="card title" style={{color: "purple"}}>Foundation for Plant Care</a>
      <p style={{color:" darkcyan"}} > Once we have comitted to our chosen plant spaces and plant selections,it is a gift to acknowledge that we now and maybe again ,are local participants int the magic of photosynthesis and its Divine results.Regardless of the geographic ... </p>
  </h3>
  <button className="butt butt1">Know More</button>
</figcaption>
</figure>

<figure>
<img src="https://st3.depositphotos.com/12039320/19155/i/450/depositphotos_191551624-stock-photo-smiling-gardeners-holding-pots-flowers.jpg" alt=""/>
<figcaption>
<h3 className="h3">
<a className="card title" style={{color: "purple"}}>Plant Selection</a>
<p style={{color: "darkcyan"}} >Before beginning a garden project ,you may have several ideas in mind for enhancing spaces with plants and it is good to take things one a step at a time.Having seen a certain plant ,a particular landscape or even a picture could have grabbed your ...
</p>
</h3>
<button className="butt butt1">Know More</button>
</figcaption>
</figure>
</div>
</section>
      

  )
}

export default Guide;