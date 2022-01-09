import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';

const App = () => {
  const propsobj = {name:'shashank', age: 31};
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/about" element={<About data ={propsobj} />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact/>} /> 
        </Routes>
      </BrowserRouter>  
    

    </div>
  )
}

export default App

