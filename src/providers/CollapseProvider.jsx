import { createContext, useState } from "react";

export const CollapseContext = createContext();

const CollapseProvider = ({ children }) => {
    const [collapse, setCollapse] = useState(false);
    return <>
        <CollapseContext.Provider value={{ collapse, setCollapse }}>
            {children}
        </CollapseContext.Provider>
    </>
}

export default CollapseProvider;