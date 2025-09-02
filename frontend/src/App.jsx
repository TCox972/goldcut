import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Prestations from './pages/Prestations'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MesAchats from './pages/MesAchats'
import MesReservations from './pages/MesReservations'
import Shop from './pages/Shop'
import Reservation from './pages/Reservation'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='relative'>
      
      <Navbar />

      <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prestations' element={<Prestations />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mon-profil' element={<MyProfile />} />
        <Route path='/mon-profil/mes-achats' element={<MesAchats />} />
        <Route path='/mon-profil/mes-reservations' element={<MesReservations />} />
        <Route path='/boutique' element={<Shop />} />
        <Route path='/boutique:categories' element={<Shop />} />
        <Route path='/mon-profil/panier' element={<Cart />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
      </div>


    </div>
  )
}

export default App