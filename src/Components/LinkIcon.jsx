export const LinkIcon = ({ href, icon }) => {
  return (
    <a className='link-icon-footer' href={href} target='_blank' rel='noreferrer'>
      {icon}
    </a>
  )
}
