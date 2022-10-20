import { FaGithub, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'
import '../Styles/Home.css'
import { LinkIcon } from './LinkIcon'
import { GenericTitle } from './GenericTitle'
import { CardProject } from './Cards'
import { NavLink } from './NavLinkP'
export function Home () {
  return (
    <>
      <section className='Home content-section'>
        <div className='div-content-home'>
          <h2 className='over-title'>Hola, soy Vicente Jorquera</h2>
          <h1 className='title title-home'>Desarrollador Web e Ingeniero en Informática</h1>
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
      <section className='Recent-projects-home'>
        <header className='header-projects-home'>
          <GenericTitle title='Proyectos recientes' divWidth='100%' />
          <p className='more-info-projects'><NavLink to='/Projects'>Todos los proyectos  <FaArrowRight /></NavLink></p>
        </header>
        <div className='projects-grid'>
          <CardProject title='Landing Page para venta de servicos' description='Web diseñada para que pequeñas y medianas empresas puedan ofrecer sus productos de forma fácil y eficiente a sus potenciales clientes.' imgUrl='office-team.jpg' to='Eddies-web-page' />
          <CardProject title='Encriptador de Texto - Oracle One + Alura.' description='Web básica responsiva que permite "encriptar texto". No utiliza ningún estándar de encriptación, se limita al uso de .replace' imgUrl='cryptography.jpg' to='Encriptador-de-texto-Alura' />
          <CardProject title='Calculadora básica responsiva' description='Aplicación web creada con ReactJS y Bootstrap para realizar cálculos aritméticos simples.' imgUrl='calculator.jpg' to='Calculadora-basica-responsiva' />
          <CardProject title='Calculadora de propinas responsive' description='Aplicación web diseñada para que se realice el cálculo de propinas con porcentaje variable de forma fácil y rápida.' imgUrl='tips.jpg' to='Calculadora-de-propinas' />
        </div>
      </section>
    </>
  )
}
