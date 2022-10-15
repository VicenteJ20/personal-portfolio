import '../Styles/Footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { LinkIcon } from './LinkIcon'

export function Footer () {
  return (
    <footer className='Footer' id='Footer'>
      <div className='text-footer'>
        <p>&copy; Copyright 2022, Desarrollado por Vicente Jorquera.</p>
      </div>
      <div className='icons-footer'>
        <ul className='ul-icons-footer'>
          <li><LinkIcon href='https://www.github.com/VicenteJ20' icon={<FaGithub />} /></li>
          <li><LinkIcon href='https://www.linkedin.com/in/vicente-jorquera-655b82228' icon={<FaLinkedin />} /></li>
          <li><LinkIcon href='https://www.instagram.com/jvicente_20/' icon={<FaInstagram />} /></li>
        </ul>
      </div>
    </footer>
  )
}
