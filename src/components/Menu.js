import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie'


function Menu(){
    
    return (
        <nav id = "top_menu">
            <a href='/'>Лента</a>
            <a href='/add_event'>Создать событие</a>
            <a href='/login'>Войти</a>
            <a href='/register'>Регистрация</a>
            <a href='/logout'>Выйти</a>
        </nav>
    )
}

export default Menu;