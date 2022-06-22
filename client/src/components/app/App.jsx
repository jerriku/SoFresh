import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../form/Login';
import Register from '../form/Register';
import Home from '../main/homepage/Home';
import '../form/style.css';

export default function App() {
    const [registered, setRegistered] = useState(false);

    function loginForm() {
        return (
            <>
            <button id="skip-btn" onClick={() => document.location.href = '/home-page'}>Skip</button>
            <div className="login-form">
                <Login />
                <button id="su-btn" className="input-btn" onClick={() => setRegistered(!registered)}>Sign up</button>
            </div>
            </>
        )
    }

    function registerForm() {
        return (
            <>
            <button onClick={() => setRegistered(!registered)}>back</button>
            <div className="register-form">
                <Register />
            </div>
            </>
        )
    }

    return (
        <Router>
            <Routes>
                <Route 
                    path="/"
                    element=
                    {
                        !registered ? loginForm() : registerForm()
                    }
                />
                <Route path="home-page" element={<Home />}/>
            </Routes>
        </Router>
    );
}