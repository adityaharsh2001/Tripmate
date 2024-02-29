import {useState} from 'react'
import Login from './Components/Login'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from "./Components/Register.jsx";
import {Toaster} from 'react-hot-toast';
import Dashboard from "./Components/Dashboard.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
                <Toaster/>
            </Router>
        </>
    )
}

export default App
