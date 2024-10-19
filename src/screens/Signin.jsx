import React from 'react'

const Signin = () => {
  return (
    <div className='bg-[#191e9a] h-screen w-full flex items-center ' >
        <div className='text-white text-center font-font1 w-3/4 py-40 font-bold ' >
            <h1 className='text-6xl mb-10' >Hello</h1>
            <h1 className='text-6xl mb-20' >CBITian</h1>
        </div>
        <div className='w-1/2 shadow-lg rounded-md  h-full bg-white py-36 px-20 ' >
            <h1 className='font-bold text-4xl' >Login</h1>
                <h1 className='font-font1 text-3xl pt-20' >Welcome Back</h1>
            <form action="" className='py-3' >
                <input type='username' placeholder='Username' className='block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 '  />
                <input type='password' placeholder='Password' className='block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 '  />
                <button className='block w-[300px] m-[1px] h-[35px] rounded-sm bg-[#191e9a] text-white hover:bg-white hover:text-black mt-4 ' >Login</button>
                <p className='text-sm text-center mt-5 cursor-pointer ' >Forgot Password?</p>
            </form>
        </div>
    </div>
  )
}



export default Signin