import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contacts from './components/Contacts';




function App() {
  return (
    <Router>
      <nav className='bg-red-500 w-150 flex justify-evenly font-bold m-auto'>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contacts'>contacts</Link>
        <Link to='/service'>service</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        
      </Routes>
      </Router>
  )
}

export default App