import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App