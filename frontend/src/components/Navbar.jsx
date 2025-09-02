import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
      <div className='absolute top-0 left-0 w-full self-center z-50 flex justify-center text-light text-lg py-4 mb-5'>
          <ul className='hidden md:flex mx-[10%] w-full items-center justify-between font-medium'>
              <NavLink to='/'>
                  <li>ACCUEIL</li>
              </NavLink>
              <NavLink to='/prestations'>
                  <li>PRESTATIONS</li>
              </NavLink>
              <NavLink to='/boutique'>
                  <li>BOUTIQUE</li>
              </NavLink>
            <img className='w-[136px] cursor-pointer' src={assets.logo} alt="" /> 
              <NavLink to='/cart' >
                  <li>PANIER</li>
              </NavLink>
              <NavLink to='/reservation'>
                  <li className='text-shadow-primary text-shadow-sm'>PRENDRE RDV</li>
              </NavLink>
                  {
                    token
                      ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <NavLink to='/mon-profil'>
                                <li>MON COMPTE</li>
                            </NavLink>
                          <div className='absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                              <div className=' min-w-48 bg-light border-primary border-2 rounded-md flex flex-col gap-3 py-3 px-3'>
                                  <p onClick={()=>navigate('mon-profil')} className='hover:text-primary cursor-pointer'>Mon Profil</p>
                                  <p onClick={()=>navigate('mon-profil/mes-reservations')} className='hover:text-primary cursor-pointer'>Mes réservations</p>
                                  <p onClick={()=>navigate('mon-profil/mes-achats')} className='hover:text-primary cursor-pointer'>Mes achats</p>
                                  <p onClick={()=>setToken(false)} className='hover:text-primary cursor-pointer'>Se déconnecter</p>
                              </div>
                          </div>
                        </div>
                      
                          : <NavLink to='/login'>
                             <li>SE CONNECTER</li>
                            </NavLink>
                  }
          </ul>
    </div>
  )
}

export default Navbar