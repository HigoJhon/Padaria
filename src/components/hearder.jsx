import { useState } from 'react';
import '../style/header.css';
import logo from '../assets/logo.svg';
import menuBtn from '../assets/menu-btn.png';
import PropTypes from 'prop-types';

const Header = ({ setPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('clicou');
    };

    const handleClickMenu = (newPage) => {
        setTimeout(() => {
            setIsMenuOpen(!isMenuOpen);
            setPage(newPage);
        }, 200);
    };

    return (
        <header>
            <div className='menu mobile'>
                <div>
                    <img className="logo-img" src={logo} alt="logo" />
                </div>
                <img className='menu-btn' src={menuBtn} onClick={toogleMenu} alt="menu" />
            </div>
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <span className='item-menu' onClick={() => handleClickMenu("home")}>
                    PÁGINA INICIAL
                </span>
                <span className='item-menu' onClick={() => handleClickMenu("somos")}>
                    QUEM SOMOS
                </span>
                <span className='item-menu' onClick={() => handleClickMenu("unidades")}>
                    UNIDADES
                </span>
                <span className='item-menu' onClick={() => handleClickMenu("produtos")}>
                    PRODUTOS
                </span>
                <span className='item-menu' onClick={() => handleClickMenu("fale-conosco")}>
                    FALE CONOSCO
                </span>
            </div>
            <div className='encomendas-btn'>
                <span>ENCOMENDAS</span>
            </div>
        </header>
    );
};

Header.propTypes = {
    setPage: PropTypes.func.isRequired,
};

export default Header;
