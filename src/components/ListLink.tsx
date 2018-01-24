import * as React from 'react';

export function ListLink(){
    return (
        <li>
            <div className='view'>
            <input className='toggle' type="checkbox"/>
                <label htmlFor="">active</label>
            </div>
            <button className='destroy'></button>
        </li>
    )
}