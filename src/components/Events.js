import React from 'react';
import ReactDOM from 'react-dom';
import EvCon from './EventFeed';
import EventFilter from './EventFilter'
import updater from './../Store'

let timerId = setInterval(updater, 2000);


function Events(){
    return (
        <div>
            <EvCon />
        </div>
    )
}

export default Events;