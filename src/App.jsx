import React from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
      <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </div>
    </div>
  )
}

export default App
