import React from 'react'
import Header from '../components/Header'
import { assets } from '../assets/assets'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import FormReservation from '../components/FormReservation'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Header />
      {/* Les prestations */}
      <div className='bg-darkest text-light flex flex-col items-center'>
        <h2 className='my-30 text-5xl font-bold tracking-wider'>NOS PRESTATIONS</h2>
        <div className='grid grid-cols-3 gap-20 mb-20'>
          <div onClick={()=>navigate('prestations')} className='w-[312px] h-[372px] border-primary border-1 flex items-center justify-center shadow-islight bg-dark/50 cursor-pointer'>
            <div className='flex flex-col w-[300px] h-[360px] items-center justify-center border-primary border-1 py-6 px-4'>
              <img className='w-[64px] h-[64px] rotate-315 my-4' src={assets.tondeuse} alt="" />
              <p className='text-primary my-3 text-2xl font-semibold'>COUPES</p>
              <p className='text-lg font-light'>Coupes et contours.<br />Simples et dégradés</p>
            </div>
          </div>
          <div onClick={()=>navigate('prestations')} className='w-[312px] h-[372px] border-primary border-1 flex items-center justify-center shadow-islight bg-dark/50 cursor-pointer'>
            <div className='flex flex-col w-[300px] h-[360px] items-center justify-center border-primary border-1 py-6 px-4'>
              <img className='w-[64px] h-[64px]  my-4' src={assets.shampoo} alt="" />
              <p className='text-primary my-3 text-2xl font-semibold'>SOINS</p>
              <p className='text-lg font-light'>Coupes et contours.<br />Simples et dégradés</p>
            </div>
          </div>
          <div onClick={()=>navigate('prestations')} className='w-[312px] h-[372px] border-primary border-1 flex items-center justify-center shadow-islight bg-dark/50 cursor-pointer'>
            <div className='flex flex-col w-[300px] h-[360px] items-center justify-center border-primary border-1 py-6 px-4'>
              <img className='w-[64px] h-[64px] rotate-90 my-4' src={assets.rasoir} alt="" />
              <p className='text-primary my-3 text-2xl font-semibold'>BARBE</p>
              <p className='text-lg font-light'>Coupes et contours.<br />Simples et dégradés</p>
            </div>
          </div>
        
        </div>
      </div>

      {/* La gallerie */}
      <div className='relative grid grid-cols-3 py-20 bg-darkest'>
        <div className="absolute inset-0 bg-gradient-to-b from-darkest/50 via-transparent to-darkest/50"></div>
        <img src={'./images/photo1.png'} alt="" />
        <img src={'./images/photo2.png'} alt="" />
        <img src={'./images/photo3.png'} alt="" />
        <img src={'./images/photo6.png'} alt="" />
        <img src={'./images/photo4.png'} alt="" />
        <img src={'./images/photo5.png'} alt="" />
      </div>

      <div className='bg-light mb-15 text-darkest flex flex-col items-center'>
        <h2 className='my-30 text-5xl font-bold tracking-wider'>LE SALON</h2>
        <div>
            <p className='text-center text-4xl tracking-wide font-medium mb-20'>Plus qu'un simple salon, un lieu ou l'on prend soin de votre visage.</p>
            <p className='text-center text-2xl font-light mb-20'>Nous choisissons nos élixirs et nos shampooings avec minutie. <br />
            Nous faisons de votre bien-être notre priorité. Nos soins sont adaptés à chaque type de cheveux. <br />
            Dans notre salon, vous serez pris en charge et sublimé.</p>
        </div>

        <div className='flex gap-5 items-center'>
          <Icon className='text-primary' icon="mdi:star" width="32" height="32" />
          <h3 className='text-4xl font-semibold tracking-wide'>Nos marques</h3>
          <Icon className='text-primary' icon="mdi:star" width="32" height="32" />
        </div>
        
        <div className='flex my-15 gap-45'>
          <img className='w-[240px]' src={assets.marque1} alt="" />
          <img className='w-[240px]' src={assets.marque2} alt="" />
          <img className='w-[240px]' src={assets.marque3} alt="" />
        </div>
      </div>

      {/* Formulaire réservation */}
      <div className='bg-darkest text-light flex flex-col items-center'>
        <h2 className='my-30 text-5xl font-bold tracking-wider'>PRENDRE RDV</h2>
        <FormReservation/>
      </div>
    </div>
  )
}

export default Home