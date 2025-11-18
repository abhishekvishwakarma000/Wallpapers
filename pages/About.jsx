import React from 'react'
import { Link } from 'react-router-dom'
const about = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-indigo-800/50 to-white flex flex-col justify-center items-center gap-4 lg:gap-6">
        <h1 className='text-[10vw] lg:text-7xl font-bold'>About luxyWalls</h1>
        <p className='w-[85%] text-center lg:w-[50%] font-bold'>Welcome to LuxyWalls! 🌟 We bring you fresh, high-quality wallpapers from the Lorem Picsum API to make your devices look stunning every day. Explore, enjoy, and brighten up your screens! </p>
          <Link to="/" className="mt-4 px-6 py-2 bg-black text-white rounded ">Go Back Home</Link>
      </div>

    </>
  )
}

export default about