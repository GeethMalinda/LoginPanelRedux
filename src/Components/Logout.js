import React from 'react';
import './LogOut.css';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectUser} from '../features/userSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div className='logout' >
            <h1>
                Welcome <span className="user_name">{user.name}</span>

            </h1>
            <button className="logout_button" onClick={(event => handleLogOut(event))}> Log out</button>
        </div>
    );
};
export default Logout;
