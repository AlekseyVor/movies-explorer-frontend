import React from 'react';
import { Link } from 'react-router-dom';
import logoHeaderPath from '../../images/logo.svg';
import './Header.css';

export default function Header() {

        return (
<header className="header">
<img className="header__logo" alt="логотип заголовка" src={logoHeaderPath}/>
<div>
<Link className="header__link">Регистрация</Link>
<button className="header__button"><Link className="header__link">Войти</Link></button>
</div>
</header>
        )
}