import '../Styles/Submit.css'

export const Submit = () => {
  const img = new URL('../assets/submitImg.png', import.meta.url).href

  const redirectToHomePage = () => {
    return window.location.assign('/')
  }

  return (
    <section className='Submit'>
      <div className='submit-content'>
        <figure className='img-submit'>
          <img src={img} alt='' />
        </figure>
        <div className='text-submit'>
          <h2>Datos enviados con éxito</h2>
          <p>Estaremos en contacto lo antes posible ¡Gracias por contactarme!.</p>
          <button className='redirect-btn' onClick={redirectToHomePage}>Volver al inicio</button>
        </div>
      </div>
    </section>
  )
}
