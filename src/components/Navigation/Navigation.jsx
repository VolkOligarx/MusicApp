import * as S from './style'
import Menu from "../Menu/Menu";
import { useState } from "react"

const Navigation = () => {

    const [visible, setVisible] = useState(false)

    const handleClick = () => setVisible(!visible)


return (
<S.MainNav>
  <S.NavLogo>
    <S.Logo src='./img/logo.png' alt="logo" />
  </S.NavLogo>
  <S.NavBurger onClick={handleClick}>
    <S.BurgerLine />
    <S.BurgerLine />
    <S.BurgerLine />
  </S.NavBurger>
  {visible && <Menu />}
</S.MainNav>
)
}

export default Navigation