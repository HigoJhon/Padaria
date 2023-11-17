import Hearder from '../components/hearder';
import Footer from '../components/footer';
import '../style/home.css';
import Paes from '../assets/paes.jpeg';
import Pao from '../assets/pao.jpeg';
import bolo from '../assets/bolo.jpeg';

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
                            <p>1$ por unidade.</p>
                        </div>
                    </div>
                    <br />
                    <div className='div-inf'>
                        <img src={bolo} alt="informações do bolo" />
                        <div>
                            <h3>Bolo de Chocolate</h3>
                            <p>Venha conhecer nossos bolos e tortas, ouvir dizer por ai que é o melhor da região!</p>
                            <p>10$ por unidade.</p>
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