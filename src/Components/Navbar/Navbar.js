import './Navbar.css'
import {FiLogIn,FiUser  } from "react-icons/fi";
const Navbar = () => {
return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Mobile  Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item text-light nav-item-opacity-5">
          <a className="nav-link " aria-current="page" href="/Shop">Shop</a>
        </li>
        <li className="nav-item1 ">
          <a className="nav-link" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mobiles</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#">About</a>
        </li>
      </ul>
      <form class="d-flex ">
    <button class="btn  btn-outline-info text-light text-opacity-5 me-2  " type="button"><FiUser/>Sign Up</button>
    <button class="btn  btn-outline-info text-light text-opacity-5" type="button"><FiLogIn/>Login</button>
  </form>
    
    </div>
  </div>
</nav>


)

}
export default Navbar;

