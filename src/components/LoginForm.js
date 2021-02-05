import { useState } from "react";
import { useAuth } from "../hooks";

const LoginForm = ({props}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const { Login, Logout } = useAuth();

    const handleLogin = (event) => {
        event.preventDefault();
        Login(username, password)
    }

    const handleLogout = (event) => {
        Logout();
    }

    return (
        <div>
            <form className="LoginForm" onSubmit={handleLogin} >
                <input 
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    placeholder='Username'
                />
                <br />
                <input 
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder='Password'
                />
                <br />
                <input type='submit' 
                    value="Login"
                />
            </form>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
};

export default LoginForm;