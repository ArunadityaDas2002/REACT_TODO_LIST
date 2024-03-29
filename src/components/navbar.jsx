import React from 'react'

const Navbar = () => {
    return (
      <>
        <div className='flex justify-between mx-0 items-center bg-lime-700 text-white py-2 px-4 min-w-full h-16'>
          <div className="logo flex items-center">
            <span className='font-bold text-xl'>A-Task</span>
          </div>
          <div className="logo flex items-center">
            <span className='text-xl'>YOUR TODO-LIST</span>
          </div>
          <ul className="flex gap-8">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
          </ul>
        </div>
        </>
      )
      
}

export default Navbar