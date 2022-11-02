import * as S from "./LoginStyle"
import { NavLink } from 'react-router-dom'

export const Reg = () => {

    return (
      <S.Div>
        <S.Form>
        <S.Img src="./img/darkLogo.png" alt="logo" />
        <S.Input type="text" placeholder="Логин" />
        <S.Input type="password" placeholder="Пароль" name="" id="" />
        <S.Input type="password" placeholder="Повторите пароль" name="" id="" />
        <NavLink className="loginButton" to="/login">Зарегистрироваться</NavLink>
        </S.Form>
      </S.Div>
    )
  }