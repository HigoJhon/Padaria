import Hearder from '../components/hearder';
import Footer from '../components/footer';
import '../style/home.css';
import Paes from '../assets/paes.jpeg';
import Pao from '../assets/pao.jpeg';

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
                <div className='inf-pao'>
                    <img src={Pao} alt="informações do pao" />
                    <div>
                        <h3>Pão Frances</h3>
                        <p>Deliciosos pães frescos feitos diariamente na nossa padaria. Experimente a qualidade e sabor incomparáveis!</p>
                        <p>1$ por unidade.</p>
                    </div>
                </div>
                    <h1>Home</h1>
                    <h1>Home</h1>
                    <h1>Home</h1>
                    <h1>Home</h1>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};


export default Home;