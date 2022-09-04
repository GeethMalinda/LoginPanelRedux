import React, {useState} from 'react';
import "./Login.css"
import {useDispatch} from 'react-redux';
import {login} from '../features/userSlice';
const Login = () => {
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [passward ,setPassward] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        dispatch(
            login({
                name:name,
                email:email,
                passward:passward,
                loggedIn:true
            }))
    }

    return (
        <div className="login">
            <form className="login_form" onSubmit={(event => handleSubmit(event))}>
                <h1>Login Here</h1>
                <input type="name"
                       placeholder= "Name"
                       onChange={(event)=> setName(event.target.value)}
                       value={name}
                />
                <input type="email"
                       placeholder= "Email"
                       onChange={(event) => setEmail((event.target.value))}
                       value={email}
                />
                <input type="password"
                       placeholder= "Passward"
                       onChange={(event) =>setPassward(event.target.value)}
                       value={passward}
                />
                <button type='submit'
                        className="submit_btn">
                    Submit button
                </button>
            </form>
        </div>
    )
}
export default Login
