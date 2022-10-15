import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Navbar () {
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  return (
    <header className='header-nav'>
      <div className='brand-div'><NavLink to='/'>Vicente Jorquera</NavLink></div>
      <button className='button-mobile' onClick={setupMenu}>
        <div />
        <div />
        <div />
      </button>
      <nav className={`navtag ${active ? 'isActive' : ''}`}>
        <ul className='nav-ul'>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/About'>Sobre mí</NavLink></li>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/Projects'>Proyectos</NavLink></li>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/Hobbies'>Hobbies</NavLink></li>
          <li className='contact-button-li' onClick={setupMenu}>
            <button className='contact-button'><NavLink to='/Contact'>Contacto</NavLink></button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
