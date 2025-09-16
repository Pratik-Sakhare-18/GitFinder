import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

     
