import { Link } from 'react-router-dom'
import Logo from '@/assets/img/Logo.svg'

const Header = () => {
    return (
        <header>
            <Link to="/home">
                <img src={Logo} alt="logo Kasa" className="logo" />
            </Link>
            <nav>
                <ul className='nav'>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;