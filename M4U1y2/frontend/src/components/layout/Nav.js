import React from 'react';
import '../../styles/components/layout/Nav.css';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className='holder'>
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/vivir">Vivir</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/trabajar">Trabajar</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/estudiar">Estudiar</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
