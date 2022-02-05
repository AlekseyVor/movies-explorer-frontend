import React from 'react';
import './AboutProject.css';

export default function AboutProject() {

        return (
<div className="section">
    <h2 className="section__title">О проекте</h2>
    <h3 className="section__subtitle">Дипломный проект включал 5 этапов</h3>
    <p className="section__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
    <h3 className="section__subtitle">На выполнение диплома ушло 5 недель</h3>
    <p className="section__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    <table className="about__table">
        <p className="table__text table__text_theme_green">1 неделя</p>
        <p className="table__text table__text_theme_grey">4 недели</p>
        <p className="table__text">Back-end</p>
        <p className="table__text">Front-end</p>
    </table>
</div>
        )
}