import "./Footer.css"

const Footer = (props) => {
    return (
        <footer className="footer">
            <section className="social-medias">
                <a href="https://facebook.com" target="_black">
                    <img src="images/fb.png" alt="Facebook"></img>
                </a>
                <a href="https://twitter.com" target="_black">
                    <img src="images/tw.png" alt="Twitter"></img>
                </a>
                <a href="https://instagram.com" target="_black">
                    <img src="images/ig.png" alt="Instagram"></img>
                </a>
            </section>
            <section className="logo">
                <img src="images/logo.png" alt="Logo"></img>
            </section>
            <section className="authorship">
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Footer;