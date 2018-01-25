import * as React from 'react';
import { Header }  from '../containers/Header';
import { TodoLists } from '../containers/TodoLists';
import { Footer } from './Footer';
import 'todomvc-app-css';
import { Route } from 'react-router-dom';
const Main = () => (
    <div className='todoapp'>
        <Header />
        <Route path="/:id" component={TodoLists}/>
        <Footer />
    </div>
);
export default Main;