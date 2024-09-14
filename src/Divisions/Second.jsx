import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from 'react-bootstrap';
import ban3 from '../assets/ban3.webp'
import './Second.css'

function Second() {
    // const options = {
    //     items: 4.6, // Adjust the number of items displayed
    //    dots: false, // Hide pagination dots
    //   nav:true,
    //    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Customize the navigation arrows
    //  }

    const options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2,
            nav: true,
            loop:false,
            dots:false
          },
          600: {
            items: 4,
            nav: false,
            loop:false
            ,dots:false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false,
           dots:false
          },
        },
      };
  return (
  <>
  <OwlCarousel className='owl-theme' loop nav {...options}>

        
    <Card className='product me-4' style={{ border:'none',height:'340px'}} >
      <Card.Img variant="top" src="../assets/item1.webp" className='image'/>
      <Card.Body>
        <div className='free bie'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
         Aqualogica Radiance+Dewy Sunscreen with ...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
        
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card style={{height:'340px' ,border:'none'}}  className='me-4 product'>
    <Card.Img variant="top" src="../assets/item2.avif" className='image' />
      
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
        Lakme Lumi Cream Face Cream with moisturiser.. .
         <h6 className='mt-2'>&#8377; 293 &nbsp; <span className='span'><strike>&#8377; 325</strike></span><span className='off'>&nbsp;10% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{height:'340px' ,border:'none'}}  className='me-4 product'>
    <Card.Img variant="top" src="../assets/item3.webp"  className='image'/>
      
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
        Jaquline Usa 3 in 1 Daily skin Brightening wipes
         <h6 className='mt-2'>&#8377; 98 &nbsp; <span className='span'><strike>&#8377; 150</strike></span><span className='off'>&nbsp;35% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{height:'340px' ,border:'none'}}  className='me-4 product'>
    <Card.Img variant="top" src="../assets/item4.webp" className='image' />
   

      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
        The Derma Co, 10% Salicylic Acid  Face Serum
         <h6 className='mt-2'>&#8377; 571 &nbsp; <span className='span'><strike>&#8377; 649</strike></span><span className='off'>&nbsp;12% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ height:'340px' ,border:'none'}} className='me-4 product'>
    <Card.Img variant="top" src="../assets/item9.webp"  className='image'/>
     
      <Card.Body>
        <div className='free '>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
        Mamaearth Vitamin C Daily Glow Face Wash
         <h6 className='mt-2'>&#8377; 229 &nbsp; <span className='span'><strike>&#8377; 249</strike></span><span className='off'>&nbsp;8% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>
   
    
      
          
          <Card style={{height:'340px' ,border:'none'}} className='me-4 product' >
          <Card.Img variant="top" src="../assets/item.webp" className='image' />
    
      <Card.Body>
        <div className='free '>
   

        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
        Jaquline Vitamin C Glow Sheet Mask
         <h6 className='mt-2'>&#8377; 99 &nbsp; <span className='span'><strike>&#8377; 130</strike></span><span className='off'>&nbsp;7% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{height:'340px' ,border:'none'}}  className='me-4 product'>
    <Card.Img variant="top" src="../assets/item5.webp" className='image' />
      
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
     Loreal Excellence No Ammonia Rich Hair Color
         <h6 className='mt-2'>&#8377; 571 &nbsp; <span className='span'><strike>&#8377; 650</strike></span><span className='off'>&nbsp;17% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{height:'340px' ,border:'none'}}  className='me-4 product'>
    <Card.Img variant="top" src="../assets/item8.webp"  className='image'/>
    
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
         Aqualogica Radiance+Dewy Sunscreen with ...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{height:'340px' ,border:'none'}}  className='me-4 product'>
    <Card.Img variant="top" src="../assets/item9.webp"  className='image'/>
      
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
        Mamaearth Vitamin C Daily Glow Face Wash
         <h6 className='mt-2'>&#8377; 229 &nbsp; <span className='span'><strike>&#8377; 249</strike></span><span className='off'>&nbsp;8% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ height:'340px' ,border:'none'}} className='product'>
    <Card.Img variant="top" src="../assets/item8.webp"  className='image'/>
     
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text'>
         Aqualogica Radiance+Dewy Sunscreen with...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off' >&nbsp;13% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


   
</OwlCarousel>

<div style={{height:'150px'}} className='ban3'>
   <img src={ban3} alt=""  height='100%' width='100%' className='banner mt-4 mb-4'/>
</div>

 </>
  )
}

export default Second