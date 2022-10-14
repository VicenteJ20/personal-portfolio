import '../Styles/GenericTitle.css'

export const GenericTitle = ({ title, divWidth }) => {
  return (
    <header className='generic-header'>
      <h2 className='generic-title'>{title}</h2>
      <div className='generic-bar' style={{ width: divWidth }} />
    </header>
  )
}

export const GenericSubtitle = ({ title, divWidth }) => {
  return (
    <header className='generic-header-subtitle'>
      <h2 className='generic-subtitle'>{title}</h2>
      <div className='generic-bar-subtitle' style={{ width: divWidth }} />
    </header>
  )
}
