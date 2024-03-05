import React, {useState} from 'react'

const ContextoAgregarCliente = React.createContext();

const createClient = ({children}) => {
    const [newClient, setNewClient]= useState();
    return ( 
        <>
    <ContextoAgregarCliente.Provider value={{newClient, setNewClient}}>
        {children}
    </ContextoAgregarCliente.Provider>
    </> 
    
    
    );
}
 
export default createClient;