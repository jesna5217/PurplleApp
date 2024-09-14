

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Items from './components/Items'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
function App() {
  

  return (
<>
<Header/>

<Routes>
 <Route element={<Home/>} path='/'/>
  <Route  element={<Items/>} path='/items'/>
  <Route element={<Cart/>} path='/cart'/>
  <Route element={<Wishlist/>} path='/wishlist' />
</Routes>
{location.pathname !== '/items' && <Footer />}
      </>
  )
}

export default App
