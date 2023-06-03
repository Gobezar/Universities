import React from 'react'
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage'  
import ItemCountry from './pages/ItemCountry/ItemCountry';

const AppRouter = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path="/country/:country" element={<ItemCountry />} />

        </Routes>
    </div>
  )
}

export default AppRouter;