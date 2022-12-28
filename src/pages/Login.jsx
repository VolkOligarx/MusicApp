import * as S from "./LoginStyle"
import { NavLink } from 'react-router-dom'
import axios from "axios"

import { useState } from "react";

export let username
export let token
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  
    const handleClick = () => {
        axios.post('https://painassasin.online/user/login/', {"email": email, "password": password})
        
        .then(function (data) {

          username = data.data.username
          
          console.log(username);

          axios.post('https://painassasin.online/user/token/', {"email": email, "password": password})
          
          .then(function (data) {

            console.log(data.data.access);

            token = data.data.access

            window.location.href = '/'

          })
          
          .catch(function (error) {

            console.log(error);

            alert('Ошибка \n Обратитесь к администратору сайта')

          })
        })
        
        .catch(function (error) {

          alert(error.response.data.detail);

        })
      }
  
    return (
      <S.Div>
        <S.Form>
          <S.Img src="./img/darkLogo.png" alt="logo" />
          <S.Input type="text" placeholder="Почта" value={email} onChange={loginHandleChange} />
          <S.Input type="password" placeholder="Пароль" name="" id="" value={password} onChange={passwordHandleChange} />
          <NavLink onClick={handleClick} className="loginButton">Войти</NavLink>
        </S.Form>
        <NavLink to="/reg">Зарегистрироваться</NavLink>
      </S.Div>
    )
  }