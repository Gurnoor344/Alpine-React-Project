import React from "react";
import Slider from './Slider'
import Combos from './Combos'
import AlpineDiff from './AlpineDiff'
import TopSelling from './TopSelling'
import Guide from './Guide'
import Services from './Services'
import Subscription from './Subscription'
import Video from './Video'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Slider/>,
            <Combos/>,
            <AlpineDiff/>,
            <TopSelling/>,
            <Guide/>,
            <Services/>,
            <Subscription/>,
            <Video/>,
            <Footer/>
        </div>
    )    
}

export default Home;