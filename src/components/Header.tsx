import * as React from 'react';

export function Header() {
    return (<>
        <h1>todos</h1>
        <input type="text" className='new-todo' placeholder='What needs to be done?' />
    </>)
}