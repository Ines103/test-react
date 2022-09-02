import React from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Weather from './pages/Weather';
import ErrorPage from './pages/ErrorPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Hero from './components/Hero'

import './App.css';


function App() {
  return (
    
    <Router>
      <Header />
      {/* <Hero /> */}

      <Routes>

        < Route path="/" element = {<Login />} />
        < Route path="/login" element = {<Login />} />
        < Route path="/register" element = {<Register />} />
        < Route path="/products" element = {<Products />} />
        < Route path="/products/create" element = {<AddProduct />} />
        < Route path="/products/update/:id" element = {<UpdateProduct />} />
        < Route path="/weather" element = {<Weather />} />
        < Route path="*" element = {<ErrorPage/>} />
       
      </Routes>
    </Router>
    
  );
}

export default App;
