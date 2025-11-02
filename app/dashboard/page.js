import React from 'react'
import Side_bar from './side_bar'

const dashboard_page = () => {
  return (
    <div className="w-full text-zinc-700" >
        <div className=' text-2xl ml-10 md:text-4xl  font-bold md:ml-50 mt-20' >
              Welcome to the <p className='text-blue-500' >DashBoard</p> 
        </div>
        <div className=' text-xl ml-10 md:text-2xl font-medium md:ml-50 mt-3' >
            You’re in the dashboard of Portfolio Website.
        </div>
        
    </div>
  )
}

export default dashboard_page
