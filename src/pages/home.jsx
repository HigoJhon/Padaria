import Hearder from '../components/hearder';
import Footer from '../components/footer';
import Inicial from '../components/inicial';
import '../style/home.css';
import { useEffect, useState } from 'react';

const Home = () => {
    const [page, setPage] = useState('home');

    const handlePage = () => {
        if (page === 'home') {
            return (
                <Inicial />
            );
        }
    };

    useEffect(() => {
    }, [page]);

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