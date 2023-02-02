import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-sm bg-light  ">

  <div className="container-fluid">
  
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link className="nav-link" to='/'><img classNameName="navbar-brand" alt='logo' src={logo} /></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/'>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to='/ress'>Reserveration</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to='/'>Order Online</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/login'>Login</Link>
      </li>
    </ul>
  </div>

</nav>
    )
}