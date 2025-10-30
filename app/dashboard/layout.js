import React, { Children } from 'react'
import Side_bar from './side_bar';


export default function Dashboardlayout({children}){
  return (
    <div className='w-screen min-h-screen bg-white flex' >
         <Side_bar/>
         <div>
        {children}
         </div>
    </div>
  );
}


