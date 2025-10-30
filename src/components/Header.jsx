import React from 'react'

function Header() {
  return (
    <nav className='flex justify-between text-white bg-cyan-700 items-center'>
        <h1 className='p-7 font-bold text-3xl cursor-pointer'>
        LibraSphere
        </h1>
        <ul className='flex text-[18px] mr-8'>
            <li className="ml-5 cursor-pointer">Home</li> 
            <li className="ml-5 cursor-pointer">Browse Books</li>
            <li className="ml-5 cursor-pointer">Add Book</li>
        </ul>
    </nav>
  )
}

export default Header