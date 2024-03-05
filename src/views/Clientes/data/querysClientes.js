import { gql } from "@apollo/client";
 
const  GET_CLIENTES = gql`
query Personas {
  personas {
    id
    nombres
    sexo
    apellidos
  }
}
  `
  ;



export {GET_CLIENTES}

  