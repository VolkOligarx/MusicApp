import * as S from './style'
import { themes, useThemeContext } from '../../theme'

const Menu = () => {
  const { theme, toggleTheme } = useThemeContext()

  const sun = '/img/icon/lightTheme.svg#light-theme'
  const moon = '/img/icon/darkTheme.svg#dark-theme'

  const toggleThemeImg = theme === themes.dark ? moon : sun

    return (
<S.NavMenu>
  <S.MenuList>
    <S.MenuItem>
      <S.MenuLink to="/">
        Главное
      </S.MenuLink>
    </S.MenuItem>
    <S.MenuItem>
      <S.MenuLink to="/userCollection">
        Мой плейлист
      </S.MenuLink>
    </S.MenuItem>
    <S.MenuItem>
      <S.MenuLink to="/login">
        Войти
      </S.MenuLink>
    </S.MenuItem>
  </S.MenuList>
      <div onClick={toggleTheme}>
        <svg alt="prev">
          <use xlinkHref={toggleThemeImg}></use>
        </svg>
      </div>
</S.NavMenu>
)
}
export default Menu