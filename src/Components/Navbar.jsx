import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link to= "/">
        <h1 className='uppercase text-red-500 font-nsans-bold cursor-pointer text-5xl'>NETFLIX</h1>
      </Link>

      <div  >
        <Link to="/login">
          <button className=' capitalize pr-4' >login</button>
        </Link>
      </div>

      <div>
        <Link to="/signup">
          <button className='capitalize bg-red-500 px-6 py-2 rounded-lg cursor-pointer hover:bg-red-400'>signup</button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar



//3c0422e151e86e096369ec9e867fb332