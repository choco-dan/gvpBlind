import React, { createContext,useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usermail, setUsermail] = useState(()=>{
        return localStorage.getItem("usermail") || "";
    });

    useEffect(()=>{
        if(usermail){
            localStorage.setItem('usermail', usermail);
        }
    }, [usermail]);

    return (
        <UserContext.Provider value={{ usermail, setUsermail }}>
            {children}
        </UserContext.Provider>
    );
};
