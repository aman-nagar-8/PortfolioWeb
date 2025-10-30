import React from 'react'
import Side_bar from './side_bar'

const dashboard_page = () => {
  return (
    <div className="w-full text-zinc-700" >
        <div className='text-4xl font-bold ml-50 mt-20' >
              Welcome to the <p className='text-blue-500' >DashBoard</p> 
        </div>
        <div className='text-2xl font-medium ml-50 mt-3' >
            You’re in the dashboard of Portfolio Website.
        </div>
        
    </div>
  )
}

export default dashboard_page
