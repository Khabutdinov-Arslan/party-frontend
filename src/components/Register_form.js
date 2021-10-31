import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import configData from "./../config.json";


function RegisterForm(){
    const cookies = new Cookies();
    const history = useHistory();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [department, setDepartment] = useState("frkt");
    const [course, setCourse] = useState("");


    function SubmitHandler(e){
        e.preventDefault();
        let request_body = JSON.stringify({
            username: login, 
            password: password,
            surname: surname,
            name: name,
            patronymic: patronymic,
            department: department,
            course: course
        });
        console.log(request_body)
        fetch(configData.SERVER_URL + 'api/users/create/', 
        {method: 'POST',
         body: request_body, 
         headers:{'Content-Type': 'application/json'}
        }).then(data=>console.log(data)).then(history.push('/'));
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div class='form_row'>
                <label for='login'>Логин</label>
                <input type='text' name='login' onChange={e => setLogin(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='password'>Пароль</label>
                <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div class='form_row'>
                <label for='surname'>Фамилия</label>
                <input type='text' name='surname' onChange={e => setSurname(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='name'>Имя</label>
                <input type='text' name='name' onChange={e => setName(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='patronymic'>Отчество</label>
                <input type='text' name='patronymic' onChange={e => setPatronymic(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='department'>Физтех-школа</label>
                <select name='department' onChange={e => setDepartment(e.target.value)}>
                    <option value='frkt'>ФРКТ</option>
                    <option value='lpr'>ЛФИ</option>
                    <option value='fakt'>ФАКТ</option>
                    <option value='fefm'>ФЭФМ</option>
                    <option value='fpmi'>ФПМИ</option>
                    <option value='fbmf'>ФБМФ</option>
                    <option value='dnbic'>ИНБИКСТ</option>
                </select>
            </div>
            <div class='form_row'>
                <label for='course'>Курс</label>
                <input type='text' name='course' onChange={e => setCourse(e.target.value)}/>
            </div>
            <div class='form_row'>
                <input type='submit' value='Регистрация'/>
            </div>
        </form>
    )
}




export default RegisterForm;