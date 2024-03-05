import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

const Modal = ({children,estado,setEstado, encabezado}) => {
    return ( 
        <>
        {estado &&
        <div className="modal-content">
            <div className='contenido-modal'>
            <FontAwesomeIcon onClick={()=>{setEstado(!estado)}} className='modal__btnClose' icon={faCircleXmark}/>
            {encabezado &&  
                 <div>
                 <h1>{encabezado}</h1>
                </div>
            }
                {children}
            </div>    
        </div>
        }
        </>
     );
}
 
export default Modal;