import "../style/unidade.css";

const unidade = () => {
    return (
        <div className="unidades">
            <h1>Nossas Unidades !!</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum lectus, rutrum quis malesuada vitae, ultrices sed nisl. Aenean mollis, arcu at lacinia sodales, nisi ligula rhoncus sapien, a tincidunt enim ante a lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel laoreet mauris. Nullam lacinia lorem at leo pretium ultrices. Fusce vestibulum ac sapien nec sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam a varius tellus, a iaculis ex. Morbi semper non justo ac hendrerit. Donec faucibus, elit ut facilisis cursus, velit velit mattis arcu, at elementum ex urna a dolor. Praesent tincidunt dignissim neque, at semper mi pretium quis. Vestibulum eu ante egestas est lobortis elementum. Nam sed mollis sem. Curabitur at suscipit mauris. Fusce euismod velit ac justo pretium commodo. Donec id nisi ligula.</p>
            <div className="div-local">
                <h2>Unidade SP</h2>
                <p>Endereço: Rua das Flores, 123</p>
                <p>Telefone: (11) 99999-9999</p>
            </div>
            <div className="div-local">
                <h2>Unidade RJ</h2>
                <p>Endereço: Rua das Rosas, 321</p>
                <p>Telefone: (21) 99999-9999</p>
            </div>
            <div className="div-local">
                <h2>Unidade MG</h2>
                <p>Endereço: Rua das Margaridas, 456</p>
                <p>Telefone: (31) 99999-9999</p>
            </div>
            <div className="div-local">
                <h2>Unidade RS</h2>
                <p>Endereço: Rua das Tulipas, 789</p>
                <p>Telefone: (51) 99999-9999</p>
            </div>
        </div>
    );
};

export default unidade;