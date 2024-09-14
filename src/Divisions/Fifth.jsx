import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import caro9 from "../assets/caro9.webp"

import caro10 from "../assets/caro10.webp"
import caro11 from "../assets/caro11.webp"
import caro12 from "../assets/caro12.webp"
import caro13 from "../assets/caro13.webp"

import glow from "../assets/glow.webp"
import glow2 from "../assets/glow2.webp"
import glow3 from "../assets/glow3.webp"
import glow4 from "../assets/glow4.webp"
import glow5 from "../assets/glow5.webp"
import glow6 from "../assets/glow6.webp"
import glow7 from "../assets/glow7.webp"
import glow8 from "../assets/glow8.webp"
import glow9 from "../assets/glow9.webp"
import glow10 from "../assets/glow10.webp"

import banner4 from "../assets/banner4.webp"
import banner5 from "../assets/banner5.webp"
import banner6 from "../assets/banner6.webp"
import './Third.css'
function Fifth() {
    const options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2.5,
            nav: true,
            loop:false,
            dots:false
          },
          600: {
            items: 4,
            nav: false,
            loop:false,
            dots:false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false,
            dots:false,  autoplay: true,    // Enable autoplay
            autoplayTimeout: 3000, // Time between each slide transition (in milliseconds)
            autoplayHoverPause: true, // Pause autoplay on hover
          },
        },
      };
  return (
    <>
<div className='mt-5 mb-5'>
   <OwlCarousel className='owl-theme' loop nav {...options}>
  
   <div className='it me-3'>
    <img src={caro9} alt=""  width='80%'  height='100%'/>
   </div>
   
   <div className='it me-3'>
    <img src={caro10} alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src={caro11} alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src={caro12}alt="" width='80%'  height='100%'/>
   </div>
   <div className='it me-3'>
    <img src={caro13} alt=""width='80%'  height='100%' />
   </div>

   
   <div className='it me-3'>
    <img src={caro9} alt=""  width='80%'  height='100%'/>
   </div>
   
   <div className='it me-3'>
    <img src={caro10} alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src={caro11} alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src={caro12}alt="" width='80%'  height='100%'/>
   </div>
   <div className='it me-3'>
    <img src={caro13} alt=""width='80%'  height='100%' />
   </div>
   
</OwlCarousel>



</div>

<div className='d-flex justify-content-center align-items-center brands'>
<h4 style={{fontWeight:'600'}}>Top Brands For You</h4>
</div>

<div className="row glow">
<div className="col-md-4 col-lg-3 col-12">
<img src={glow} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow2} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow3} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow4} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow5} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow6} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow7} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow8} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow9} alt="" />
</div>
<div className="col-md-4 col-lg-3 col-12">
<img src={glow10} alt="" />
</div>
</div>

<div className='mb-4 bann w-100'>
    <img src={banner4} alt="" width='100%'/>
</div>

<div className='mb-4 bann w-100'>
    <img src={banner5} alt="" width='100%' />
</div>

<div className='bann mb-5 w-100'>
    <img src={banner6} alt="" width='100%' />
</div>

<hr/>
</>
  
)
}

export default Fifth