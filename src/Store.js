import { connect } from 'react-redux';
import {createStore} from 'redux'
import EventFeed from './components/EventFeed'


function eventsReducer(state, action) {
    switch (action.type) {
       case 'UPDATE':{
            let newState = action.events.data;
            console.log(newState);
            return newState;
       }
       default:{
           return state;
       }
  }
}

const initialEvents = [{
    "id": 3,
    "name": "jjklj",
    "place": "jklkjkl",
    "time": "1998-12-20T18:00:00Z",
    "people": 3,
    "chat": "vk.com",
    "description": "jl;lk;",
    "author": 1
}];

function updater(){
    fetch('http://127.0.0.1:8000/api/events/').then(data=>data.json()).then(data=>store.dispatch({type:'UPDATE', events: {data}}));
}

const store = createStore(eventsReducer, initialEvents);
updater();


export default store;