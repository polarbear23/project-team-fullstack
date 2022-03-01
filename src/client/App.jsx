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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    //on page load / refresh, token persists but user details stored in state are lost

    useEffect(() => {
        localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    useEffect(() => {
        if (user || !isLoggedIn) return
        //fetchUser from id in token
    }, [isLoggedIn]);

    return (
        <div className="app">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user}/>
            <LeftMenu />
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} />
                <Route
                    path="/register/profile"
                    element={
                        <CreateProfile
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/register/user"
                    element={
                        <CreateUser 
                            setUser={setUser}
                            setIsLoggedIn={setIsLoggedIn} 
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login 
                            setUser={setUser}
                            setIsLoggedIn={setIsLoggedIn} 
                        />}
                />
                <Route
                    path="/forum"
                    element={
                    <Forum 
                        user={user} 
                    />}
                />
                <Route
                    path="/leaderboard"
                    element={
                        <Leaderboard 
                            user={user} 
                        />
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
};
