import styled from "styled-components";

const Contenedor = styled.div`
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items:center;
    overflow: hidden;
`;

const ContenedorSections = styled.div`
    margin: 1rem auto;
    overflow: hidden;
    background-color:#fff;
    border-radius:1.5rem;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 26px -9px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 26px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 26px -9px rgba(0,0,0,0.75);

`;



export  {Contenedor, ContenedorSections};