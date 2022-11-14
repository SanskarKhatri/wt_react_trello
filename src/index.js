import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/home" element={<App />} />
        <Route exact path="/workspaces" element={<App />} />
        <Route exact path="/settings" element={<App />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
