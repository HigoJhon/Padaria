import Hearder from '../components/hearder';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            { <Hearder /> }
            <main>
                <h1>Home</h1>
            </main>
            { <Footer /> }
        </div>
    );
};

export default Home;