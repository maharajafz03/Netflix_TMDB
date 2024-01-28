import React from 'react'
import Navbar from './Components/Navbar'
import { Route } from 'react-router-dom'
import Routing from './routes/Routing'

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />

    </>
  )
}

export default App