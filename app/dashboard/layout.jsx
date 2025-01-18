import React from 'react'
import Sidebar from './_components/Sidebar'

const layout = ({children}) => {
  return (
    <div>
      <Sidebar/>
        {children}
  
      
    </div>
  )
}

export default layout
