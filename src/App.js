import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './soft/ProtectedRoute'
import Renolux from './pages/Renolux'
import Login from './pages/Login'
import Register from './Register/Register'
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute/>}>
        <Route path="/admin"/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Renolux/>}/>
      </Routes>
    </Router>
  );
}

export default App;
