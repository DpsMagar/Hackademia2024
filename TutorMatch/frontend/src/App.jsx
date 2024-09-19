import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout';
import Login from '../Components/Login';
import HomePage from '../Components/HomePage';
import About from '../Components/About';
import Logout from '../Components/Logout';
import MainPage from '../Components/MainPage';
import Register from '../Components/Register';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Layout><Login/></Layout>} /> 
                <Route path="/register" element={<Layout><Register/></Layout>} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/about" element={<Layout><About/></Layout>}/>
                <Route path="/home" element={<Layout><MainPage/></Layout>}/> 
            </Routes>
        </Router>
    );
}

export default App;