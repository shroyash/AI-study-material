import Image from 'next/image'
import React from 'react'

const Welcome = () => {
  return (
    <div className='dashboardWelcome flex  space-x-2 bg-primary border rounded-sm shadow-sm px-2 py-6 mx-2 '>
        <Image src="/img/laptop.jpg" alt="laptop" width={80} height={50}/>
        <div className="text  ">
            <p className='text-3xl mx-3 font-bold mt-2 text-white'>Hello,Guest</p>
            <p className='text-white mx-3'>Welcome Back, its time to get and start learning new courses</p>
        </div>

        
    </div>
  )
}

export default Welcome