import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Renolux from './pages/Renolux'
import Login from './pages/Login'
import Register from './Register/Register'
import Admin from "./pages/Admin";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Renolux/>}/>
      </Routes>
    </Router>
  );
}

export default App;
