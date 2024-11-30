import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage: 'url(/img/footer.png)'}}>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/juan-camilo-lopez-usma-developer" target="_blank" rel="noreferrer">
                    <img src="/img/Linkedin.png" alt="linkedin" />
                </a>
                <a href="https://github.com/JuanC046" target="_blank" rel="noreferrer">
                    <img src="/img/Github.png" alt="Twitter" />
                </a>
            </div>
            
            <p>Desarrollado por Juan <br></br>© 2024 - Todos los derechos reservados</p>
            
        </footer>
    );
}
export default Footer;