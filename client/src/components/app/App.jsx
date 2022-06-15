import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../form/Login';
import Register from '../form/Register';
import Home from '../main/homepage/Home';

export default function App() {
    const [registered, setRegistered] = useState(false);

    function loginForm() {
        return (
            <>
                <Login />
                <button onClick={() => setRegistered(!registered)}>Sign up</button>
            </>
        )
    }

    function registerForm() {
        return (
            <>
                <button onClick={() => setRegistered(!registered)}>back</button>
                <Register />
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