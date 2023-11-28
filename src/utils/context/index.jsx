import { createContext, useState } from "react";

export const CurrentPageContext = createContext()

export const CurrentPageProvider = ({ children }) => {
    const [currentPage, updateCurrentPage] = useState('home')

    return (
        <CurrentPageContext.Provider value={{ currentPage, updateCurrentPage }}>
            { children }
        </CurrentPageContext.Provider>
    )
}