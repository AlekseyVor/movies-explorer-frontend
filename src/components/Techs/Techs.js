import React from 'react';
import './Techs.css';

export default function Techs() {

        return (
<div className="section">
    <h2 className="section__title">О проекте</h2>
    <h3 className="section__subtitle">7 технологий</h3>
    <p className="section__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <table className="technology__table">
        <li className="table__cell">HTML</li>
        <li className="table__cell">CSS</li>
        <li className="table__cell">JS</li>
        <li className="table__cell">React</li>
        <li className="table__cell">Git</li>
        <li className="table__cell">Express.js</li>
        <li className="table__cell">MongoDB</li>
    </table>
</div>
        )
}