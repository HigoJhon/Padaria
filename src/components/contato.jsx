import "../style/contato.css";

const Contato = () => {
    return (
        <div className="contato"> 
            <h2 className="titulo">ENTRE EM CONTATO.</h2>
            <br />
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Assunto" />
                <textarea placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
            <br />
        </div>
    );
};


export default Contato;