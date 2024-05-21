import React, { useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  let slideIndex = 1;
  useEffect(() => {
    
    showSlides(slideIndex);

    // Set the interval time in milliseconds (1 second = 1000 milliseconds)
    let autoplayInterval = 3000; // Change this value to adjust the interval

    let timer = setInterval(autoSlide, autoplayInterval);

    

    function autoSlide() {
      plusSlides(1);
    }
    

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    

    // Function to stop the automatic slideshow
    function stopAutoSlide() {
      clearInterval(timer);
    }

    // Function to potentially restart the automatic slideshow with a new interval
    function restartAutoSlide(newInterval) {
      stopAutoSlide();
      autoplayInterval = newInterval;
      timer = setInterval(autoSlide, autoplayInterval);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }); 

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Handle reaching the end or beginning of the slides
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Clear active classes from all slides and dots
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  
  function plusSlides(n) {
    console.log("Clicked Here");
    showSlides((slideIndex += n));
  }// Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="https://www.heartyculturenursery.com/cdn/shop/files/2_59458964-93df-41da-8a89-515add00e716_1086x522_crop_center.jpg?v=1691581755"
            style={{ width: "100%", filter: "brightness(50%)" }}
            alt=""
          />
          <div className="text">
            <h1>By Online: Greenery at Your Finger Tips</h1>
            Browse, select, and purchase your favoriteplants from the comfort
            of your home.
          </div>
        </div>

        <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="https://www.heartyculturenursery.com/cdn/shop/files/Untitled_design_2_640x308_crop_center.jpg?v=1691581377" style={{width:"100%",filter: "brightness(50%)"}} />
        <div className="text">
          <h1> Our Nursery: Nurturing Nature's Beauty</h1>
              Dive into our vast selection of thriving plants, each cultivated with care and expertize.
        </div>

      </div>
      
      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="https://www.heartyculturenursery.com/cdn/shop/files/217_520x250_crop_center.jpg?v=1691582998" style={{width:"100%", filter: "brightness(50%)"}} />
        <div className="text">
          <h1> Landscaping Service: Crafting Green Masterpieces</h1>
          Transforn your outdoor area with ourbespoke landscaping services.
        </div>
      </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  );
};

export default Slider;