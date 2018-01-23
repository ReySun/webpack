import * as React from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom';
import { RouteLink } from './tree-shaking-test'

export function Footer (){
    return (
        <div className='footer'>
            <Route path="/:id" component={RouteLink}/>
            <ul className='filters'>
                <li><NavLink activeClassName="selected" to="/all">All</NavLink></li>
                <li><NavLink activeClassName="selected" to="/active">Active</NavLink></li>
                <li><NavLink activeClassName="selected" to="/completed">Completed</NavLink></li>
            </ul>
        </div>
    )
}