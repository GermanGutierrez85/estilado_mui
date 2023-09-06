import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
    <header>
     <nav>
       <ul className={styles.header}>
         <li>
            <NavLink to="/">Inicio</NavLink>
         </li>
         <li>
            <NavLink to="/about">Nosotros</NavLink>
         </li>
         <li>
            <NavLink to="/contact">Contacto</NavLink>
         </li>
       </ul>

      </nav>
    </header>
    </>
  )
}
