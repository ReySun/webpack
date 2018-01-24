import * as React from 'react';
import { ListLink } from './ListLink';
export function TodoLists({ match  }){
    console.log(match.params);
    return (
        <div className='main'>
            <input className='toggle-all' type="checkbox"/>
            <ul className='todo-list'>
                <ListLink />
            </ul>
        </div>
    )
}