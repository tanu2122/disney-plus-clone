import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
