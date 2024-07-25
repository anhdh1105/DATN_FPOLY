import { Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li><Link to="/Home">Home</Link ></li>
        <li> <Link to="/About">Link bout</Link ></li>
        <li><Link to="/Login">Login</Link ></li>
      </ul>
    </header>
  )
}

export default Header;