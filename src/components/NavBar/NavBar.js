import "./NavBar.css";
import logo from "./logo-negro.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <li className="nav-item">
            <Link className="active nav" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="active nav" to="/category/tortas">Tortas</Link>
          </li>
          <li className="nav-item">
            <Link className="active nav" to="/category/alfajores">Alfajores</Link>
          </li>
          <li className="nav-item">
            <Link className="active nav" to="/category/bombones">Bombones</Link>
          </li>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark d-flex">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to ="/"><img src={logo} alt="logo tienda" className="logo" /></Link>
          <h1 className="titulo">Mary Delicatessen</h1>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};
export default NavBar;


