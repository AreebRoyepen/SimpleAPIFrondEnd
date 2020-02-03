import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PersonCard from './components/PersonCard';
import DeletePerson from './components/DeletePerson';
import AddPerson from './components/AddPerson';
import EditPerson from './components/EditPerson';
import Header from './components/Header';
import FindPerson from './components/FindPerson';

const history = createBrowserHistory();

ReactDOM.render(

    <Router history = {history}>
        <Switch>
            <Route exact path = '/'   render = {() => <Header><App/></Header>}/>
            <Route path = '/personCard'   render = {() => <Header><PersonCard/></Header>}/>
            <Route path = '/findPerson'   render = {() => <Header><FindPerson/></Header>}/>
            <Route path = '/deletePerson'   render = {() => <Header><DeletePerson/></Header>}/>
            <Route path = '/addPerson'   render = {() => <Header><AddPerson/></Header>}/>
            <Route path = '/editPerson'   render = {() => <Header><EditPerson/></Header>}/>

        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
