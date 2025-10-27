import { Link } from 'react-router-dom'

import '../styles/Navbar.css'

const Navbar = () => {
  return (

    <nav>
      <div className='nav-container'>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/contact"> Contact </Link></li>
        </ul>

      </div>
      
    </nav>

  )
};

export default Navbar;
