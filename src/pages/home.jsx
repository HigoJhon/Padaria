import Hearder from '../components/hearder';
import Footer from '../components/footer';
import '../style/home.css';
import Paes from '../assets/paes.jpeg';
import Pao from '../assets/pao.jpeg';
import bolo from '../assets/bolo.jpeg';
import torta from '../assets/tortas.jpeg';
import salgados from '../assets/salgados.jpeg';
import sanduiches from '../assets/sanduiches.jpeg';

const Home = () => {
    return (
        <div>
            <header>
                <Hearder />
            </header>
            <main>
                <div className='img-paes'>
                    <img src={Paes} alt="Pão delicioso"/>
                </div>
                <br />
                <div className='div-itens'>
                    <div className='div-inf'>
                        <img src={Pao} alt="informações do pao" />
                        <div>
                            <h3>Pão Frances</h3>
                            <p>Deliciosos pães frescos feitos diariamente na nossa padaria. Experimente a qualidade e sabor incomparáveis!</p>
                            <p>R$ 1,00 por unidade.</p>
                        </div>
                    </div>
                    <br />
                    <div className='div-inf'>
                        <img src={bolo} alt="informações do bolo" />
                        <div>
                            <h3>Bolo de Chocolate</h3>
                            <p>Venha conhecer nossos bolos e tortas, ouvir dizer por ai que é o melhor da região!</p>
                            <p>A partir de R$ 12,00</p>
                        </div>
                    </div>
                    <br />
                    <div className='div-inf'>
                        <img src={torta} alt="Informações da torta" />
                        <div>
                            <h3>Torta de Morango</h3>
                            <p>Experimente nossas tortas, temos uma variedade de sabores para todos os gostos!</p>
                            <p>A partir de R$ 15,99</p>
                        </div>
                    </div>
                    <br />
                    <div className='div-inf'>
                        <img src={salgados} alt="Informações do salgado" />
                        <div>
                            <h3>Salgados</h3>
                            <p>Experimente nossos salgados, temos uma variedade de sabores para todos os gostos!</p>
                            <p>A partir de R$ 5,99</p>
                        </div>
                    </div>
                    <br />
                    <div className='div-inf'>
                        <img src={sanduiches} alt="Informações do sanduiche" />
                        <div>
                            <h3>Sanduiches</h3>
                            <p>Experimente nossos sanduiches, temos uma variedade de sabores para todos os gostos!</p>
                            <p>A partir de R$ 8,99</p>
                        </div>
                    </div>               
                </div>
                <br />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};


export default Home;