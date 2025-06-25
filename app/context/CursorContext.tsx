'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CursorContextType {
    isCursorVisible: boolean;
    setCursorVisible: (isVisible: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
    const [isCursorVisible, setCursorVisible] = useState(true);

    return (
        <CursorContext.Provider value={{ isCursorVisible, setCursorVisible }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => {
    const context = useContext(CursorContext);
    if (context === undefined) {
        throw new Error('useCursor must be used within a CursorProvider');
    }
    return context;
}; 