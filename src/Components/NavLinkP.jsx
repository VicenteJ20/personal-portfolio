import { NavLink as NavLinkRouterDom } from 'react-router-dom'
import '../Styles/NavlinkP.css'

export const NavLink = ({ to, children, ...props }) => {
  return (
    <>
      <NavLinkRouterDom
        {...props}
        className={({ isActive }) => isActive ? 'is-active' : undefined}
        to={to}
      >{children}
      </NavLinkRouterDom>
    </>
  )
}
