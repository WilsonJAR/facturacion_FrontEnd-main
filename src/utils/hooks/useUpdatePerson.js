import { DELETE_CLIENTES, CREATE_CLIENT } from "../../views/Clientes/data/mutationsClient";
import {useMutation } from "@apollo/client";
import { GET_CLIENTES } from "../../views/Clientes/data/querysClientes";



export const useDeletClient=()=>{
    const deleteClient = useMutation(DELETE_CLIENTES,{refetchQueries: [{query: GET_CLIENTES}]});

    return deleteClient;
    }

export const useCreateClient=()=>{
    const addPerson= useMutation(CREATE_CLIENT,{refetchQueries: [{query: GET_CLIENTES}]});
    return addPerson;
}
