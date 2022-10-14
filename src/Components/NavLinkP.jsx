import { NavLink as NavLinkRouterDom } from 'react-router-dom'

export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRouterDom
      {...props}
      className={({ isActive }) => isActive ? 'is-active' : undefined}
      to={to}
    >{children}
    </NavLinkRouterDom>
  )
}
