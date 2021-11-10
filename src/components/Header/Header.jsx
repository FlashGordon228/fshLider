import React from 'react';
import c from './Header.module.css'
import logo from '../../Images/Logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={c.Navigation}>
      <div className={c.Item}>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className={c.Item}>
        <NavLink to="/about">О нас</NavLink >
      </div>
      <div className={c.Item}>
        <NavLink to="/adresses" >Адреса школ</NavLink >
      </div>
      <div className={c.Item}>
        <NavLink to="/camps" >Футбольные сборы</NavLink >
      </div>
      <div className={c.Item}>
        <NavLink to="/news" >Новости</NavLink >
      </div>
      <div className={c.Item}>
        <NavLink to="/contacts" >Контакты</NavLink >
      </div>
    </nav>
  )
}

export default Header;