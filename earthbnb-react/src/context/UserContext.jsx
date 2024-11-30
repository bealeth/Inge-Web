import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado del usuario { email, role }

    const login = (email, role) => {
        setUser({ email, role });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
