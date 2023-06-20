import { NavLink , Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.svg';

function Header (){ 

    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="logo Kasa" className="logo" />
            </Link>
            <nav >
                <ul className="navbar">
                    <li>
                        <NavLink
                        to="/" 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "inactive"}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "inactive"}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;