import React from 'react';
import Icon from './../containers/Icons/Icon.js';
// import './TaskButtonVision.css';

// TaskButtonVision Component

function TaskButtonVision(props) {
    return <button className='todo__tasks__button'
        onClick={props.onClick} >
        <Icon icon={props.icon} size={props.size} />
    </button>
}

export { TaskButtonVision };