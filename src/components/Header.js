import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('context', user);
    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch((error) => {
            console.error('error', error);
        });
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/order' className="btn btn-ghost normal-case text-xl">Order</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email?
                    <button onClick={handleSignOut} className="btn btn-sm ml-5">Log Out</button>
                    :<Link to='/login' className="btn btn-ghost normal-case text-xl">Log in</Link>
                }
            </div>
        </div>
    );
};

export default Header;