import React from 'react';

function EventDescription (props){
    const {title, place, time, description, image, chat} = props;
    return (
        <div id='event_description'>
            <h2>{title}</h2>
            <img src={image} />
            <h3>Время: {time + ', Место: ' + place}</h3>
            <p>{description}</p>
            <a href={chat}>Чат</a>
        </div>
    )
}

export default EventDescription;