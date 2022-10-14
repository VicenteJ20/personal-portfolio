import { NavLink } from './NavLinkP'
import { FaArrowRight } from 'react-icons/fa'

export const CardIcon = ({ icon, title }) => {
  return (
    <div className='card-icon' title={title}>
      <p className='icon'>{icon}</p>
      <h3 className='icon-title'>{title}</h3>
    </div>
  )
}

export const CardHobbies = ({ title, imgUrl, description, titleDesc }) => {
  const img = new URL(`../assets/${imgUrl}`, import.meta.url).href

  return (
    <div className='card-hobbie p-0'>
      <img className='img-hobbie' src={img} title={titleDesc} />
      <h3 className='title-hobbie'>{title}</h3>
      <p className='description-hobby'>{description}</p>
    </div>
  )
}

export const CardProject = ({ title, description, imgUrl }) => {
  const img = new URL(`../assets/${imgUrl}`, import.meta.url).href

  return (
    <div className='background-card' style={{ backgroundImage: `url('${img}')` }}>
      <h3 className='title-card'>{title}</h3>
      <p className='description-card'>{description}</p>
      <p className='moreInfoLink'><NavLink to='/'>Más Información <FaArrowRight /></NavLink></p>
    </div>
  )
}
