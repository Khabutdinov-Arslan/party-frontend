import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import configData from "./../config.json";


function LoginForm(){
    const cookies = new Cookies();
    const history = useHistory();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    function SubmitHandler(e){
        e.preventDefault();
        console.log(login + ':' + password)
        fetch(configData.SERVER_URL + 'auth_api/token/', 
        {method: 'POST',
         body:JSON.stringify({username: login, password: password}), 
         headers:{'Content-Type': 'application/json'}
        }).then(data=>data.json()).then(data => {
            console.log(data)
            cookies.set('access', data['access']);
            cookies.set('refresh', data['refresh']);
        }).then(history.push('/'));
    }

    return (
        <form onSubmit={SubmitHandler}> 
            <div class='form_row'>
                <label for='login'>Логин</label>
                <input type='text' name='login' value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div class='form_row'>
                <label for='password'>Пароль</label>
                <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div class='form_row'>
                <input type='submit' value='Войти'/>
            </div>
        </form>
    )
}

export default LoginForm;