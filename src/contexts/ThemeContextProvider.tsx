import React, { Children, ReactElement, createContext, useState } from "react";
import { ThemeStyle, YIN, YANG } from "../themestyle";

export interface ThemeContextType {
    theme: ThemeStyle,
    setTheme: React.Dispatch<React.SetStateAction<ThemeStyle>> | undefined
}
export const ThemeContext = createContext<ThemeContextType | any>(null);

type ChildrenType = {
    children?: ReactElement | undefined
}
const ThemeContextProvider:React.FC<{ children: ReactElement }> = ({children, ...props}:ChildrenType) => {
    const [theme, setTheme] = useState<ThemeStyle>(YIN);
    const contextValue:ThemeContextType = {
        theme, setTheme
    }
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider

