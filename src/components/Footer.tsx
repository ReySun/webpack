import * as React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer (){
    return (
        <div className='footer'>
            <span className='todo-count'>
                <strong>1</strong>
                <span> items </span>
                <span>left</span>
            </span>
            <ul className='filters'>
                <li><NavLink activeClassName="selected" to="/all">All</NavLink></li>
                <li><NavLink activeClassName="selected" to="/active">Active</NavLink></li>
                <li><NavLink activeClassName="selected" to="/completed">Completed</NavLink></li>
            </ul>
        </div>
    )
};