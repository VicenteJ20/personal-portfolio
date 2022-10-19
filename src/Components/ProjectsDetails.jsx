import '../Styles/ProjectDetails.css'
import { GenericTitle } from './GenericTitle'

export const ProjectDetails = ({ ...p }) => {
  function getUrl (folder, img) {
    return String(new URL(`../assets/${folder}/${img}`, import.meta.url).href)
  }

  return (
    <>
      <section className='ProjectDetails'>
        <div className='home-div-project' style={{ backgroundImage: `url('${getUrl(p.folder, p.imgName)}')` }}>
          <h1 className='title-projectd'>{p.title.replaceAll('-', ' ')}</h1>
          <div className='div-centre-separator' />
          <div className='buttons_div_home'>
            <a className='button_home demo_button' href={p.demoUrl} rel='noreferrer' target='_blank'>Live DEMO</a>
            <a className='button_home repo_button' href={p.repoUrl} rel='noreferrer' target='_blank'>Repositorio</a>
          </div>
        </div>
        <div className='description_div'>
          <GenericTitle title='Descripción' divWidth='30%' />
          <p className='description_project'>{p.description}</p>
        </div>
        <div className='gallery_div'>
          <GenericTitle title='Galería' divWidth='30%' />
          <div className='grid-gallery'>
            {
              p.gallery.split(',').map(x => <img className='gallery-img' src={getUrl(p.folder, x)} key={x} alt={x} title={x} />)
            }
          </div>
        </div>
      </section>
    </>
  )
}
