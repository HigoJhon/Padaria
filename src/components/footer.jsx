import "../style/footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="div-devs">
            <h4>© 2021 - Todos os direitos reservados</h4>
            <br />
            <p>Desenvolvedores
                <br />
                <a href="https://github.com/HigoJhon">Higo Jhon</a> | <a href="https://github.com/thiagohcc">Thiago Henrique</a>
            </p>
        </div>
        <div className="div-contatos">
            <h4>Contato</h4>
            <br />
            <p>Telefone: (11) 99999-9999</p>
            <p>E-mail: contato@contatto.com</p>
        </div>
        <div className="div-redes-sociais">
            <h4>Rede Social</h4>
            <br />
            <a href="https://www.facebook.com/">www.facebook.com</a>
            <br />
            <a href="https://www.instagram.com/">www.instagram.com</a>
        </div>
    </footer>
  );
};

export default Footer;
