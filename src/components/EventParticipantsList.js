import React from 'react';

function EventParticipantsList (props){
    const {participants, participants_count} = props;
    return (
        <div id='event_participants'>
            <button id='take_part_button'>Вступить</button>
            <h2>Список участников</h2>
            <ul id='participants_list'>
                {participants.map(participant=><li>{participant}</li>)}
            </ul>
            <p id="expected_people">Ожидается {participants_count} людей</p>
        </div>
    )
}

export default EventParticipantsList;