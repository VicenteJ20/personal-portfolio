import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from './Components/NavLinkP'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Footer } from './Components/Footer'

function App () {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg' id='Navbar'>
        <div className='container-fluid'>
          <div className='brand-div'>
            <NavLink to='/' id='nav-brand'>Vicente Jorquera</NavLink>
          </div>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0' id='navbar-nav'>
              <li className='nav-item'><NavLink to='/About'>Sobre mí</NavLink></li>
              <li className='nav-item'><NavLink to='/Projects'>Proyectos</NavLink></li>
              <li className='nav-item'><NavLink to='/Skills'>Habilidades</NavLink></li>
              <li className='nav-item'><NavLink to='/Hobbies'>Hobbies</NavLink></li>
            </ul>
            <button className='contact-button'><NavLink to='/Contact'>Contacto</NavLink></button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
