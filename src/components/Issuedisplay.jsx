import React from 'react'
import down from '../components/download.png'
import issue from '../constant'
const Issuedisplay = () => {
  return (
    <div className='h-[500px] w-[300px]  rounded-lg shadow-lg' >
        <img src={down} className='w-[300px]' />
       {
        issue.map(item=>{
            return(
                <h1 className='mb-3 mt-3' key={item} >{item}:{}</h1>
            )
        })
       }
    </div>
  )
}

export default Issuedisplay