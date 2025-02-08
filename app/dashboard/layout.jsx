import React from 'react'
import Sidebar from './_components/Sidebar'
import DashboardHeader from './_components/DashboardHeader'

const layout = ({children}) => {
  return (
    <div>
      <header>
        <div className="md:w-64 hidden md:block fixed ">
        <Sidebar/>
        </div>

        <div className='md:ml-64 shadow-sm bg-white'>
        <DashboardHeader/>

        </div>
      
  
      </header>
   
        {children}
  
      
    </div>
  )
}

export default layout
