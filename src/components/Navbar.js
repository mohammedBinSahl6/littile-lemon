import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
export default function Navbar(){

    return(
        <nav class="navbar navbar-expand-sm bg-light  ">

  <div class="container-fluid">
  
    <ul class="navbar-nav">
    <li class="nav-item">
        <Link class="nav-link" to='/'><img className="navbar-brand" src={logo} /></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/'>Home</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reserveration</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Order Online</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </div>

</nav>
    )
}