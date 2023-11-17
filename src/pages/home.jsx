import Hearder from '../components/hearder';
import Footer from '../components/footer';
import Paes from '../assets/paes.jpeg';
import '../style/home.css';

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