import {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import {Link, } from 'react-router-dom'
import Data from './Data';
import "./NavbarStyles.scss"

export const HamburgerMenu = () => {
    const [menu, setMenu] = useState(false) ;
    const toggleMenu = () => {
        setMenu(!menu)
       
    }
  
  return (
    <div>
        <div className="navbar-local">
            <Link to="#" className='menu-bars'>
            <FaBars   onClick={toggleMenu}/>
            </Link>
        </div>
<nav className= {menu ? 'nav-menu-active' : 'nav-menu'}>
<ul className="nav-menu-items" onClick={toggleMenu}>
    <li>
        <Link to="/" className="nav-links" >
           <AiOutlineClose  /> 
        </Link>
    </li>

    {Data.map((item, index) =>{
        return(
            <li key={index} className={item.className}>
            <Link to={item.path} className="nav-links" >
                {item.icon}
                <span>{item.title}</span>
            </Link>
        </li>
        )
    })}

</ul>

</nav>

    </div>
  )
}
