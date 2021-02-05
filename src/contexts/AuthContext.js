import { createContext } from "react";

const AuthContext = createContext({
    user: null,
    Login: () => {},
    Logout: () => {}
});
AuthContext.displayName = 'AuthContext';

export default AuthContext;