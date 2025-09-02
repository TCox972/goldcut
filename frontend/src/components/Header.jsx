import React from 'react'
import { assets } from '../assets/assets'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

  return (
    <header
      className="relative h-screen bg-cover bg-position-[center_bottom] flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.salon_sombre})` }}
    >
      {/* Overlay foncé */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/30 to-black/85"></div>

      {/* Contenu */}
        <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl sm:text-8xl text-primary tracking-widest font-bold text-shadow-lg/40">CHRISTOPHER</h1>
            <p className="mt-4 text-7xl tracking-widest font-semibold text-shadow-lg/40">GOLD CUT</p>
            <button onClick={()=>navigate('reservation')} className='text-xl bg-black/50 mt-8 py-3 px-8 border-primary border-3 cursor-pointer tracking-wider'>
                  Réserver votre place
            </button>
          </div>
          
          <div className='bg-dark absolute bottom-0 left-0 w-[65%] h-30 flex gap-20 items-center text-light text-m pl-30'>
              <a href='tel:+596696301933' className='flex items-center gap-4'>
                  <Icon className='text-primary' icon="ri:phone-fill" width="24" height="24" />
                  <div className='flex flex-col gap-1'>
                      <p>+596 696 10 20 30</p>
                      <p className='text-gray-400 text-sm'>Téléphone</p>
                  </div>
              </a>
              <a href='https://www.google.com/maps?q=GOLD+CUT+2+Impasse+de+la+Sablière+Ducos+97224+Martinique' rel='noopener noreferrer' target='blank' className='flex items-center gap-4'>
                  <Icon className='text-primary' icon="wpf:geo-fence" width="24" height="24" />
                  <div className='flex flex-col gap-1'>
                      <p>Impasse de la sablière</p>
                      <p className='text-gray-400 text-sm'>97224 DUCOS</p>
                  </div>
              </a>
              <div className='flex items-center gap-4'>
                  <Icon className='text-primary' icon="bytesize:clock" width="24" height="24" />
                  <div className='flex flex-col gap-1'>
                      <p>Du Mardi au Samedi</p>
                      <p className='text-gray-400 text-sm'>9h30 - 18h00</p>
                  </div>
              </div>
          </div>
          <div className='bg-primary absolute bottom-0 right-0 w-[35%] h-22 flex items-center text-dark pl-10 gap-8'>
              <Icon icon="cib:instagram" width="32" height="32" />
              <Icon icon="cib:facebook-f" width="32" height="32" />
              <Icon icon="cib:whatsapp" width="32" height="32" />
          </div>
    </header>
  );
};

export default Header