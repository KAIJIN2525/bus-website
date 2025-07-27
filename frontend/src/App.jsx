import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer'
import Home from './pages/Home/Home';
import Bus from './pages/Bus/Bus';
import Details from './pages/Bus/Details';
import Checkout from './pages/Checkout/Checkout';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bus' element={<Bus />} />
            <Route path='/bus/bus-details/:id' element={<Details />} />
            <Route path='/bus/bus-details/checkout' element={<Checkout />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
