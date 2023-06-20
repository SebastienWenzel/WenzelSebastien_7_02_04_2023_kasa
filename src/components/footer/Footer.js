import logo from '../../assets/img/LogoFooter.png'
const Footer = () => {
    return (
            <footer className='footer'>
                <div className='footer__content'>
                    <img src={logo} alt="logo kasa" className="footer__logo"/>
                    <p className="footer__logo--text">© 2020 Kasa. All rights reserved </p>
                </div>
            </footer>
    )
};

export default Footer;