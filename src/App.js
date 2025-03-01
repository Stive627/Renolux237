import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Renolux from './pages/Renolux'
import Login from './pages/Login'
import Register from './Register/Register'
import Admin from "./pages/Admin";
import RecoverPassword from "./RecoverPassword/RecoverPassword";
import Media from "./Medias/Media";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Renolux/>}/>
        <Route path="/recoverPassword" element={<RecoverPassword/>}/>
        <Route path="/adminMedia" element={<Media/>}/>
      </Routes>
    </Router>
  );
}

export default App;
