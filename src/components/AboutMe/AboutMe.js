import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo1.jpg'

export default function AboutMe() {

    return (
        <div className="section">
            <h2 className="section__title">Студент</h2>
            <img className="aboutme__photo" src={photo} alt="Мое фото" />
            <h3 className="aboutme__subtitle">Алексей</h3>
            <p className="section__text">Менеджер продукта, 31 год</p>
            <p className="section__text">Я родился и живу в Москве, более 10 лет работаю в электронной коммерци и развиваю логистику. После наступления пандемия решил расширить свой кругозор и пройти курсы по фронтенд-разработке в Яндекс.Практикум</p>
            <div><a></a></div>
        </div>
    )
}