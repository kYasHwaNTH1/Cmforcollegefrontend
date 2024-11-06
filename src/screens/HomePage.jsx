import React from 'react'
import { useRecoilValue } from 'recoil'
import { firstname } from '../statemag'
const HomePage = () => {
const fn=useRecoilValue(firstname);

  return (
    <>

   
    <div className='h-screen w-full bg-[#10375C] text-white ' >

        <div className='w-3/4  h-full ml-12 py-52 ' >

        <h1 className='font-font2 text-[200px] text-center ml-0' > Welcome
           </h1>
           <h1 className='font-font1 text-2xl ml-28'>

           {
            fn? fn : ''
          }

           </h1>

        <h1 className='font-font1 text-2xl ml-28' >To CBIT's Issue Tracker</h1>
        <h1 className='font-font1 text-xl ml-28 ' >This platform is dedicated to helping students
            <br />
             and faculty report and resolve issues related to CBIT infrastructure and services.</h1>

        </div>


    </div>
    
    </>
  )
}

export default HomePage