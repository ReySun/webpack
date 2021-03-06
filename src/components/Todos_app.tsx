import * as React from 'react';
import { Header }  from '../containers/Header';
import { TodoLists } from '../containers/TodoLists';
// import  Footer  from './Footer';
import { Footer } from '../containers/Footer';
// import 'todomvc-app-css';
if(!process.env.NODE){ //when server render, nodeJS can't resolve *.css, use this way to import which is not the *.js
    require('todomvc-app-css')
}
import { Route, Redirect, Switch } from 'react-router-dom';
const Main = () => (
    <div className='todoapp'>
        <Header />
            <Switch>
                <Route path="/:id" component={TodoLists}/>
                <Redirect from="/" to="all"/>
            </Switch>
        <Footer />
    </div>
);
export default Main;