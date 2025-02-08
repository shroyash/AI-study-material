import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Welcome from './Welcome'


function DashboardHeader() {
  return (
    <div className='navbarDashboar'>
     <div className="flex justify-end p-6 ">
<UserButton/>
</div>
<Welcome/>



    </div>
  )
}

export default DashboardHeader
