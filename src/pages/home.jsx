import Hearder from '../components/hearder';
import Footer from '../components/footer';
import Inicial from '../components/inicial';
import Somos from '../components/somos';
import Unidade from '../components/unidades';
import '../style/home.css';
import { useState } from 'react';

const Home = () => {
    const [page, setPage] = useState('somos');

    const handlePage = () => {
        if (page === 'home') {
            return (
                <Inicial />
            );
        }
        if (page === 'somos') {
            return (
                <Somos />
            );
        }
        if (page === 'unidades') {
            return (
                <Unidade />
            );
        }
    };

    return (
        <div>
            <header>
                <Hearder 
                    setPage={setPage}
                />
            </header>
            <div>
                {handlePage()}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};


export default Home;