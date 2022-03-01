import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Header from './Header';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import Leaderboard from './pages/leaderboard/Leaderboard';
import CreateProfile from './pages/register/CreateProfile';
import CreateUser from './pages/register/CreateUser';
import Login from './pages/login/Login';
import Forum from './pages/forum/Forum';

import '../client/styles/app.css';

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('');

    useEffect(() => {
        localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [isLoggedIn]);

    //second useEffect for fetchUser if needed

    return (
        <div className="app">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <LeftMenu />
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} />
                <Route
                    path="/register/profile"
                    element={
                        <CreateProfile
                            token={token}
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/register/user"
                    element={
                        <CreateUser 
                            setToken={setToken} 
                            setUser={setUser} 
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login 
                            setToken={setToken} 
                            setUser={setUser} 
                        />}
                />
                <Route
                    path="/forum"
                    element={
                    <Forum 
                        token={token} 
                        user={user} 
                    />}
                />
                <Route
                    path="/leaderboard"
                    element={
                        <Leaderboard 
                            token={token} 
                            user={user} 
                        />
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
};
