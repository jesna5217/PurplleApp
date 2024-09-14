import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
function Wishlist() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#eee', width: '100%' }}>
    <div className="empty">

        <div>
            <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1669805391_empty-pana-2.png" alt="" />

            <div style={{ fontSize: '14px', fontWeight: '600' }}><p className='mt-5'>There are no items in the wishlist. <br />
                <span style={{ fontSize: '12px', color: 'grey', fontWeight: '400' }}> Let's add some items to the cart to shop</span></p>
            </div>
           <Link to='/'>
           <Button style={{ color: '#5b26f5', fontSize: '15px', border: '1px solid #5b26f5', fontWeight: '600' }} variant="outlined">
           CONTINUE SHOPPING</Button>
           </Link>

        </div>


    </div>
</div>
  )
}

export default Wishlist