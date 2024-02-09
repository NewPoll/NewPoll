import './App.css';
import Home from'./pages/Home.js'
import Register from'./pages/Register.js'
import Login from'./pages/Login.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/> 
        <Route path="/login" element={<Login />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
