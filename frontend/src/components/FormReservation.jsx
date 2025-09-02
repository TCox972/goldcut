import React from 'react'

const FormReservation = () => {
  return (
    <div className='bg-dark border-primary border-2 w-[75%] h-[70vh] flex items-center justify-center mb-30'>
        <div className='border-primary border-2 w-[99%] h-[98%] grid grid-cols-3 py-15'>
              {/*Left Side*/}
              <div></div>

              {/*Right Side*/}
              <div className='col-span-2 flex flex-col justify-center'>
                  <p className='text-3xl font-medium tracking-wide mb-10'>Complétez le formulaire :</p>
                  <div className='grid grid-cols-2'>
                      <div className='pr-15'>
                          <p className='text-primary font-extralight'>Prénom</p>
                          <input className='border h-13 border-zinc-300 w-full p-2 mt-1 mb-4' type="text" />
                          <p className='text-primary font-extralight'>Téléphone</p>
                          <input className='border h-13 border-zinc-300 w-full p-2 mt-1 mb-4' type="text" />
                          <p className='text-primary font-extralight'>Prestation</p>
                          <input className='border h-13 border-zinc-300 w-full p-2 mt-1' type="text" />
                      </div>
                      <div className='pr-15'>
                          <p className='text-primary font-extralight'>Email</p>
                          <input className='border h-13 border-zinc-300 w-full p-2 mt-1 mb-4' type="email" />
                          <p className='text-primary font-extralight'>Date et heure</p>
                          <input className='border h-13 border-zinc-300 w-full p-2 mt-1 mb-4' type="text" />
                          <p className='text-primary font-extralight'>Type</p>
                          <input className='border h-13 border-zinc-300 w-full p-2 mt-1' type="text" />
                      </div>
                  </div>
                  <button className='text-3xl font-semibold text-darkest w-[92%] mt-4 py-3 bg-gradient-to-tr from-primary via-light to-primary'>RESERVER MAINTENANT</button>
              </div>
        </div>
    </div>
  )
}

export default FormReservation