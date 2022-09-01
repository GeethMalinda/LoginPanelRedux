import React, {useState} from 'react';

const Login = () => {
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [passward ,setPassward] = useState('');

    return (
        <div className={login}>
            <form className={login_form}>
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
            </form>
        </div>
    )
}
export default Login
