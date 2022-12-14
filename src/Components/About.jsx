import '../Styles/About.css'
import { FaPython, FaJs, FaHtml5, FaCss3, FaCode, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaWindows, FaRedhat, FaFedora } from 'react-icons/fa'
import { GenericSubtitle, GenericTitle } from './GenericTitle'
import { CardIcon } from './Cards'

const imgAbout = new URL('../assets/about-img.jpg', import.meta.url).href

export function About () {
  return (
    <>
      <section className='About content-section'>
        <div className='div-content-about'>
          <div className='left-about-div'>
            <GenericTitle title='Sobre mí' divWidth='20%' />
            <div className='content-about'>
              <p className='text-content'>Soy Vicente Jorquera, estudiante de Ingeniería en Informática en INACAP y Desarrollador Web Autodidacta. Llevo alrededor de 2 años (Considerando hasta 2022) estudiando Ingeniería en Informática, donde he conseguido aprender sobre sistemas operativos Windows y GNU/Linux, tanto servers como workstations. Actualmente soy usuario de ambos sistemas operativos en sus versiones workstations. Además llevo 1 año aproximadamente estudiando desarrollo web por mi cuenta, donde he aprendido a trabajar con <span className='important-text'>NodeJS, Vanilla JS, React, HTML5, CSS3, MySQL, Python.</span> <br /><br />
                Mi enfoque es desarrollar aplicaciones accesibles, intuitivas y eficientes para que cualquier persona, sin importar su nivel de conocimientos informáticos pueda disfrutar de los beneficios de la tecnología y el internet.
              </p>
            </div>
          </div>
          <div className='right-about-div'>
            <img src={imgAbout} alt='' className='imgAbout img-fluid' />
          </div>
        </div>
      </section>
      <section className='Skills' id='Skills'>
        <GenericTitle title='Habilidades' divWidth='13%' />
        <div className='skills-divs'>
          <div className='left-skills'>
            <div className='languages-div'>
              <GenericSubtitle title='Lenguajes' divWidth='20%' />
              <div className='cards-div-skills'>
                <CardIcon icon={<FaPython />} title='Python' />
                <CardIcon icon={<FaJs />} title='JS' />
                <CardIcon icon={<FaHtml5 />} title='HTML5' />
                <CardIcon icon={<FaCss3 />} title='CSS 3' />
                <CardIcon icon={<FaCode />} title='C#' />
                <CardIcon icon={<FaDatabase />} title='MySql' />
              </div>
            </div>
            <div className='frameworks-div'>
              <GenericSubtitle title='Frameworks' divWidth='10%' />
              <div className='cards-div-skills'>
                <CardIcon icon={<FaReact />} title='React' />
                <CardIcon icon={<FaNodeJs />} title='NodeJS' />
              </div>
            </div>
            <div className='version-control-div'>
              <GenericSubtitle title='Control de versiones' divWidth='40%' />
              <div className='cards-div-skills'>
                <CardIcon icon={<FaGitAlt />} title='Git' />
              </div>
            </div>
          </div>
          <div className='right-divs'>
            <div className='os-server'>
              <GenericSubtitle title='Sistemas operativos (Server)' divWidth='70%' />
              <div className='cards-div-skills'>
                <CardIcon icon={<FaWindows />} title='Windows' />
                <CardIcon icon={<FaRedhat />} title='RHEL' />
                <CardIcon icon={<FaFedora />} title='Fedora' />
              </div>
            </div>
            <div className='os-workstation'>
              <GenericSubtitle title='Sistemas operativos (Workstation)' divWidth='70%' />
              <div className='cards-div-skills'>
                <CardIcon icon={<FaFedora />} title='Fedora' />
                <CardIcon icon={<FaWindows />} title='Windows' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
