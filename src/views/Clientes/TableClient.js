import React, {useState} from 'react';
import {usePerson} from './../../utils/hooks/usePersons';
import './styles/TableClient.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDeletClient} from '../../utils/hooks/useUpdatePerson';
import Modal from '../../components/modal/Modal';
import Formulario from '../../components/Forms/Formulario';


const TableClient = () => {
const [filter, setFilter] = useState('');
const [modal1 , setModal1] = useState(false);
const persona = usePerson();
const [deletePersona] = useDeletClient();



if (persona.loading) return(<h1>cargando...</h1>)

const deletePerson = (id) => {
    deletePersona(
        {variables:{idPersona:id}}
    );  
}

    return ( 
    <div>

    <div className='tableClient__header'>
        <div className='tableClient__search'>
            <FontAwesomeIcon className='searchIcon' icon={faSearch}/>
            <input type='search' placeholder='nombre...' value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
        </div>

        <div className='tableClient__header--buttons'>
            <button onClick={()=>{setModal1(!modal1)}}>Anadir <FontAwesomeIcon icon={faPlus}/></button>
        </div>

        <Modal estado={modal1} setEstado={setModal1} encabezado={'Clientes'}>
            <Formulario/>
        </Modal>
    </div>
    <table className='tableClient' cellSpacing={0}>
        <thead className='tableClient__head'>
            <tr>
                <th>Codigo</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Sexo</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody className='tableClient__body'>
              { persona.data.personas.filter(persona=>persona.nombres.toLowerCase().includes(filter)).map((persona)=>(
                    <tr key={persona.id}>
                        <td>{persona.id}</td>
                        <td>{persona.nombres}</td>
                        <td>{persona.apellidos}</td>
                        <td>{persona.sexo}</td>
                        <td><FontAwesomeIcon icon={faTrash} onClick={()=>{deletePerson(persona.id)}} style={{color:'red', cursor:'pointer'}}/></td>
                        <td><FontAwesomeIcon icon={faEdit} style={{color:'blue', cursor:'pointer'}}/></td>
                    </tr>
                ))}
            
        </tbody>
    </table>
    </div>
     );
}
 
export default TableClient;