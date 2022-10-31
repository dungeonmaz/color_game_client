import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ColorGame from './components/colors/ColorGame'
import Navbar from './components/Navbar'
import Home from './components/home/Home'

const App = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  useEffect(() => {
    fetch("")
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/guess_color_name' element={<ColorGame matches={matches} />} />
          <Route path='/scores' element={<div />} />
          <Route path='/profile' element={<div />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App