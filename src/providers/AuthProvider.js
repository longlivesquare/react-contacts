import { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";

const authy = {
    username: 'bob',
    password: '123'
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(user === null ) {
            console.log("User not set");
        } else {
            console.log(user + " logged in");
        }
    },[user]);

    const Login = (username, password) => {
        if (username === authy.username && password === authy.password) {
            console.log("Setting user to logged in")
            setUser(username);
        }
    }

    const Logout = () => {
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ user, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;