import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ventas.css';
const Ventas = () => {
    return ( 
        <div className='venta'>
            <div className='venta__header'>
                <div className='venta__search'>
                    <FontAwesomeIcon icon={faSearch} className='venta__search--icon'/>
                    <input type="search" placeholder="Buscar..."/>
                </div>
            </div>

            <div className='venta__main'>
            <table  className='venta__table'>
                    <thead>
                        <tr>
                            <th>Cod</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        
                     
                    </tbody>
                </table>
            </div>
           
        </div>

     );
}
 
export default Ventas;