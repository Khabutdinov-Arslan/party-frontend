import React from 'react';

function EventFilter (props){
    const input_size = 30;
    return (
        <div id='event_filter'>
            <form>
                <div class='form_row'>
                    <button id='create_event'>Создать событие</button>
                </div>
                <div class='form_row'>
                    <label for='place'>Место</label>
                    <input type='text' name='place' size={input_size}/>
                </div>
                <div class='form_row'>
                    <label for='time'>Время</label>
                    <input type='datetime-local' name='time' size={input_size}/>
                </div>
                <div class='form_row'>
                    <label for='people'>Количество людей</label>
                    <input type='number' name='people' size={input_size}/>
                </div>
                <div class='form_row'>
                    <label for='categories'>Тематика</label>
                    <input type='text' name='categories' size={input_size}/>
                </div>
                <div class='form_row'>
                    <button id="filter_events">Фильтр</button>
                </div>
                <div class='form_row'>
                    <button id='clear_filter_events'>Сброс</button>
                </div>
            </form>
        </div>
    )
}

export default EventFilter;