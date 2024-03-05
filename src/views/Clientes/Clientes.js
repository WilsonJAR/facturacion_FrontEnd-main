import React from 'react';
import TableClient from './TableClient';
import './styles/Clientes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';



const Clientes = () => {

    return(
    
        <div className='Clientes'>
            <div>
                
                <h1><FontAwesomeIcon icon={faUserFriends}/> Clientes</h1>
            </div>
            <div className='Clientes__table'>
                <TableClient/>
            </div>
        </div>  
        
     );
}
 
export default Clientes;