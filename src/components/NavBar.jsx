import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { BsFilePerson } from 'react-icons/bs';
import { IoAlbumsOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import Clock from './Clock';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-logo">
        <h1>K</h1>
      </div>
      <div className="NavBar-menu">
        <nav>
          <ul>
            <li><Link className='nav-icons' to='/' aria-label='Home Page'><FiHome /></Link></li>
            <li><Link className='nav-icons' to='/profile' aria-label='My Profile'><BsFilePerson /></Link></li>
            <li><Link className='nav-icons' to='/projects'aria-label='My Projects'><IoAlbumsOutline /></Link></li>
            <li><Link className='nav-icons' to='/contact' aria-label='Contact Me !'><GoMail /></Link></li>
          </ul>
        </nav>
      </div>
      <div className="NavBar-bottom">
        <h1><Clock/></h1>
      </div>
    </div>
  );
}

export default NavBar;
