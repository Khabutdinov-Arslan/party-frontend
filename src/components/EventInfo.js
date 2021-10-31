import React from 'react';

function EventInfo (props){
    console.log(props);
    const {id, link, title, place, time} = props;
    return (
        <div class='event_info'>
            <h2><a href={"event/" + id}>{title}</a></h2>
            <div class="time_place">Место: {time + ', ' + place}</div> 
        </div>
    )
}

export default EventInfo;