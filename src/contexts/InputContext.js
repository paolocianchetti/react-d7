import React, { useState, createContext } from 'react';

export const Input = createContext();

const InputContext = ({ children }) => {
    const [query, setQuery] = useState('');

    return (
        <Input.Provider value={{ query, setQuery }}>
            {children}
        </Input.Provider>
    );
};

export default InputContext;