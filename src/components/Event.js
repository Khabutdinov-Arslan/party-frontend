import React from 'react';
import EventDescription from './EventDescription'
import EventParticipantsList from './EventParticipantsList'
import store from './../Store.js'
import { connect } from 'react-redux';
import configData from "./../config.json";
 


function Event(props){
    const {events} = props;
    let url = window.location.href;
    let url_parts = url.split('\/');
    let id = url_parts[url_parts.length - 1]
    console.log(configData.SERVER_URL);
    fetch(configData.SERVER_URL + 'api/event/' + id + '/').then(data=>data.json()).then(data=>store.dispatch({type:'UPDATE', events: {data}}));
    console.log(id);
    return (
        <div>
            <EventDescription key={events[0].id * 2} title={events[0].name} place={events[0].place} time = {events[0].time} description={events[0].description} image={events[0].image} chat={events[0].chat}/>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {events: state};
}

const EvdescCon = connect(mapStateToProps)(Event)

export default EvdescCon;