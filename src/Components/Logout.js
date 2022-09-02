import React, {useState} from 'react';
import "./Login.css"
const Logout = () => {

    return (
        <div>
            <h1>
                Welcome <span className="user_name">Geeth</span>
                <button className="logout_button"> Log out</button>
            </h1>
        </div>
    )
}
export default Logout
