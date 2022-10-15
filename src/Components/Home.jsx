import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import '../Styles/Home.css'
import { LinkIcon } from './LinkIcon'

export function Home () {
  return (
    <section className='Home content-section'>
      <div className='div-content-home'>
        <h2 className='over-title'>Hola, soy Vicente Jorquera</h2>
        <h1 className='title'>Desarrollador Web e Ingeniero en Informática</h1>
        <h3 className='subtitle'>Soy desarrollador Front-End e Ingeniero en Informática con un amplio conocimiento en tecnologías web y sistemas operativos Windows y GNU/Linux.</h3>
      </div>
      <div className='icons-div-home'>
        <ul className='ul-home'>
          <li><LinkIcon href='https://www.github.com/VicenteJ20' icon={<FaGithub />} /></li>
          <li><LinkIcon href='https://www.linkedin.com/in/vicente-jorquera-655b82228' icon={<FaLinkedinIn />} /></li>
          <li><LinkIcon href='https://www.instagram.com/jvicente_20' icon={<FaInstagram />} /></li>
        </ul>
      </div>
    </section>
  )
}
