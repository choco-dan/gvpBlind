import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usermail, setUsermail] = useState("");

    return (
        <UserContext.Provider value={{ usermail, setUsermail }}>
            {children}
        </UserContext.Provider>
    );
};
