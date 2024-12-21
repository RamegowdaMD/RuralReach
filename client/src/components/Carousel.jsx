import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Carousel_items from '../List/Carousel_items.js'

function Carousels() {
  return (
    <div className="Carousel-div pt-2">
    <Carousel 
      className='carousel-root mb-6' 
       showThumbs={false}        
        showStatus={false}       
        infiniteLoop={true}       
        swipeable={true}          
        emulateTouch={true}       
        useKeyboardArrows={true} 
        dynamicHeight={false}     
        autoPlay={true}          
        interval={2000}           
        stopOnHover={true}     
    >
      {
        Carousel_items.map((data,index)=>(
          <div>
          <img className="" src={data.link} alt="Facebook" />
        </div>
        ))
      }
    </Carousel>
    </div>
  );
}

export default Carousels;