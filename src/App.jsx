import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
 
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
