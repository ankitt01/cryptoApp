import React from 'react'
import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='bg-[#1B1C1F] w-1/5 h-screen p-4'>
      <div className='flex items-center' >
          <img className='w-10 h-10 m-4' src="/images/logo.png" alt="logo" />
          <NavLink to="/" className='text-white text-2xl'>Cryptoverse</NavLink>
      </div>
      <nav className='flex flex-col mt-4'>
        <NavLink activeClassName="active-link" className='hover:bg-[#313334] rounded-2xl  p-3 text-sm my-2 flex items-center text-gray-300' exact to="/"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>Home</NavLink>  
        <NavLink activeClassName="active-link" className='hover:bg-[#313334] rounded-2xl  p-3 text-sm my-2 flex items-center text-gray-300' to="/cryptocurrencies"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>Cryptocurrencies</NavLink>  
        <NavLink activeClassName="active-link" className='hover:bg-[#313334] rounded-2xl  p-3 text-sm my-2 flex items-center text-gray-300' to="/exchanges"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Exchanges</NavLink>  
        <NavLink activeClassName="active-link" className='hover:bg-[#313334] rounded-2xl  p-3 text-sm my-2 flex items-center text-gray-300' to="/news"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>News</NavLink>  
      </nav>
    </div>
  )
}

export default Navbar