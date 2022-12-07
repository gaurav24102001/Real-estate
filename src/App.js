import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MoveInDropdown from './components/MoveInDropdown';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='mx-auto bg-white'>
      <Header />
      {/* <MoveInDropdown/> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
