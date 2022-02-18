import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className='holder'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/vivir">Vivir</Link></li>
                    <li><Link to="/trabajar">Trabajar</Link></li>
                    <li><Link to="/estudiar">Estudiar</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
