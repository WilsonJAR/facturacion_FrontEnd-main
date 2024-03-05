import { gql } from "@apollo/client";

const GET_PRODUCTOS = gql `
    query Query {
    productos {
        id
        nombre
        precio1
        puntoReorden
    }
    }
`;

export{GET_PRODUCTOS}