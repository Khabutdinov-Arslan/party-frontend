import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie'

function Logout(){
    const history = useHistory();
    const cookies = new Cookies();
    cookies.set('access', '');
    cookies.set('refresh', '');
    history.push('/');
    return (<h2>lol</h2>);
}

export default Logout;