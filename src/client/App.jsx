import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Header from './Header';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import Leaderboard from './pages/leaderboard/Leaderboard';
import { CreateProfile } from './pages/register/CreateProfile';
import Signup from './pages/forms/Signup';
import SignIn from './pages/forms/SignIn';
import Forum from './pages/forum/Forum';

import '../client/styles/app.css';

export const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    return (
        <div className="app">
            <Header user={user} />
            <LeftMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/create-profile"
                    element={
                        <CreateProfile
                            token={token}
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/signup"
                    element={<Signup setToken={setToken} setUser={setUser} />}
                />
                <Route
                    path="/signin"
                    element={<SignIn setToken={setToken} setUser={setUser} />}
                />
                <Route
                    path="/forum"
                    element={<Forum token={token} user={user} />}
                />
                <Route
                    path="/leaderboard"
                    element={<Leaderboard token={token} user={user} />}
                />
            </Routes>
            <Footer />
        </div>
    );
};
