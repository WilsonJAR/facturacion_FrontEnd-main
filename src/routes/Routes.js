import { NavLink, Route, Routes } from 'react-router-dom';
import Ventas from '../views/ventas /Ventas';
import styled from 'styled-components';
import Clientes from '../views/Clientes/Clientes';


const LinksRoutesApp =()=>{
    return (
        <Navegacion>
            <NavLink style={Links} to="/Venta"> Ventas</NavLink>
            <NavLink style={Links} to="/Inventario">Inventario</NavLink>
            <NavLink style={Links} to="/Productos">Productos</NavLink>
            <NavLink style={Links} to="/Clientes">Clientes</NavLink>
            <NavLink style={Links} to="/empleados" > Empleados</NavLink>
            <NavLink style={Links} to="/reportes">  Reportes</NavLink>
            <NavLink style={Links} to="/configuracion">  Configuracion</NavLink>
        </Navegacion>
    )
}
const RoutesApp =()=>{
    return(
        <Routes>
            <Route path="/" element={""} />
            <Route path="/Venta" element={<Ventas/>} />
            <Route path="/Inventario" element={""}/>
            <Route path="/Productos" element={""} />
            <Route path="/Clientes" element={<Clientes/>} />
            <Route path="/empleados" element={""} />
            <Route path="/reportes" element={""} />
            <Route path="/configuracion" element={""} />
        </Routes>
    )
}

const Navegacion = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem;
`;

const Links ={
    textDecoration: "none",
    color: "#fff",
    marginLeft: '1rem',
    cursor: "pointer",
    fontFamily:"var(--fuentePrincipal)"
};





export {RoutesApp, LinksRoutesApp};
