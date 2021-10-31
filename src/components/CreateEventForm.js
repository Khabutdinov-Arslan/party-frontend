import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom';
import configData from "./../config.json";


function CreateEventForm(){
    const cookies = new Cookies();
    const history = useHistory();

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState("");
    const [chat, setChat] = useState("");
    const [description, setDescription] = useState("");


    function SubmitHandler(e){
        e.preventDefault();
        let form_data = {
            name: name,
            place: place,
            time: time,
            people: people,
            chat: chat,
            description: description,
            author: 'fuck',
        }
        let refresh_token = cookies.get('refresh');
        fetch(configData.SERVER_URL + 'auth_api/token/refresh/', {method: 'POST', body:JSON.stringify({refresh: refresh_token}), headers:{'Content-Type': 'application/json'}})
        .then(data=>data.json())
        .then(data=>fetch(configData.SERVER_URL + 'api/hello/', {headers:{Authorization: 'Bearer ' + data['access']}}))
        .then(data=>data.json())
        .then(data=>{
            form_data['author'] = data['user'];
            return fetch(configData.SERVER_URL + 'api/events/create/', 
            {method: 'POST',
             body:JSON.stringify(form_data), 
             headers:{'Content-Type': 'application/json'}
            });
        })
        .then(data=>data.json())
        .then(data=>console.log(data))
        .then(history.push('/added_event'));
    }

    const input_size = 10;
    return (
        <form onSubmit={SubmitHandler}>
            <div class='form_row'>
                <label for='name'>Название</label>
                <input type='text' name='name' size={input_size} onChange={e => setName(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='place'>Место</label>
                <input type='text' name='place' size={input_size} onChange={e => setPlace(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='time'>Время</label>
                <input type='datetime-local' name='time' size={input_size} onChange={e => setTime(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='people'>Количество людей</label>
                <input type='number' name='people' size={input_size} onChange={e => setPeople(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='chat'>Чат</label>
                <input type='url' name='chat' size={input_size} onChange={e => setChat(e.target.value)}/>
            </div>
            <div class='form_row'>
                <label for='description' >Описание</label>
                <textarea name='description' onChange={e => setDescription(e.target.value)} cols={input_size + 2} rows='10'>
                
                </textarea>
            </div>
            <div class='form_row'>
                <input type='submit' value='Создать событие'/>
            </div>
        </form>
    )
}

export default CreateEventForm;