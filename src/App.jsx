import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Weather from './components/Weather'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Weather/>}>

      </Route>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
