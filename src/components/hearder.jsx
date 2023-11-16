import '../style/header.css';
import logo from '../assets/logo.svg';

const header = () => {
    return (
        <header>
            <div>
                <img className="logo-img" src={logo} alt="logo" />
            </div>
            <div className='menu'>
                <span className='item-menu'>PÁGINA INICIAL</span>
                <span className='item-menu'>QUEM SOMOS</span>
                <span className='item-menu'>PRODUTOS</span>
                <span className='item-menu'>FALE CONOSCO</span>
            </div>
        </header>
    );
}   

export default header;