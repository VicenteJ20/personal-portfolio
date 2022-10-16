import '../Styles/ProjectDetails.css'
import { GenericTitle } from './GenericTitle'

export const ProjectDetails = ({ ...p }) => {
  const img = new URL(`../assets/${p.imgName}`, import.meta.url).href

  return (
    <>
      <section className='ProjectDetails'>
        <div className='home-div-project' style={{ backgroundImage: `url('${img}')` }}>
          <h1 className='title-projectd'>{p.title.replaceAll('-', ' ')}</h1>
          <div className='div-centre-separator' />
          <p className='subtitle-projectd'>{p.subtitle}</p>
        </div>
        <div className='description_div'>
          <GenericTitle title='Descripción' divWidth='8%' />
          <p className='description_project'>{p.description}</p>
        </div>
      </section>
    </>
  )
}
