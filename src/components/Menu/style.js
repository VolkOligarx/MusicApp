import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`

export const MenuLink = styled(NavLink)`
color: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`

export const NavMenu = styled.div`
display: block;
visibility: visible;
`