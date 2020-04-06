import React, { Component } from 'react';

import './rain.scss';

const Repeat = (props) => {
    let items = [];
    for(let i = 0; i < props.numTimes; i++){
        items.push(props.children(i));
    }
    return <i>{items}</i>
}

export const Rain = () => {
    return(  
        <Repeat numTimes={200}>
        {(index) => <i className="rain" key={index}></i>}
        </Repeat>
    )
}