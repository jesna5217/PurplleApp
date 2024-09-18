import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import login from '../assets/login.webp'
import { useSelector } from 'react-redux';


function Header() {
    //The useSelector hook allows you to extract data from the Redux store in a functional component
const cart=useSelector(state=>state.cartReducer)



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <header className="header">
            <header className='fixed '>

                <div className="content d-flex justify-content-between ">
                    <div className="one">

                        <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1543587824_logo.png" alt="" height='30px' />
                        <p className='fw-bolder '>⭐⭐FLAT Rs. 100 OFF on your first order!⭐⭐</p>
                        <div className='d-flex coupon' style={{ fontWeight: '600' }}><p>Use Code: <span style={{ color: '#cc0f99', fontWeight: '700' }}>APPFIRST</span></p></div>

                    </div>

                    <div className="two d-flex">
                        <div style={{ backgroundColor: '#cc0f99', fontWeight: '700', fontFamily: 'sans-serif' }} className='app'>Download App</div>
                        <div><i class="fa-solid fa-xmark fa-2x ms-3 icon" ></i> </div>

                    </div>
                </div>
            </header>
<header className='white w-100'>
    <div className='second'>
        <Link to='/'>
        <div className="images">
        <img className='img1' src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt="" />
        <img className='img2' src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png" alt="" height='27px' />

        </div>
        </Link>
        <nav className='nav-bar'>
        <ul>
                            <li><a href="" className='effect'>SHOP CATEGORIES</a></li>
                            <li><a href="" className='effect'>BRANDS</a></li>

                            <li><a href="" className='effect'>OFFERS</a></li>
                            <li><a href="" className='effect'>NEW</a></li>
                            <li><a href="" className='effect'>SPLURGE</a></li>
                            <li><a href="" className='effect'>MAGAZINE</a></li>
                            <li><a href="" className='effect'>ELITE OFFER</a></li>

                        </ul>
        </nav>
        <div className="icons ">
        <span className="material-symbols-outlined me-3 effect" style={{ fontWeight: '300' }}>
                            search
                        </span>
                       <Link to='/wishlist' style={{color:'black'}}>
                       <span className="material-symbols-outlined me-3 effect" style={{ fontWeight: '300' }}>
                            favorite
                        </span>
                       </Link>
                 <Link to='/cart' style={{color:'black'}}>
                 <span className="material-symbols-outlined me-3 effect" style={{ fontWeight: '300' ,cursor:'pointer'}}>
                            shopping_cart
                         
                        </span>
                 </Link>


                 <Menu menuButton={ <span className="material-symbols-outlined me-3 effect" style={{ fontWeight: '300' }} >
                            add_reaction
                        </span>} transition>
      <MenuItem className='effect'>My Account</MenuItem>
      <MenuItem className='effect'>Elite Membership</MenuItem>
      <MenuItem className='effect'>My Orders</MenuItem>
      <MenuItem className='effect' onClick={handleShow}>Login Or Register</MenuItem>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
         <img src={login} alt="" width='100%' />
        </Modal.Header>
        <Modal.Body>
            <p className='d-flex justify-content-center align-items-center ' style={{fontSize:'14px',color:'grey'}}>Login or Signup</p>
            <input type="text" placeholder='Enter 10 digit phone number' className='w-100 input' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary w-100" onClick={handleClose} style={{backgroundColor:'lightgray',border:'none'}}>
           CONTINUE
          </Button>
          <div className='d-flex text-center terms' style={{fontSize:'10px',marginRight:'30px',marginLeft:'30px'}}>By creating an account or logging in, you agree to Purplle's 
        Terms of Use and
             Privacy Policy 
            and consent to the collection and use of your personal 
           information/sensitive personal data or information.</div>
         
        </Modal.Footer>
      </Modal>
    </Menu>
                       
        </div>
    </div>
</header>
</header>
        </>
    )
}

export default Header