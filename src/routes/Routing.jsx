import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Pages/Loginpage'
import Profilepage from '../Pages/Profilepage'
import SingUppage from '../Pages/SingUppage'
import Homepage from '../Pages/Homepage'


const Routing = () => {
  return (
   <>
   
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/profile' element={<Profilepage/>} />
        <Route path='/singup' element={<SingUppage/>} />
      </Routes>
   </>
  )
}

export default Routing



