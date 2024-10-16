import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Customer from './view/customer';
import Admin from './view/admin';
import Search from './view/search';
import Login from './backend/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search/>} />
      <Route path="/customer" element={<Customer/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
