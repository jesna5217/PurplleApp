import React from 'react'
import './Items.css'

import { Card ,Button, Row, Col} from 'react-bootstrap';

import owl1 from "../assets/itema.webp"
  import owl2 from "../assets/itemb.webp"
  import owl3 from "../assets/itemc.webp"
  import owl4 from "../assets/itemd.webp"

  import owl6 from "../assets/owl6.webp"
  import owl7 from "../assets/owl7.webp"
 
function Items() {
  return (
  <>

  <div className="container-fluid">
 
<div className="row first">
    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">

    <Card style={{ width: '100%',border:'none'}} className='pro  me-4'>
      <Card.Img variant="top" src={owl1} className='image'/>
      <Card.Body className='body'>
        
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text2' >
  Love Beauty and Planet Argan Oil and Sulphate Free...
         <h6 className='mt-2 '>&#8377; 199 &nbsp; <span className='span'><strike>&#8377; 225</strike></span><span className='off' >&nbsp;12% off</span></h6>

<div className="d-flex">
<Button className='button me-2'  style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
<Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>

</div>

        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>

    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">

    <Card style={{ width: '100%',border:'none'}}  className='pro me-4'>
      <Card.Img variant="top" src={owl2} className='image'/>
      <Card.Body className='body'>
       
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
       Fiama Shower Gel Blackcurrant & Bearberry...
                <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
        <div className="d-flex">
        <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        <Button variant="outline-danger" className='heart'><i class="fa-solid fa-heart"></i></Button>
        </div>
        
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">
        
    <Card style={{ width: '100%' ,border:'none'}}  className='pro me-4 '>
      <Card.Img variant="top" src={owl3}  className='image'/>
      <Card.Body className='body'>
        
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
     Lakme Perfect Radiance Brightening Facewash...
     
    
         <h6 className='mt-2'>&#8377; 228 &nbsp; <span className='span'><strike>&#8377; 285</strike></span><span className='off'>&nbsp;20% off</span></h6>
        <div className="d-flex">
        <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
        </div>
</Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">

    <Card style={{ width: '100%',border:'none'}}  className='pro me-4 '>
      <Card.Img variant="top" src={owl4}  className='image'/>
      <Card.Body className='body'>
      
      
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
       Enagage Floral Zest Deodrant for Women...
         <h6 className='mt-2'>&#8377; 275 &nbsp; <span className='span'><strike>&#8377; 350</strike></span><span className='off'>&nbsp;21% off</span></h6>
       <div className="d-flex">
       <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
       <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
       </div>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
{/* </div>

<div className="row"> */}

<div className="col-6 col-md-4 col-lg-3 col-sm-4 products">


          
          <Card style={{ width: '100%' ,border:'none'}} className='pro me-4 ' >
      <Card.Img variant="top" src={owl6}  className='image'/>
      <Card.Body className='body'>
        
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
         Good Vibes De-Tan Glow Night Cream Ubtan Night...
         <h6 className='mt-2'>&#8377; 199 &nbsp; <span className='span'><strike>&#8377; 290</strike></span><span className='off'>&nbsp;30% off</span></h6>
      <div className="d-flex">
      <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
      <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
      </div>
        
        </Card.Text>
      </Card.Body>
    </Card>


</div>

<div className="col-6 col-md-4 col-lg-3 col-sm-4 products">
<Card style={{ width: '100%' ,border:'none'}}  className='pro me-4 '>
      <Card.Img variant="top" src={owl7} className='image' />
      <Card.Body className='body'>
     
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
         NY Bae PRO Strobe Cream | Primer + Highlighter...
         <h6 className='mt-2'>&#8377; 269</h6>
      <div className="d-flex">
      <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
      <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
      </div>
        
        </Card.Text>

      </Card.Body>
    </Card>

</div>

    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">

    <Card style={{ width: '100%',border:'none'}} className='pro  me-4'>
      <Card.Img variant="top" src={owl1} className='image'/>
      <Card.Body className='body'>
        
        <Card.Text style={{ fontFamily: 'sans-serif'}} className='text2' >
        Love Beauty and Planet Argan Oil and Sulphate Free...
         <h6 className='mt-2 '>&#8377; 199 &nbsp; <span className='span'><strike>&#8377; 225</strike></span><span className='off' >&nbsp;12% off</span></h6>

<div className="d-flex">
<Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
<Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>

</div>

        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>

    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">

    <Card style={{ width: '100%',border:'none'}}  className='pro me-4 '>
      <Card.Img variant="top" src={owl2} className='image'/>
      <Card.Body className='body'>
       
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
        Fiama Shower Gel Blackcurrant & Bearberry...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
       <div className="d-flex">
       <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
       <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
       </div>
        
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
    {/* </div>

    <div className="row"> */}

    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">
        
    <Card style={{ width: '100%' ,border:'none'}}  className='pro me-4'>
      <Card.Img variant="top" src={owl3}  className='image'/>
      <Card.Body className='body'>
        
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
        Lakme Perfect Radiance Brightening Facewash...
         <h6 className='mt-2'>&#8377; 228 &nbsp; <span className='span'><strike>&#8377; 285</strike></span><span className='off'>&nbsp;20% off</span></h6>
<div className="d-flex">
<Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
<Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button></div>  
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-6 col-md-4 col-lg-3 col-sm-4 products">

    <Card style={{ width: '100%',border:'none'}}  className='pro me-4 '>
      <Card.Img variant="top" src={owl4}  className='image'/>
      <Card.Body className='body'>
      
      
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
        Enagage Floral Zest Deodrant for Women...
         <h6 className='mt-2'>&#8377; 275 &nbsp; <span className='span'><strike>&#8377; 350</strike></span><span className='off'>&nbsp;21% off</span></h6>
      <div className="d-flex">
      <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart
        
      </Button>
      <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
      </div>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
<div className="col-6 col-md-4 col-lg-3 col-sm-4 products">


          
          <Card style={{ width: '100%' ,border:'none'}} className='pro me-4 ' >
      <Card.Img variant="top" src={owl6}  className='image'/>
      <Card.Body className='body'>
        
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
         Good Vibes De-Tan Glow Night Cream Ubtan...
         <h6 className='mt-2'>&#8377; 199 &nbsp; <span className='span'><strike>&#8377; 290</strike></span><span className='off'>&nbsp;30% off</span></h6>
   <div className="d-flex"> <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
   <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button></div>   
        </Card.Text>
      </Card.Body>
    </Card>


</div>

<div className="col-6 col-md-4 col-lg-3 col-sm-4 products">
<Card style={{ width: '100%' ,border:'none'}}  className='pro me-4 '>
      <Card.Img variant="top" src={owl7} className='image' />
      <Card.Body className='body'>
     
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
         NY Bae PRO Strobe Cream | Primer + Highlighter...
         <h6 className='mt-2'>&#8377; 269</h6>
      <div className="d-flex">
      <Button className='button me-2' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
      <Button variant="outline-danger"  className='heart'><i class="fa-solid fa-heart"></i></Button>
      </div>
        
        </Card.Text>

      </Card.Body>
    </Card>

</div>










</div>










</div>





{/* 





   

   


   

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl5} />
      <Card.Body>
        <div className='free gift'>
        <p>Free pouch</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
        Alps Goodness Beetroot(50g)100% Natura..
         <h6 className='mt-2'>&#8377; 94 &nbsp; <span className='span'><strike>&#8377; 99</strike></span><span className='off'>&nbsp;5% off</span></h6>
         <Button className='button' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl9} />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
       Good Vibes Brightening PeeL-Off Mask 
         <h6 className='mt-2'>&#8377; 249 &nbsp; <span className='span'><strike>&#8377; 268</strike></span><span className='off'>&nbsp;12% off</span></h6>
         <Button className='button' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}} >
      <Card.Img variant="top" src={owl10} />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif'}}  className='text2'>
      POND'S Bright Beauty Serum Cream Spot-less...
         <h6 className='mt-2'>&#8377; 143 &nbsp; <span className='span'><strike>&#8377; 159</strike></span><span className='off'>&nbsp;10% off</span></h6>
         <Button className='button' style={{color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div> */}

       

  </>
  )
}

export default Items