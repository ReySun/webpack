import * as React from 'react';
export function Hello(){
    return (
        <>
            Hello, tsx module!!!!
        </>
    )
};
export function Haha(){ // tree-shaking test unused function
    return (
        <>
            Haha????
        </>
    )
};