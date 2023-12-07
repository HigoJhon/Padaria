import Padaria from '../assets/padaria.jpeg';
import '../style/somos.css';

const Somos = () => {
    return (
        <div className="container">
            <div className='div-somos'>
                <h3 className='bakery-house'> Somos a Bakery House</h3>
                <br />
                <p className='p-somos'>A Bakery House é uma padaria que está no mercado há 10 anos, com o objetivo de levar o melhor da panificação para os nossos clientes.
                    <br />
                    <br />
                    Nossos produtos são feitos com ingredientes de qualidade e com muito amor, para que você tenha a melhor experiência possível.
                    <br />
                    <br />
                    Venha nos conhecer e experimentar nossos produtos, temos certeza que você vai adorar!
                </p>
                <br />
                <img className='img-somos' src={Padaria} alt="Padaria" />
                <br />
                <h3 className='bakery-house'>Onde tudo começou</h3>
                <br />
                <p className='p-somos'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel placerat diam. Sed ultrices ultricies ipsum at pulvinar. Donec consectetur rutrum neque at maximus. Nunc luctus ligula at sem euismod mattis vitae sit amet ligula. Duis suscipit consectetur sem, sed tincidunt turpis pellentesque vel. Morbi diam sapien, tincidunt tincidunt libero eu, accumsan laoreet elit. Donec molestie nibh eget lorem mattis molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras suscipit fringilla purus nec scelerisque. Proin auctor, arcu a egestas vestibulum, ante nisi vulputate erat, in interdum purus nisi id erat. Etiam quam dolor, dictum rhoncus eros sed, congue malesuada lectus. Nunc quis lacus sit amet dolor efficitur ultricies. Duis tempor nisi et risus pellentesque fermentum. Duis nec commodo risus.
                    <br />
                    Praesent fermentum magna nec accumsan porta. In faucibus congue sem sed venenatis. Donec tristique tincidunt euismod. Suspendisse ultrices cursus erat non dignissim. Duis accumsan urna sit amet purus bibendum, in molestie lacus tempus. Nullam porta mi et leo dignissim, sit amet cursus nunc ornare. Morbi ut urna eu purus tempor faucibus. Suspendisse porttitor ante orci, nec semper nibh ultricies at. Cras eu velit a massa bibendum volutpat sed eu tortor. Nulla malesuada sed ligula sit amet suscipit. Cras erat erat, aliquet id diam sit amet, vestibulum tincidunt tortor. Mauris lacinia nunc nec ex tempus pulvinar. Nunc volutpat mauris ut tempor maximus. Donec in dolor ullamcorper, rutrum nunc non, condimentum felis. Cras nec eros purus. Aliquam porttitor mattis suscipit.
                </p>
            </div>
            <br />
        </div>
    )
};

export default Somos