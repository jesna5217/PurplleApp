import React from 'react'
import First from '../Divisions/First'
import './Home.css'
import Second from '../Divisions/Second'
import { Link } from 'react-router-dom'
import Third from '../Divisions/Third'
import Fourth from '../Divisions/Fourth'
import ban1 from '../assets/ban1.webp'
import Fifth from '../Divisions/Fifth'
function Home() {
  return (
    <div className='main-container'>
        <First/>
        <img src={ban1} alt=""  height='100px' width='100%' className='banner mt-4 mb-4'/>

   <div  className='text-center heading '><p style={{  fontWeight: 700, fontFamily: '"Manrope", sans-serif',marginBottom:'3px',letterSpacing:'2px'}} className='head'>FEATURED</p>
   <Link to='/items' style={{color:'#6600ff',textDecoration:'none'}}><p style={{ fontWeight: '600',marginTop:'3px' }} className='view' >View ALL <i class="fa-solid fa-arrow-right"></i></p></Link>
   </div>

   <Second/>
   
<Third/>
<Fourth/>
<Fifth/>
    </div>

  )
}

export default Home