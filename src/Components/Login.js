import React from 'react';

const Login = () => {
    return (
        <div className={login}>
            <form className={login_form}>
                <h1>Login Here</h1>
                <input type="name" placeholder= "Name"/>
                <input type="email" placeholder= "Email"/>
                <input type="password" placeholder= "Passward"/>
            </form>
        </div>
    )
}
export default Login
