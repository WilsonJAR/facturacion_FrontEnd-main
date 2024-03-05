import { useQuery } from "@apollo/client"
import { GET_CLIENTES } from "../../views/Clientes/data/querysClientes"

export const usePerson = ()=>{
    const result = useQuery(GET_CLIENTES);
    return result
}


