// ComponentActionTaskButton

import React from 'react';
import PropTypes from 'prop-types';
import Icon from './../containers/Icons/Icon.js';
// import { ComponentOneTaskInList } from './ComponentOneTaskInList'

function ComponentActionTaskButton({
    currentLocalStorageKey,
    icon,
    size
}) {

    return (
        <button className='todo__tasks__button'
        // onClick={props.onClick}
        >
            <Icon icon={icon} size={size} />
        </button>
    )
}

ComponentActionTaskButton.propTypes = {
    // currentLocalStorageKey: PropTypes.string,
    // todaysTasks: PropTypes.array,
    // donesTasks: PropTypes.array,
}

export { ComponentActionTaskButton };