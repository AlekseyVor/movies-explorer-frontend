import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../../images/landing.svg';
import './Promo.css';

export default function Promo() {

        return (
<div className="promo">
        <img className="promo__img" src={landing} alt="Глобус"/>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button"><Link className="promo__link">Узнать больше</Link></button>
</div>
        )
}