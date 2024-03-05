import { gql } from "@apollo/client";

const CREATE_CLIENT = gql`
mutation Mutation($data: CreatePersonaInput!) {
  createPersona(data: $data) {
    nombres
    apellidos
    sexo
  }
}
`

const DELETE_CLIENTES = gql`
mutation Mutation($idPersona: Int!) {
  deletePersona(idPersona: $idPersona) {
    id
  }
}
`

export {DELETE_CLIENTES, CREATE_CLIENT}