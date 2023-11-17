import { useState } from 'react';
import '../style/header.css';
import logo from '../assets/logo.svg';
import menuBtn from '../assets/menu-btn.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('clicou');
    };

    const handleClickMenu = () => {
        setTimeout(() => {
            setIsMenuOpen(!isMenuOpen);
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
                <span
                    className='item-menu'
                    onClick={handleClickMenu}
                >
                    PÁGINA INICIAL
                </span>
                <span
                    className='item-menu'
                    onClick={handleClickMenu}
                >
                    QUEM SOMOS
                </span>
                <span
                    className='item-menu'
                    onClick={handleClickMenu}
                >
                    UNIDADES
                </span>
                <span
                    className='item-menu'
                    onClick={handleClickMenu}
                >
                    PRODUTOS
                </span>
                <span
                    className='item-menu'
                    onClick={handleClickMenu}
                >
                    FALE CONOSCO
                </span>
            </div>
            <div className='encomendas-btn'>
                <span>ENCOMENDAS</span>
            </div>
        </header>
    );
}   

export default Header;
