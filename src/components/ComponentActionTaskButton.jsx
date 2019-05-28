// ComponentActionTaskButton

import React from 'react';
import PropTypes from 'prop-types';
import Icon from './../containers/Icons/Icon.js';
import { ICONS } from './../containers/Icons/ConstantsIcons.js';
// import { ComponentOneTaskInList } from './ComponentOneTaskInList'

function ComponentActionTaskButton({
    currentLocalStorageKey,
    icon,
    size,
    correctTask,
    deleteTask,
    doneTask
}) {

    let button;

    if (icon === ICONS.CROSS) {
        button = <button className='todo__tasks__button'
            onClick={(e) => deleteTask(currentLocalStorageKey, e)}>
            <Icon icon={icon} size={size} />
        </button>
    } else if (icon === ICONS.CHECKMARK) {
        button = <button className='todo__tasks__button'
            onClick={(e) => doneTask(currentLocalStorageKey, e)}>
            <Icon icon={icon} size={size} />
        </button>
    } else {
        button = <button className='todo__tasks__button'
            onClick={(e) => correctTask(currentLocalStorageKey, e)}>
            <Icon icon={icon} size={size} />
        </button>
    }

    return (
        // <button className='todo__tasks__button'
        // // onClick={props.onClick}
        // >
        //     <Icon icon={icon} size={size} />
        // </button>
        button
    )
}

ComponentActionTaskButton.propTypes = {
    currentLocalStorageKey: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.number,
    deleteTask: PropTypes.func,
    doneTask: PropTypes.func,
    correctTask: PropTypes.func,
}

export { ComponentActionTaskButton };