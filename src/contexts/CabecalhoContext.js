import React, {createContext,useContext,useState} from 'react'

const CabecalhoContext = createContext();

export function useCabecalhoContext(){
    return useContext(CabecalhoContext);
}

export function CabecalhoContextProvider({children}){
    const [isVisible,setVisible] = useState(true);

    function removeVisibility(){
        setVisible(false);
    }

    function activateVisibility(){
        setVisible(true);
    }

    return(
        <CabecalhoContext.Provider
        value={{
            removeVisibility,
            activateVisibility,
            isVisible
        }}
        >
            {children}
        </CabecalhoContext.Provider>
    )
}