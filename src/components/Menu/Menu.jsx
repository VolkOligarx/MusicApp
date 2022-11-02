import * as S from './style'

const Menu = () => {
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
</S.NavMenu>
)
}
export default Menu