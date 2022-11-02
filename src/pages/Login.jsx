import * as S from "./LoginStyle"
import { NavLink } from 'react-router-dom'

export const Login = () => {
    const handleClick = () => {
      localStorage.setItem('token', true)
      window.location.href = '/'
    }
  
    return (
      <S.Div>
        <S.Form>
          <S.Img src="./img/darkLogo.png" alt="logo" />
          <S.Input type="text" placeholder="Логин" />
          <S.Input type="password" placeholder="Пароль" name="" id="" />
          <NavLink onClick={handleClick} className="loginButton">Войти</NavLink>
        </S.Form>
        <NavLink to="/reg">Зарегистрироваться</NavLink>
      </S.Div>
    )
  }