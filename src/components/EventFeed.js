import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import EventInfo from './EventInfo';
import store from './../Store'
import updater from './../Store'


function EventFeed(props){
    const {events} = props;
    // console.log(events.map(() => 1));
    return (
        <div id="event_feed">
            <h1>Лента</h1>
            {events.map(event=><EventInfo key={event.id} id = {event.id} link={event.chat} title={event.name} place={event.place} time={event.time}/>)}
        </div>
    )
}

const mapStateToProps = function(state) {
    return {events: state};
}

const EvCon = connect(mapStateToProps)(EventFeed)

export default EvCon;