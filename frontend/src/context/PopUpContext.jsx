import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
    return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <PopupContext.Provider value={{ isOpen, openPopup: togglePopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );
};

