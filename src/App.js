import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/home/Home'

import TimeGuessGame from './components/games/timeGuess/TimeGuessGame'
import ColorGame from './components/games/guessColorName/guessColorNameGame'

const App = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/guess_color_name' element={<ColorGame matches={matches} />} />
          <Route path='/time_guess' element={<TimeGuessGame matches={matches} />} />
          <Route path='/scores' element={<div />} />
          <Route path='/profile' element={<div />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App