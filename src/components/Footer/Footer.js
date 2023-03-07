
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer className="container">
                <h1 id="contacto" className="text-center">CONTACTO</h1>
                <div className="d-flex row row-cols-1 row-cols-md-3 g-4 pd-5 text-center">
                    <h2>Instagram</h2>
                    <h2>Facebook</h2>
                    <h2>Whatsaap</h2>
                </div>
            </footer>
        </>
    );
};
export default Footer;